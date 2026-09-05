export const milestone = {
  name: 'milestone',
  title: 'Company Milestones',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      description: 'What year did this happen? (e.g. "2004" or "2023")',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'month',
      title: 'Month',
      description: 'What month did this happen? (e.g. "Jan", "Oct", "Dec")',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category (For Color Coding)',
      description: 'Pick the category so the website knows what color icon to show.',
      type: 'string',
      options: {
        list: [
          { title: 'Drugs Control & Licensing (Blue)', value: 'drugs-control' },
          { title: 'NABL / ISO:17025 (Orange/Primary)', value: 'nabl' },
          { title: 'USFDA (Green)', value: 'usfda' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Milestone Title',
      description: 'A short, punchy summary (e.g. "Founded CLS" or "US FDA Approval")',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Detailed Description',
      description: 'Explain exactly what happened in a sentence or two.',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
    },
  },
  orderings: [
    {
      title: 'Chronological Order',
      name: 'chronological',
      by: [
        { field: 'year', direction: 'asc' },
        { field: 'month', direction: 'asc' }
      ],
    },
  ],
}
