
import LogoCollection from "../../components/images/LogoCollection";
import Hero from "../../components/sections/Hero";

export default function Home() {
  return (
    <div className="grid grid-flow-row grid-rows-5 min-h-full ">
      <main className="row-span-4 content-center flex flex-row min-h-full">
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
      {/* the business name is the neurotechnologist, it is a sole trading software
      engineering consultancy software engineering, consultancy, technology,
      blockchain, web3, minimalism */}

      <footer className="content-end bg-gradient-to-r from-main via-para to-main mt-auto pt-0.5 ">
        <section className="flex flex-col mx-auto space-y-4 bg-main text-white pt-4 pb-2">
          <p className="flex flex-col text-center text-para">
            Developed and created by
            <span className="text-center">David James Mitten</span>
          </p>

          <div className="flex justify-center">
            <LogoCollection logos="socials" size="small" opacity="opaque" />
          </div>
        </section>
      </footer>
    </div>
  );
}
