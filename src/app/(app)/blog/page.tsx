import Hero from '../../../components/sections/Hero'

export default async function Page() {
  return (
    <section className="space-y-10 max-w-2xl">
      <Hero title="Blog" description="A list of blog posts I have written." />
      <h4 className="text-center">Unfortunately, the Blog is temporarily offline.</h4>
      <div className="text-center">
        I am in the process of updating payloadcms as it was causing loading issues. It will be back
        soon and bigger than ever.
      </div>
    </section>
  )
}
