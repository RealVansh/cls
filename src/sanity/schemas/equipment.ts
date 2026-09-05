export const equipment = {
  name: 'equipment',
  title: 'Laboratory Departments',
  type: 'document',
  fields: [
    {
      name: 'departmentName',
      title: 'Department Name',
      description: 'e.g. "Mass Spectrometry Systems" or "Spectroscopy & Analysis"',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Department Subtitle',
      description: 'A short sentence explaining what this department does.',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'machines',
      title: 'Machines in this Department',
      description: 'Add all the machines that belong to this department here.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Machine Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'model',
              title: 'Manufacturer / Model',
              type: 'string',
            },
            {
              name: 'description',
              title: 'What does this machine do?',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'model',
            },
          },
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order (1, 2, 3...)',
      description: 'Determines which department shows up first on the website.',
      type: 'number',
      initialValue: 1,
    }
  ],
  preview: {
    select: {
      title: 'departmentName',
      subtitle: 'subtitle',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
