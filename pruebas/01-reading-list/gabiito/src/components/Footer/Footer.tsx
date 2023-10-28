import { SocialLink } from "@/types";

interface FooterProps {
  socialLinks: SocialLink[];
}

const date = new Date();

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="flex-none">
      <div className="flex flex-col items-center justify-center w-full gap-6 py-4">
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map(({url, name, icon: Icon}) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400"
            >
              <Icon size={24}/>
              
            </a>
          ))}
        </div>
        <small className="text-xs text-gray-500">
          {date.getFullYear()} - gabiito's solution for 
            <a 
              href="https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              #1 Task
            </a>
            .
        </small>
      </div>
    </footer>
  );
}

export default Footer;
