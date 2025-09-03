import * as motion from "motion/react-client";
import { FaRegNewspaper } from "react-icons/fa6";

export default function ButtonCurriculum() {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="items-center justify-center"
    >
      <a
        href="https://drive.google.com/file/d/1o9jtjSNlRm0OTheYmKwlu_WnE-vGbz6J/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button 
          className={`flex rounded-4xl bg-gray-900 hover:bg-blue-600 hover:text-white transition-colors duration-500 ease-in-out 
            border border-foreground gap-3 justify-center items-center cursor-pointer px-5 py-2 md:py-3
            animate-gradient-x shadow-xl`}
        >
          <FaRegNewspaper className="text-md" />
          <span 
            className="text-sm md:text-md"
          >
            Ver Currículo
          </span>
        </button>
      </a>
    </motion.div>
  );
};