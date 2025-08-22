import { FaChevronDown } from "react-icons/fa"; 
import { Button } from "./ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  section?: string;
};

export function ButtonScrollDown({ className, section }: ButtonProps) {
  return (
    <div>
      <a href={`#${section}`}>
        <Button 
          className={`bg-transparent hover:bg-transparent animate-bounce cursor-pointer ${className}`}
        >
          <FaChevronDown />
        </Button>
      </a>
    </div>
  );
};