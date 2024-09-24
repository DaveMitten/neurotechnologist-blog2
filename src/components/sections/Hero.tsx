import React from 'react'
import { Button } from '../ui/button'

interface HeroProps {
  header: string
  text: string
  button: string
}

const Hero = (props: HeroProps) => {
  const { header, text, button } = props
  return (
    <section className="text-center my-24">
      <h1 className={`mb-4 ${header} transition-colors duration-300`}>Imagine | Create | Adapt</h1>
      <p className={`mb-8 ${text} transition-colors duration-300`}>
        Transforming ideas into robust, scalable solutions.
      </p>
      <Button className={`${button} text-white font-bold py-2 px-4 transition-colors duration-300`}>
        View Projects
      </Button>
    </section>
  )
}

export default Hero
