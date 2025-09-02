import { FaChevronRight } from "react-icons/fa"; 
import { Button } from "../ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  section?: string;
};

export default function ButtonOverflowRight({ className, section }: ButtonProps) {
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