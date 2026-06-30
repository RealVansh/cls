import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="bg-[#f8f9fb] pt-24 pb-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {badge && (
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                {badge}
              </span>
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
