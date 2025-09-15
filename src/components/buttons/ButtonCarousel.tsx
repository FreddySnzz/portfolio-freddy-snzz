import * as motion from "motion/react-client"
import { 
  FaChevronLeft, 
  FaChevronRight, 
} from "react-icons/fa"; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  direction?: 'left' | 'right';
  onClick?: () => void;
};

export default function ButtonCarousel({ className, direction, onClick }: ButtonProps) {
  return (
    <motion.button
      initial={false}
      aria-label="Previous"
      whileFocus={{ outline: `2px solid` }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`mx-2 bg-transparent shadow-none hover:bg-transparent cursor-pointer ${className}`}
    >
      {direction === "left" ? <FaChevronLeft className="text-xl" /> : <FaChevronRight className="text-xl" />}
    </motion.button>
  );
}