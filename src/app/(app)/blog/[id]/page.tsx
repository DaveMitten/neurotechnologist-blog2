import { Clock9 } from 'lucide-react'
import Post from '../../../../components/composite/PostPage'
import { getPostBySlug } from '../../../actions/blog'

export default async function Page({ params }: { params: { id: string } }) {
  const { id: slug } = params
  const post = await getPostBySlug(slug)
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <Post
      id={post.id}
      title={post.title}
      author={(typeof post.author === 'object' ? post.author.fullName : post.author) ?? ''}
      updatedAt={post.updatedAt}
      createdAt={post.createdAt}
      content={post?.content ?? ''}
      tags={post?.tag ?? null}
    />
  )
}
