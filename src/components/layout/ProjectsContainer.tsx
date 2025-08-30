import CardContainer from "./CardsContainer";
import { ButtonScrollDown } from "../Button";
import { projects } from "@/data/constants/projectsList";

export default function ProjectsContainer() {
  return (
    <section id="projetos" className="flex flex-col items-center justify-center h-auto overflow-hidden bg-gray-950 dark:bg-gray-300" >
      <div className="w-10/12">
        <h1 className="mt-24 text-xl font-mono font-bold tracking-widest text-gray-600">
          PROJETOS
        </h1>
        <div className="grow">
          <CardContainer quantity={projects.length} type="section" />
        </div>
        <div className="flex justify-center items-center my-12">
          <ButtonScrollDown section="contato" />
        </div>
      </div>
    </section>
  );
}