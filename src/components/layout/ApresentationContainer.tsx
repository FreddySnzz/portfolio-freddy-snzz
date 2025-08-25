import { useDragScroll } from "@/data/hook/useDragScroll";
import { ButtonOverflowRight } from "../Button";

export default function ApresentationContainer() {
  const scrollRef = useDragScroll<HTMLDivElement>()

  // animação de digitação no ola? com outras frases após terminar de escrever?

  return (
  <section id="home" className="flex flex-col h-screen w-full scroll-hidden">
    <div className="flex grow items-center justify-center mt-6 bg-amber-500 group scroll-hidden">
      <div className="flex flex-col items-center justify-center h-2/3 w-full bg-red-400 transition-all duration-500 group-hover:w-3/4">
        <h1 className="text-4xl text-center font-bold mb-4">
          Olá! Bem-vindo(a) ao meu Portfolio! :)
        </h1>
        <p className="text-sm mb-8 text-center italic animate-pulse">
          Bom te ver por aqui.
        </p>
      </div>
      <div className="flex flex-col grow h-2/3 w-1/4 hover:w-full transition-all duration-500 scroll-hidden">
        <div
          ref={scrollRef}
          className="h-full overflow-x-auto scroll-hidden scroll-smooth-touch whitespace-nowrap select-none"
        >
          <div className="inline-block w-10/12 h-full bg-red-500 rounded-full">1</div>
          <div className="inline-block w-10/12 h-full bg-blue-400 rounded-full">2</div>
          <div className="inline-block w-10/12 h-full bg-green-400 rounded-full">3</div>
          <div className="inline-block w-10/12 h-full bg-yellow-400 rounded-full">4</div>
          <div className="inline-block w-10/12 h-full bg-purple-400 rounded-full">5</div>
          <div className="inline-block w-10/12 h-full bg-purple-500 rounded-full">6</div>
          <div className="inline-block w-10/12 h-full bg-purple-600 rounded-full">7</div>
          <div className="inline-block w-10/12 h-full bg-purple-700 rounded-full">8</div>
          <div className="inline-block w-10/12 h-full bg-purple-800 rounded-full">9</div>
          <div className="inline-block w-10/12 h-full bg-purple-900 rounded-full">10</div>
        </div>
      </div>
    </div>

    {/* <div className="flex justify-center items-center bg-green-400">
      <ButtonOverflowRight />
    </div> */}
  </section>
);

}