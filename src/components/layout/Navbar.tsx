import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../ThemeToggleButton";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  linkClassName?: string;
}

export default function Navbar({ className, linkClassName }: NavbarProps) {

  return (
    <header className={`flex gap-6 px-6 py-2 w-full sm:text-lg items-center justify-center sm:w-2/3 sm:rounded-full shadow-lg ${className}`}>
      <Link
        href="#"
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
      <Separator orientation="vertical"/>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
};