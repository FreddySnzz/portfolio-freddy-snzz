import { ButtonScrollDown } from "../Button";

export default function AboutContainer() {
  return (
    <section id="sobre" className="flex flex-col items-center justify-center h-screen">
      <div className="h-full">
        <h1>
        SOBRE MIM
        </h1>
        <div>
          <h2>
            PRAZER, FREDSON LUIZ 👋🏼
          </h2>
          <span>
            EU DESENVOLVO APLICAÇÕES CUSTOMIZADAS PARA WEB E ENTUSIASTA DE UX DESIGN.
          </span>
          <div>
            <div>
              GIF ANIMADO / PIC
            </div>
            <span>
              Fullstack Developer e Músico
            </span>
            <span>
              Apaixonado por Games
            </span>
            <span>
              Música e esportes
            </span>
          </div>
        </div>
      </div>
      <div>
        <h1>
          MINHA HISTÓRIA
        </h1>
        <span>
          {`Estou na área de desenvolvimento desde 2021 — mas desde 2018, quando me vi interessado em fazer o curso da linguagem Python
          no canal do Gustavo Guanabara. 

          Ali foi onde conheci os horizontes da programação e desenvolvimento, e após esse contato inicial, senti algo diferente.
          Ainda em 2021, iniciei em um pequeno projeto chamado CEFITEM — uma plataforma de audição de 
          Já trabalhei em algumas empresas de tecnologia, em especial na Secretaria de Educação do Estado do Piauí - SEDUC. 
          Conhecimentos em bancos de dados relacionais e não relacionais. 
          Programação com Clean Code, Clean Architecture e implementação de testes unitários e automatizados com Jest. 
          Desenvolvimento de API's REST e RESTful, além de experiência em documentação de API utilizando Swagger/Postman.`}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <ButtonScrollDown section="projetos" />
      </div>
    </section>
  );
}