"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { chatNodes } from "./chatData";

interface Message {
  type: "bot" | "user";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState("welcome");
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Lead capture state
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadService, setLeadService] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadError, setLeadError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Show teaser after 5 seconds
  useEffect(() => {
    if (hasInteracted) return;
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 5000);
    const hideTimer = setTimeout(() => {
      setShowTeaser(false);
    }, 13000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [hasInteracted]);

  const pushBotMessages = (nodeId: string) => {
    const node = chatNodes[nodeId];
    if (!node) return;
    setCurrentNodeId("_typing"); // Hide options while typing
    setIsTyping(true);

    // Stagger messages one-by-one for natural reading flow
    const msgs = node.messages;
    let delay = 500;

    msgs.forEach((text, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot" as const, text }]);
        // After the last message, show options
        if (i === msgs.length - 1) {
          setIsTyping(false);
          setCurrentNodeId(nodeId);
        }
      }, delay);
      delay += Math.min(400 + text.length * 3, 900); // Longer messages get slightly more delay
    });
  };

  // Send welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => pushBotMessages("welcome"), 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleOptionClick = (label: string, emoji: string, nextId: string) => {
    // Track which service the user is interested in
    if (nextId.startsWith("svc-")) {
      setLeadService(label);
    }

    // Add user message
    setMessages((prev) => [
      ...prev,
      { type: "user", text: `${emoji} ${label}` },
    ]);

    // Push bot response
    pushBotMessages(nextId);
  };

  const handleLeadSubmit = async () => {
    if (!leadName.trim()) {
      setLeadError("Please enter your name");
      return;
    }
    if (!leadPhone.trim() || leadPhone.trim().length < 7) {
      setLeadError("Please enter a valid phone number");
      return;
    }
    setLeadError("");
    setIsSubmittingLead(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/philip@cls.net.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: leadName.trim(),
            phone: leadPhone.trim(),
            source: "Website Chatbot",
            interested_service: leadService || "General Enquiry",
            _cc: "info@cls.net.in",
            _subject: `🔔 New Lead from CLS Chatbot — ${leadName.trim()}`,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed");

      // Clear form
      setLeadName("");
      setLeadPhone("");
      setLeadService("");

      // Show success flow
      const successNode = chatNodes["lead-success"];
      const successMsgs: Message[] = [
        {
          type: "bot",
          text: `Thank you, **${leadName.trim()}**! ✅ Our team will contact you at **${leadPhone.trim()}** shortly.`,
        },
        ...successNode.messages.slice(1).map((t) => ({ type: "bot" as const, text: t })),
      ];
      setMessages((prev) => [...prev, ...successMsgs]);
      setCurrentNodeId("lead-success");
    } catch {
      setLeadError(
        "Sorry, something went wrong. Please try WhatsApp instead: +91 75021 33888"
      );
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowTeaser(false);
    setHasInteracted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentNodeId("welcome");
    setLeadName("");
    setLeadPhone("");
    setLeadService("");
    setLeadError("");
    // Re-trigger welcome
    setTimeout(() => pushBotMessages("welcome"), 100);
  };

  const currentNode = chatNodes[currentNodeId];

  // Safe markdown-like rendering without DOM XSS
  const renderText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Very basic tokenizer for [text](url) and **bold**
      // Splitting by link first
      const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|tel:[^\s)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(renderBold(line.substring(lastIndex, match.index), `${lineIdx}-${lastIndex}`));
        }
        parts.push(
          <a
            key={`link-${lineIdx}-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-brand-primary hover:text-brand-accent"
          >
            {match[1]}
          </a>
        );
        lastIndex = linkRegex.lastIndex;
      }
      
      if (lastIndex < line.length) {
        parts.push(renderBold(line.substring(lastIndex), `${lineIdx}-end`));
      }

      return (
        <span key={`line-${lineIdx}`}>
          {parts.length > 0 ? parts : renderBold(line, `${lineIdx}-full`)}
          {lineIdx < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  const renderBold = (text: string, keyPrefix: string) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={`${keyPrefix}-t-${lastIndex}`}>{text.substring(lastIndex, match.index)}</span>);
      }
      parts.push(<strong key={`${keyPrefix}-b-${match.index}`}>{match[1]}</strong>);
      lastIndex = boldRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(<span key={`${keyPrefix}-t-${lastIndex}`}>{text.substring(lastIndex)}</span>);
    }
    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      {/* Teaser tooltip */}
      {showTeaser && !isOpen && (
        <div className="fixed bottom-20 right-4 z-[999] animate-fade-in sm:right-6">
          <button
            className="cursor-pointer rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm font-medium text-brand-dark shadow-xl ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            onClick={handleOpen}
          >
            👋 Hi! Need help with analytical testing?
          </button>
        </div>
      )}

      {/* Floating Bubble */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-4 right-4 z-[998] flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-brand-dark shadow-lg shadow-brand-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-xl sm:right-6"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
          {/* Pulse ring */}
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-primary opacity-20" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          role="dialog"
          aria-modal="true"
          aria-label="CLS Assistant Chatbot"
          className="fixed bottom-4 right-4 z-[999] flex w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/20 ring-1 ring-black/5 sm:right-6 sm:w-[380px]"
          style={{ height: "min(520px, calc(100vh - 2rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-dark">CLS Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <p className="text-[11px] text-slate-500">Online</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                aria-label="Reset chat"
                title="Start over"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.379 2.341l1.414-1.414a3.5 3.5 0 005.965-1.49l-1.97.55.472-1.727 3.862 1.058-.472 1.726-1.892-.544zM4.688 8.576a5.5 5.5 0 019.379-2.341l-1.414 1.414A3.5 3.5 0 007.688 9.14l1.97-.55-.472 1.727-3.862-1.058.472-1.726 1.892.543z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handleClose}
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto bg-slate-50 px-4 py-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "rounded-br-sm bg-brand-primary text-brand-dark font-medium"
                      : "rounded-bl-sm bg-white text-slate-700 shadow-sm ring-1 ring-black/5"
                  }`}
                >
                  {renderText(msg.text)}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-slide-up">
                <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Reply Options */}
            {!isTyping && currentNode?.options && !currentNode.isLeadCapture && (
              <div className="flex flex-wrap gap-2 pt-2 animate-slide-up">
                {currentNode.options.map((opt) => (
                  <button
                    key={opt.nextId + opt.label}
                    onClick={() =>
                      handleOptionClick(opt.label, opt.emoji, opt.nextId)
                    }
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-brand-primary/50 hover:bg-brand-primary/5 hover:text-brand-primary hover:shadow-md active:scale-95"
                  >
                    <span>{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Lead Capture Form */}
            {!isTyping && currentNode?.isLeadCapture && (
              <div className="animate-slide-up rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="space-y-3">
                  <input
                    type="text"
                    aria-label="Your Name"
                    placeholder="Your Name *"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  />
                  <input
                    type="tel"
                    aria-label="Phone Number"
                    placeholder="Phone Number *"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  />
                  {leadError && (
                    <p role="alert" className="text-xs font-medium text-red-500">
                      {leadError}
                    </p>
                  )}
                  <p className="text-[10px] leading-tight text-slate-400">
                    By submitting, you agree to our team contacting you via email or phone. We will not share your data.
                  </p>
                  <button
                    onClick={handleLeadSubmit}
                    disabled={isSubmittingLead}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary py-2.5 text-sm font-bold text-brand-dark transition-all hover:opacity-90 disabled:opacity-50"
                  >
                    {isSubmittingLead ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setMessages((prev) => [
                        ...prev,
                        { type: "user", text: "🏠 Main Menu" },
                      ]);
                      pushBotMessages("welcome");
                    }}
                    className="w-full text-center text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    ← Back to Main Menu
                  </button>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 bg-white px-4 py-2.5">
            <p className="text-center text-[10px] text-slate-400">
              CLS Private Limited • Precision. Quality. Integrity.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
