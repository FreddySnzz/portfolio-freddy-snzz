import CardContainer from "./CardsContainer";
import { ButtonScrollDown } from "../Button";

export default function ProjectsContainer() {
  return (
    <section id="projetos" className="flex flex-col h-screen overflow-hidden" >
      <h1 className="mt-24">
        PROJETOS
      </h1>
      <div className="grow">
        <CardContainer quantity={10} type="section" />
      </div>
      <div className="flex justify-center items-center" >
        <ButtonScrollDown section="contato" />
      </div>
    </section>
  );
}