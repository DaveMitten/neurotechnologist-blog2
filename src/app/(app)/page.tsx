import Hero from '../../components/sections/Hero'

export default function Home() {
  return (
    <main className="flex-grow flex flex-col justify-center w-full">
      {/* hero */}
      <Hero
        title="Imagine | Create | Adapt"
        description="Helping people achieve through the lens of programming."
      />
      {/* <LogoCollection logos="companies" size="medium" opacity="translucent" /> */}
      {/* motto */}
      {/* intro text */}
      {/* Latest github projects */}
      {/* list of projects pulled from my github account */}
      {/* <ProjectList site="github" /> */}
    </main>
  )
}
