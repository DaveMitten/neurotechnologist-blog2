import Post from '../../../../components/composite/PostPage'
import { getPostById } from '../../../actions/blog'

export default async function PostWrapper({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <Post
      id={post.id}
      title={post.title}
      author={typeof post.author === 'object' ? post.author.email : post.author}
      updatedAt={post.updatedAt}
      createdAt={post.createdAt}
      content={post.content}
      tags={post.tags}
    />
  )
}
