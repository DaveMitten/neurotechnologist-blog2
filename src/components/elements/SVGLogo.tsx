import { FaRegStar, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { TbGitFork } from 'react-icons/tb'
import { LogoName } from '../../types/general'

export const logos = {
  github: <FiGithub />,
  star: <FaRegStar />,
  fork: <TbGitFork />,
  x: <FaXTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
}

const SVGLogo = ({
  name,
  size = 50,
  opacity = 1,
}: {
  name: LogoName
  size?: number
  opacity?: number
}) => {
  const selectedLogo = logos[name]

  if (!selectedLogo) {
    return ''
  }

  return (
    <div
      className={`opacity-${opacity} w-${size} h-${size} flex items-center justify-center `}
      style={{ width: size, height: size }}
    >
      {selectedLogo}
    </div>
  )
}
export default SVGLogo
