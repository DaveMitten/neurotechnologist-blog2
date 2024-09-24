import BlogPosts from '../../../components/sections/BlogPosts'
import { getPostsCollection } from '../../actions/blog'

export default async function Blog() {
  const postsCollection = await getPostsCollection()
  if (
    !postsCollection ||
    (Array.isArray(postsCollection) && postsCollection.length === 0) ||
    ('docs' in postsCollection && postsCollection.docs.length === 0)
  ) {
    return <div>No posts found</div>
  }

  const posts = 'docs' in postsCollection ? postsCollection.docs : []
  return <BlogPosts posts={posts} />
}
