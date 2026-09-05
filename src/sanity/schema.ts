import { type SchemaTypeDefinition } from 'sanity'
import { galleryCategory } from './schemas/galleryCategory'
import { milestone } from './schemas/milestone'
import { accreditation } from './schemas/accreditation'
import { equipment } from './schemas/equipment'
import { clientLogo } from './schemas/clientLogo'

export const schema: SchemaTypeDefinition[] = [
  galleryCategory,
  milestone,
  accreditation,
  equipment,
  clientLogo
]
