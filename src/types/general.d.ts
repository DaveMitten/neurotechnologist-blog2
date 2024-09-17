export interface LogoLink {
  icon: LogoName;
  url: string;
}
export type LogoName =
  | "github"
  | "star"
  | "fork"
  | "x"
  | "instagram"
  | "linkedin";
