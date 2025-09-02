import { 
  FaChevronLeft, 
  FaChevronRight, 
} from "react-icons/fa"; 
import { Button } from "../ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  direction?: 'left' | 'right';
  onClick?: () => void;
};

export default function ButtonCarousel({ className, direction, onClick }: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`bg-transparent shadow-none hover:bg-transparent cursor-pointer ${className}`}
    >
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </Button>
  );
}