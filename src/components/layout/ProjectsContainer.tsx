import * as motion from "motion/react-client"
import CardContainer from "./CardsContainer";
import { projects } from "@/data/constants/projectsList";
import ButtonScrollDown from "../buttons/ButtonScrollDown";

export default function ProjectsContainer() {
  return (
    <section id="projetos" className="flex flex-col items-center justify-center h-auto overflow-hidden bg-gray-950 dark:bg-gray-300" >
      <motion.div 
        className="w-10/12"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mt-24 text-xl font-mono font-bold tracking-widest text-gray-600">
          PROJETOS
        </h1>
        <div className="grow">
          <CardContainer quantity={projects.length} type="section" />
        </div>
        <div className="flex justify-center items-center my-12">
          <ButtonScrollDown section="contato" />
        </div>
      </motion.div>
    </section>
  );
}