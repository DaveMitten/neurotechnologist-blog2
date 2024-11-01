import BlogPosts from '@/components/sections/BlogPosts'
import { getPostsCollection } from '@/app/actions/blog'
import { Post } from '../../../payload-types'
import { getTags } from '@/app/actions/tags'

function findMostRecentPost(posts: Post[]) {
  return posts.reduce((mostRecent, current) => {
    return new Date(mostRecent.createdAt) > new Date(current.createdAt) ? mostRecent : current
  })
}
export default async function Page() {
  const postsCollection = await getPostsCollection()
  const tags = await getTags()
  if (
    !postsCollection ||
    (Array.isArray(postsCollection) && postsCollection.length === 0) ||
    ('docs' in postsCollection && postsCollection.docs.length === 0)
  ) {
    return <div>No posts found</div>
  }

  const posts = 'docs' in postsCollection ? postsCollection.docs : []

  return <BlogPosts posts={posts} tags={tags} mostRecentPost={findMostRecentPost(posts)} />
}
