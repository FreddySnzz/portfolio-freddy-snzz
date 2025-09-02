import { 
  FaWhatsapp,
  FaGithub, 
  FaLinkedinIn
} from "react-icons/fa"; 

export default function ButtonFooterContact() {
  return (
    <div className="flex grow justify-center items-center">
      <a
        href="https://wa.me/5586994147549?text=Olá, Fredson! Podemos agendar uma reunião?"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 justify-center items-center ml-3 text-white hover:text-green-600 transition-colors"
      >
        <FaWhatsapp className="text-md" />
      </a>
      <a
        href="https://www.linkedin.com/in/fredson-luiz/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 justify-center items-center ml-3 text-white hover:text-blue-500 transition-colors"
      >
        <FaLinkedinIn className="text-md" />
      </a>
      <a
        href="https://github.com/FreddySnzz"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 justify-center items-center ml-3 text-white hover:text-gray-500 transition-colors"
      >
        <FaGithub className="text-md" />
      </a>
    </div>
  );
};