import TimeTag from '../../../components/elements/TimeTag'
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
  console.log(posts)
  return (
    <section className="h-full space-y-10 w-full">
      <h1>Blog</h1>
      <div className="grid grid-cols-2 grid-flow-row gap-10">
        {posts.map((post) => {
          return (
            <a key={post.title} href={`/blog/${post.id}`}>
              <div className="border-1 border-white">
                <div className="p-0.5 w-[250px] group relative">
                  <li className="bg-main py-4">
                    <h3 className="capitalize">{post.title}</h3>
                    {typeof post.author === 'string' && <p>{post.author}</p>}
                    <TimeTag date={post.createdAt} />
                  </li>
                  <span className="absolute -top-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-highlight to-main group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -top-0 right-1/2 w-0 h-0.5 bg-gradient-to-l from-highlight to-main group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-highlight to-main group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-gradient-to-l from-highlight to-main group-hover:w-1/2 group-hover:transition-all"></span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
