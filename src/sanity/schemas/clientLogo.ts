export const clientLogo = {
  name: 'clientLogo',
  title: 'Client Logos (Mass Upload)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Just type "All Clients" here.',
      initialValue: 'All Clients',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logos',
      title: 'Upload Logos Here',
      description: 'Drag and drop all your client logos here at the exact same time!',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Client Name (Optional)',
              description: 'The name of the company (e.g. "Pfizer"). If left blank, it will use the file name.',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
