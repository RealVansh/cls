import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schema'

export default defineConfig({
  basePath: '/admin',
  projectId: '49dzk6do',
  dataset: 'production',
  title: 'CLS CMS',
  plugins: [structureTool()],
  schema: {
    types: schema,
  },
})
