import { ButtonScrollDown } from "../Button";

export default function ApresentationContainer() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-center font-bold mb-4">
        Olá! Bem-vindo(a) ao meu Portfolio! :)
      </h1>
      <p className="text-sm mb-8 text-center italic animate-pulse">
        Bom te ver por aqui.
      </p>
      <ButtonScrollDown section="sobre" />
    </section>
  );
}