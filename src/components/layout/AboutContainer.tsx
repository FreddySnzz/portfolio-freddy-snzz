import { ButtonScrollDown } from "../Button";

export default function AboutContainer() {
  return (
    <section id="sobre" className="flex flex-col items-center justify-center h-screen">
      <div className="h-4/5">
        <h1>
        Sobre
        </h1>
        <h2>
          informações
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <ButtonScrollDown section="projetos" />
      </div>
    </section>
  );
}