import * as motion from "motion/react-client"
import { FaWhatsapp } from "react-icons/fa";

export default function ButtonWhatsapp() {
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