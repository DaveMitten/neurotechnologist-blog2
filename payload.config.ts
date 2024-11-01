import path from 'path'
import { en } from 'payload/i18n/en'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Media } from './src/collections/Media'
import { Posts } from './src/collections/Posts'
import { BlogPosts } from './src/collections/BlogPosts'
import { Projects } from './src/collections/Projects'
import { Users } from './src/collections/Users'
import { Authors } from './src/collections/Authors'
import { Tags } from './src/collections/Tags'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
  collections: [Authors, Users, Projects, Posts, Media, Tags, BlogPosts],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      // prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
        },
      })
    }
  },
  sharp,
})
