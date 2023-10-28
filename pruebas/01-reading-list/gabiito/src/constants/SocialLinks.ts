import { SocialLink } from "@/types";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gzerbino/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/gabiito/",
    icon: FaGithub,
  },
  {
    name: "Website",
    url: "https://gabiito.github.io/",
    icon: TbWorldWww,
  }
];
