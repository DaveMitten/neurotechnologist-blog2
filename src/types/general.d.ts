export interface LogoLink {
  icon: LogoName
  url: string
}
export type LogoName = 'github' | 'star' | 'fork' | 'x' | 'instagram' | 'linkedin'

export interface ColorScheme {
  bg: string
  text: string
  header: string
  card: string
  button: string
}
