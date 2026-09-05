export const galleryCategory = {
  name: 'galleryCategory',
  title: 'Gallery Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title (e.g. Facility Infrastructure)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Category Description (Optional)',
      type: 'text',
      description: 'A brief description of this gallery category.',
    },
    {
      name: 'showLabels',
      title: 'Show Text Labels under Images?',
      type: 'boolean',
      description: 'Turn this on to show the text labels under the images. Turn off for just photos.',
      initialValue: true,
    },
    {
      name: 'galleryImages',
      title: 'Upload Images Here',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Image Text / Label',
              type: 'string',
              description: 'The text that appears below the image (optional)',
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order (1, 2, 3)',
      type: 'number',
      description: 'Determines which category shows up first, second, etc.',
      initialValue: 1,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
