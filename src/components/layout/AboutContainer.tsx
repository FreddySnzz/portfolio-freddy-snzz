import { ButtonScrollDown } from "../Button";
import MosaicoContainer from "./PictureContainer";

export default function AboutContainer() {
  return (
    <section id="sobre" className="flex flex-col items-center justify-center h-auto">
      <div className="flex h-full w-full justify-center bg-gray-950">
        <div className="w-10/12">
          <h1 className="mt-24 text-xl font-mono font-bold tracking-widest text-gray-600">
            SOBRE MIM
          </h1>
          <div className="mt-10">
            <h1 className="font-mono text-5xl">
              PRAZER, FREDSON LUIZ 👋🏼
            </h1>
            <span className="text-gray-500 font-mono text-5xl">
              EU DESENVOLVO APLICAÇÕES CUSTOMIZADAS <br></br> PARA WEB E SOU ENTUSIASTA DE UX DESIGN.
            </span>
            <div className="flex mt-10 ml-8 md:ml-32 mb-16">
              <div className="w-32 h-32 bg-gray-800">
                GIF ANIMADO / PIC
              </div>
              <div className="flex flex-col justify-center ml-8">
                <p className="text-xl">
                  <span className="font-bold">
                    Fullstack Developer
                  </span>
                  <span className="text-gray-500">
                    {` e `}
                  </span>
                  <span className="font-bold">
                    Músico
                  </span>
                  <span className="text-gray-500">
                    {` — como hobby 😅`}
                  </span>
                </p>
                <p className="text-xl text-gray-500">
                  Apaixonado por games
                </p>
                <p className="text-xl text-gray-500">
                  Música e esportes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-10/12 mt-16">
        <h1 className="text-gray-600 font-bold">
          MINHA <br></br> HISTÓRIA
        </h1>
        <div className="ml-4 md:ml-16 md:w-4/5">
          <p className="text-gray-200">
            Estou na área de desenvolvimento desde 2021 — mas desde 2018, quando me vi interessado em fazer o curso da linguagem Python
            no canal do Gustavo Guanabara. Ali foi onde conheci os horizontes da programação e desenvolvimento. <br></br><br></br>

            Após esse contato inicial, tive um breve hiato nos estudos, pois servi as Forças Armadas Brasileiras como soldado. <br></br><br></br>
            Em 2021, iniciei em um pequeno projeto chamado 
            CEFITEM — uma plataforma de auditoria de documentos fiscais. Esse foi meu start na carreira e meu primeiro contato com um
            projeto real. <br></br><br></br>
            
            Ao longo desses anos, trabalhei em algumas empresas de tecnologia. IRRF, Elliptic Technology — esta última tendo dois 
            projetos muito importantes. A Solvee — uma plataforma de intermediação para serviços domésticos. Onde você escolhe um
            ou mais serviços para sua casa ou ambiente de trabalho, e um(a) diarista irá até realizar o serviço.
            E também o BioFaceID — uma plataforma robusta de controle de acesso de pessoas por meio da integração com terminais
            de reconhecimento facial. Sem dúvidas, o projeto mais complexo que já trabalhei até hoje. <br></br><br></br>

            O maior desafio não foi técnico, foi a regra de negócio. Criar uma API que se comunicava com uma API própria da 
            Hikvision — empresa no qual fabrica os terminais, não foi uma tarefa fácil. Com um equipe bem pequena, apenas três devs e um ux/ui designer,
            as demandas foram bastante altas e corridas. <br></br><br></br>

            Por fim, e não menos importante, a Secretaria de Educação do Estado do Piauí - SEDUC. Lá pude aprimorar 200% minhas habilidades e conhecimentos
            sobre desenvolvimento, trabalho em equipe e assumir responsabilidades. Aprendi desde a infraestrutura, microfrontends, sistemas legados. Conheci
            muitas linguagens que até então não tinha trabalhado/estudado, e isso me motivou a aprender cada vez mais. <br></br><br></br>

            Quando não estou projetando ou criando, estou buscando inspiração fora das telas — amo estar tocar, ouvir uma boa música, explorar coisas novas, 
            viver novas experiências, praticar esportes — tanto tradicional, quanto eSports.
          </p>
        </div>
        <div className="hidden md:block w-full">
          <MosaicoContainer />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <ButtonScrollDown section="projetos" />
      </div>
    </section>
  );
}