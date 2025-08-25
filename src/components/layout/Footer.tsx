import { 
  FaGithub, 
  FaLinkedinIn, 
  FaWhatsapp 
} from "react-icons/fa";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer 
      className={`
        p-2 text-center mt-auto bg-black dark:bg-gray-300
        ${className}
      `}
    >
      <div className="flex justify-center items-center">
        <div className="grow justify-center items-center">
          <span className="text-center text-sm font-semibold text-gray-800 dark:text-gray-600 mr-1">&copy; 2025 |</span>
          <span className="text-center text-sm font-semibold">Fredson Luiz</span>
        </div>
        <div className="flex grow justify-center items-center">
          <a
            href="https://wa.me/5586994147549?text=Olá, Fredson! Podemos agendar uma reunião?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 justify-center items-center ml-3 hover:text-gray-500 transition-colors"
          >
            <FaWhatsapp className="text-md" />
          </a>
          <a
            href="https://www.linkedin.com/in/fredson-luiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 justify-center items-center ml-3 hover:text-gray-500 transition-colors"
          >
            <FaLinkedinIn className="text-md" />
          </a>
          <a
            href="https://github.com/FreddySnzz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 justify-center items-center ml-3 hover:text-gray-500 transition-colors"
          >
            <FaGithub className="text-md" />
          </a>
        </div>
      </div>
    </footer>
  );
};