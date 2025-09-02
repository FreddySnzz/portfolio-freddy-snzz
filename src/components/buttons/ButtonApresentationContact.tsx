import { 
  FaGithub, 
  FaLinkedinIn
} from "react-icons/fa"; 
import { MdOutlineMailOutline } from "react-icons/md";
import openLinkOnButton from "@/data/functions/openNewWindowButton";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
};

export default function ButtonApresentationContact({ className }: ButtonProps) {
  return (
    <div className={`flex grow justify-center items-center ${className}`}>
      <a
        href="https://www.linkedin.com/in/fredson-luiz/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 justify-center items-center ml-3 text-gray-700 hover:text-blue-500 transition-colors"
      >
        <FaLinkedinIn className="text-md" />
      </a>
      <a
        href="https://github.com/FreddySnzz"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 justify-center items-center ml-3 text-gray-700 hover:text-gray-300 transition-colors"
      >
        <FaGithub className="text-md" />
      </a>
      <button 
        onClick={() => openLinkOnButton("mailto:fredsonluiz.03@gmail.com")}
        className="flex gap-1 justify-center items-center ml-3 transition-colors cursor-pointer
        text-gray-700 dark:bg-gray-300 dark:text-gray-900 shadow-lg hover:text-red-500"
      >
        <MdOutlineMailOutline className="text-lg"/>
      </button>
    </div>
  );
};