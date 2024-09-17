import React, { ReactNode } from "react";
import Image from "next/image";
import LogoGrid from "../grids/LogoGrid";

interface HeroProps {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  gif?: ReactNode;
}

const Hero = ({ title, description, image, gif }: HeroProps) => {
  return (
    <section className="md:w-5/6 lg:w-4/6 grid grid-flow-col mx-auto items-center">
      <article className="flex flex-col space-y-4">
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      {image && <Image src={image.src} alt={image?.alt} />}
      {gif && gif}
      {!image && !gif && <LogoGrid />}
    </section>
  );
};

export default Hero;
