import { 
  MdOutlineMailOutline, 
  MdOutlineLocationOn, 
  MdOutlineLocalPhone 
} from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import FormContainer from "./FormContainer";
import Tittle from "./Tittle";
import openLinkOnButton from "@/data/functions/openNewWindowButton";

export default function ContactContainer() {
  return (
    <section id="contato" className="mb-24">
      <Tittle 
        tittle="Entre em contato" 
        subtitle="Tem alguma dúvida ou quer algum serviço? Sinta-se à vontade para me enviar uma mensagem!"
        tittleClassName="font-black"
        subtitleClassName="text-sm text-muted-foreground"
      />
      <div className="sm:flex items-start justify-start mt-14">
        <div className="flex flex-col mb-6">
          <h3 className="font-bold">
            Informações de contato
          </h3>
          <p className="mb-6 text-sm text-muted-foreground dark:text-gray-600">
            Preencha o formulário e entrarei em contato com você o mais breve possível.
          </p>
          <ul>
            <li className="flex items-center mb-2">
              <MdOutlineMailOutline className="mr-2 text-3xl" />
              <Tittle 
                tittle="Email" 
                subtitle="fredsonluiz.03@gmail.com" 
                tittleClassName="text-sm font-bold"
                subtitleClassName="text-sm text-muted-foreground" />
            </li>
            <li className="flex items-center mb-2">
              <MdOutlineLocalPhone className="mr-2 text-3xl" />
              <Tittle 
                tittle="Telefone" 
                subtitle="+55 86 99414-7549 (Somente WhatsApp)" 
                tittleClassName="text-sm font-bold"
                subtitleClassName="text-sm text-muted-foreground" />
            </li>
            <li className="flex items-center mb-2">
              <MdOutlineLocationOn className="mr-2 text-3xl" />
              <Tittle 
                tittle="Localização" 
                subtitle="Teresina, Piauí, Brasil" 
                tittleClassName="text-sm font-bold"
                subtitleClassName="text-sm text-muted-foreground" />
            </li>
            <li 
              className="flex items-center mb-2 cursor-pointer" 
              onClick={() => openLinkOnButton("https://drive.google.com/file/d/1o9jtjSNlRm0OTheYmKwlu_WnE-vGbz6J/view?usp=sharing")}
            >
              <FaRegNewspaper className="mr-2 text-3xl" />
              <Tittle 
                tittle="Meu Currículo" 
                subtitle="Clique aqui para abrir" 
                tittleClassName="text-sm font-bold"
                subtitleClassName="text-sm text-muted-foreground" />
            </li>
          </ul>
          <div>
            <h3 className="font-bold mt-4">
              Minhas redes
            </h3>
            <div className="flex">
              <button 
                onClick={() => openLinkOnButton("https://github.com/FreddySnzz")}
                className="mr-4 p-3 mt-3 rounded-2xl transition-colors cursor-pointer
                bg-gray-700 text-gray-200 dark:bg-gray-300 dark:text-gray-900 shadow-lg hover:bg-black hover:text-white"
              >
                <FiGithub className="text-xl"/>
              </button>
              <button 
                onClick={() => openLinkOnButton("https://www.linkedin.com/in/fredson-luiz/")}
                className="mr-4 p-3 mt-3 rounded-2xl transition-colors shadow-lg cursor-pointer
                bg-gray-700 text-gray-200 dark:bg-gray-300 dark:text-gray-900 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn className="text-xl"/>
              </button>
              <button 
                onClick={() => openLinkOnButton("mailto:fredsonluiz.03@gmail.com")}
                className="mr-4 p-3 mt-3 rounded-2xl transition-colors cursor-pointer
                bg-gray-700 text-gray-200 dark:bg-gray-300 dark:text-gray-900 shadow-lg hover:bg-red-600 hover:text-white"
              >
                <MdOutlineMailOutline className="text-xl"/>
              </button>
            </div>
          </div>
        </div>
        <FormContainer />
      </div>
    </section>
  )
}