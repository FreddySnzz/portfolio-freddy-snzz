import CardContainer from "./CardsContainer";
import { ButtonScrollDown } from "../Button";

export default function ProjectsContainer() {
  return (
    <section id="projetos" className="flex flex-col items-center justify-center h-auto overflow-hidden bg-gray-950 dark:bg-gray-300" >
      <div className="w-10/12">
        <h1 className="my-24 text-xl font-mono font-bold tracking-widest text-gray-600">
          PROJETOS
        </h1>
        <div className="grow">
          <CardContainer quantity={10} type="section" />
        </div>
        <div className="flex justify-center items-center my-8">
          <ButtonScrollDown section="contato" />
        </div>
      </div>
    </section>
  );
}

<div className="flex h-full w-full justify-center bg-gray-950 dark:bg-gray-300">
        <div className="w-10/12">
          <h1 className="mt-24 text-xl font-mono font-bold tracking-widest text-gray-600">
            PROJETOS
          </h1>
        </div>
      </div>