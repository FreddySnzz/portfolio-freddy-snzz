import Link from "next/link";
import * as motion from "motion/react-client"
import { AiFillHome } from "react-icons/ai";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../ThemeToggleButton";
import { useMediaQuery } from "@/data/hook/useMediaQuery";
import useScrollDirection from "@/data/hook/useScrollDetect";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const linkClassName = `hover:text-blue-400 transition-colors font-semibold duration-300 dark:hover:text-gray-400`
  const { isScrolled, scrollDirection, isAtTop } = useScrollDirection();
  const isMdUp = useMediaQuery("(min-width: 768px)");

  return (
    <motion.header 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed flex w-full justify-center z-50
        ${isScrolled && scrollDirection === 'down' ? 'mt-0 md:mt-4' : ''}`
      }
    >
      <motion.div 
        animate={{
          paddingTop: isScrolled && scrollDirection === "down" ? 8 : 24,
          paddingBottom: isScrolled && scrollDirection === "down" ? 8 : 24,
          width: isScrolled && scrollDirection === "down" && isMdUp ? "80%" : "100%",
          borderRadius: isScrolled && scrollDirection === "down" && isMdUp ? 999 : 0,
          backgroundColor: isAtTop
            ? "#ffffff00"
            : scrollDirection === "down"
            ? "rgba(0, 0, 0, 0)"
            : "#000000",
          backdropFilter: "blur(6px)"
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`flex gap-2 md:gap-6 px-6 md:px-12 items-center justify-center shadow-lg text-gray-200 
          ${isScrolled && scrollDirection === 'down' ? 'md:w-10/12 md:rounded-full ' : 'md:w-full '}
          ${isAtTop ? `bg-gradient-to-l from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 dark:text-gray-900` : ``}
          ${scrollDirection === 'down' ? `dark:text-black` : ``} 
          ${className}`
        }
      >
        <Link
          href="#home"
          className={`flex items-center grow cursor-default ${linkClassName}`}
        >
          <AiFillHome className="text-xl cursor-pointer"/>
          { isScrolled && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:block ml-4 text-center justify-center items-center cursor-pointer"
            >
              Voltar para o início
            </motion.span>
          )}
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
        <Separator orientation="vertical" className="hidden sm:block bg-muted-foreground" />
        <div>
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.header>
  );
};