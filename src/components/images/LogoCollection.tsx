import React from "react";
import { LogoLink } from "../../../general";
import SVGLogo from "../elements/SVGLogo";
interface LogoCollectionProps {
  logos: "github" | "companies" | "socials";
  size: "small" | "medium" | "large";
  opacity: "opaque" | "translucent";
}

const LogoCollection = ({ logos, size, opacity }: LogoCollectionProps) => {
  if (!logos) return null;

  const logoOptions: {
    [key in LogoCollectionProps["logos"]]: LogoLink[];
  } = {
    github: [
      { icon: "star", url: "" },
      { icon: "fork", url: "" },
    ],
    companies: [],
    socials: [
      { icon: "x", url: "https://x.com/DavidJamesMitt1" },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/davidjamesmitten/",
      },
      { icon: "github", url: "https://github.com/DaveMitten" },
    ],
  };

  const sizes = {
    small: 20,
    medium: 50,
    large: 100,
  };

  const opacities = {
    opaque: 1,
    translucent: 0.5,
  };

  // map out the logos
  return (
    <div className="flex gap-4">
      {logoOptions[logos].map((logo: LogoLink, index: number) => {
        return (
          <a
            href={logo.url}
            key={index}
            className="hover:bg-highlight rounded-full p-1"
          >
            <SVGLogo
              name={logo.icon}
              size={sizes[size]}
              opacity={opacities[opacity]}
            />
          </a>
        );
      })}
    </div>
  );
};

export default LogoCollection;
