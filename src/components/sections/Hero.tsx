import React from 'react'

const Hero = ({ title, description }: { title: string; description: string }) => {
  return (
    <section className="text-center my-24">
      <h1 className="mb-4 transition-colors duration-300">{title}</h1>
      <p className="mb-8 transition-colors duration-300">{description}</p>
      {/* <Button className={ text-white font-bold py-2 px-4 transition-colors duration-300`}>
        View Projects
      </Button> */}
    </section>
  )
}

export default Hero
