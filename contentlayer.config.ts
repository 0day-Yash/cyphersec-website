import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Drop = defineDocumentType(() => ({
  name: 'Drop',
  filePathPattern: `drops/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    type: { type: 'string', required: true },
    signature: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    summary: { type: 'string', required: true },
    downloadUrl: { type: 'string', required: false },
    githubRepo: { type: 'string', required: false },
    externalLinks: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('drops/', ''),
    },
  },
}))

export const Member = defineDocumentType(() => ({
  name: 'Member',
  filePathPattern: `members/**/*.md`,
  fields: {
    name: { type: 'string', required: true },
    codename: { type: 'string', required: true },
    role: { type: 'string', required: true },
    responsibilities: { type: 'string', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Drop, Member],
})