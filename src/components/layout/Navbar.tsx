import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../ThemeToggleButton";
import { useEffect, useState } from "react";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const linkClassName = `hover:text-blue-400 transition-colors duration-300 dark:hover:text-gray-400`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed flex mt-4 w-full justify-center z-50">
      <div className={`flex gap-6 px-6 py-2 w-full sm:text-lg items-center justify-center sm:w-2/3 sm:rounded-full 
        shadow-lg text-gray-200 ${
          isScrolled ? `bg-transparent backdrop-blur-sm dark:text-black` 
          : `bg-gradient-to-l from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 dark:text-gray-900`
        } ${className}`}
      >
        <Link
          href="#home"
          className={`flex items-center grow cursor-default ${linkClassName}`}
        >
          <AiFillHome className="text-xl cursor-pointer"/>
          <Separator orientation="vertical" />
        </Link>
        <Link
          href="#sobre"
          className={`flex items-center ${linkClassName}`}
        >
          <span>Sobre</span>
        </Link>
        <Link
          href="#projetos"
          className={`flex items-center ${linkClassName}`}
        >
          <span>Projetos</span>
        </Link>
        <Link
          href="#contato"
          className={`flex items-center ${linkClassName}`}
        >
          <span>Contato</span>
        </Link>
        <Separator orientation="vertical" className="bg-muted-foreground" />
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};