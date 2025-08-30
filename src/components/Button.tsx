import { FaChevronDown, FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa"; 
import * as motion from "motion/react-client"
import { Button } from "./ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  section?: string;
  direction?: 'left' | 'right';
  onClick?: () => void;
};

export function ButtonScrollDown({ className, section }: ButtonProps) {
  return (
    <div>
      <a href={`#${section}`}>
        <Button 
          className={`bg-transparent shadow-none hover:bg-transparent animate-bounce cursor-pointer ${className}`}
        >
          <FaChevronDown />
        </Button>
      </a>
    </div>
  );
};

export function ButtonOverflowRight({ className, section }: ButtonProps) {
  return (
    <div>
      <a href={`#${section}`}>
        <Button 
          className={`bg-transparent shadow-none hover:bg-transparent cursor-pointer ${className}`}
        >
          <FaChevronRight />
        </Button>
      </a>
    </div>
  );
};

export function ButtonCarousel({ className, direction, onClick }: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`bg-transparent shadow-none hover:bg-transparent cursor-pointer ${className}`}
    >
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </Button>
  );
}

export function ButtonWhatsapp() {
  return (
    <motion.div 
      whileHover={{ scale: 1.3 }}
      className="items-center justify-center"
    >
      <a
        href="https://wa.me/5586994147549?text=Olá, Fredson! Podemos agendar uma reunião?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button 
          className={`flex rounded-4xl bg-transparent hover:bg-green-600 hover:text-white transition-colors duration-500 ease-in-out 
            border border-foreground gap-3 justify-center items-center cursor-pointer px-5 py-3
            animate-gradient-x shadow-xl`}
        >
          <FaWhatsapp className="text-2xl" />
          <span 
            className="font-bold text-sm md:text-xl"
          >
            Mande-me uma mensagem
          </span>
        </button>
      </a>
    </motion.div>
  );
};
