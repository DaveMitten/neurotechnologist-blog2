import { useRouter } from 'next/router'
import Button from '../../../../components/elements/Button'
import TimeTag from '../../../../components/elements/TimeTag'
import { getPostById } from '../../../actions/blog'
import sanitizeHtml from 'sanitize-html'
export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)
  if (!post) {
    return <div>Post not found</div>
  }

  const content = post.content_html ? sanitizeHtml(post.content_html) : ''

  return (
    <article className="prose lg:prose-xl space-y-4">
      <div className="flex justify-between">
        <Button href="/blog">Back</Button>
        <TimeTag date={post.createdAt} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}
