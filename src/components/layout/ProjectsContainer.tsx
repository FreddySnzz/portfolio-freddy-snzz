import { ButtonScrollDown } from "../Button";

export default function ProjectsContainer() {
  return (
    <section id="projetos" className="flex flex-col items-center justify-center h-screen">
      <div className="h-4/5">
        <h1>
          Projetos
        </h1>
        <h2>
          informações sobre projetos
        </h2>
      </div>
      <div>
        <ButtonScrollDown section="contato" />
      </div>
    </section>
  );
}