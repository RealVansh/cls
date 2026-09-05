export const accreditation = {
  name: 'accreditation',
  title: 'Accreditations & Approvals',
  type: 'document',
  fields: [
    {
      name: 'authority',
      title: 'Issuing Authority',
      description: 'Who gave you this license? (e.g. "US FDA" or "CDSCO")',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'License Name / Status',
      description: 'What is the license called? (e.g. "Accredited Laboratory" or "Inspected & Received EIR")',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'certificateNo',
      title: 'Certificate / License Number',
      description: 'The official ID number (e.g. "TN00004704" or "TC-9241")',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo of the Authority',
      description: 'Upload the official logo of the organization (e.g. the FDA or NABL logo).',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'certificateImage',
      title: 'Scanned Certificate Document',
      description: 'Upload the actual picture of the signed certificate document.',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order (1, 2, 3...)',
      description: 'Determines which certificate shows up first on the website.',
      type: 'number',
      initialValue: 1,
    }
  ],
  preview: {
    select: {
      title: 'authority',
      subtitle: 'title',
      media: 'logo',
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
