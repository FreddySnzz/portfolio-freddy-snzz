import * as motion from "motion/react-client"
import { useMediaQuery } from "@/data/hook/useMediaQuery";
import { ButtonScrollDown } from "../Button";
import PictureFrame from "../PictureFrame";
import MosaicoContainer from "./PictureContainer";

export default function AboutContainer() {
  const isMdUp = useMediaQuery("(min-width: 350px)");

  return (
    <section 
      id="sobre" 
      className="flex flex-col items-center justify-center h-auto"
    >
      <div className="flex h-full w-full justify-center bg-gray-950 dark:bg-gray-300">
        <div className="w-10/12">
          <motion.h1 
            className="mt-24 text-xl font-mono font-bold tracking-widest text-gray-600"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            SOBRE MIM
          </motion.h1>
          <div className="mt-10">
            <motion.h1 
              className="font-mono text-2xl md:text-5xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              viewport={{ once: false }}
            >
              PRAZER, FREDSON LUIZ 👋🏼
            </motion.h1>
            <motion.p 
              className="text-gray-500 font-mono text-2xl md:text-5xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, duration: 1 }}
              viewport={{ once: false }}
            >
              EU DESENVOLVO APLICAÇÕES CUSTOMIZADAS <br></br> PARA WEB E SOU ENTUSIASTA DE USER EXPERIENCE.
            </motion.p>
            <div className="flex mt-10 ml-8 md:ml-32">
              <div className="flex w-1/2 h-1/2 sm:w-40 justify-center items-center">
                <PictureFrame src="/images/profile-cartoon.png" size={300} />
              </div>
              <motion.div 
                className="flex flex-col justify-center ml-8"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                viewport={{ once: false }}
              >
                <p className="text-md md:text-xl">
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
                <p className="text-md md:text-xl text-gray-500">
                  Apaixonado por games
                </p>
                <p className="text-md md:text-xl text-gray-500">
                  Carros clássicos e esportes
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-10/12 mt-16">
        <motion.h1 
          className="text-gray-600 font-bold"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          MINHA <br></br> HISTÓRIA
        </motion.h1>
        <motion.div 
          className="ml-4 xl:ml-16 md:w-4/5"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-200 dark:text-gray-950 text-sm 2xl:text-lg">
            Estou na área de desenvolvimento desde 2021 — mas desde 2018, quando me vi interessado em fazer o curso da linguagem Python
            no canal do Gustavo Guanabara. Ali foi onde conheci os horizontes da programação e desenvolvimento. <br></br><br></br>

            Após esse contato inicial, tive um breve hiato nos estudos, pois servi as Forças Armadas Brasileiras como soldado. <br></br><br></br>
            Em 2021, iniciei em um pequeno projeto chamado 
            CEFITEM — uma plataforma de auditoria de documentos fiscais. Esse foi meu start na carreira e meu primeiro contato com um
            projeto real. <br></br><br></br>
            
            Ao longo desses anos, trabalhei em algumas empresas de tecnologia. IRRF, Elliptic Technology  esta última tendo dois 
            projetos muito importantes. A Solvee — uma plataforma de intermediação para serviços domésticos. Onde você escolhe um
            ou mais serviços para sua casa ou ambiente de trabalho, e um(a) diarista irá até realizar o serviço.
            E também o BioFaceID — uma plataforma robusta de controle de acesso de pessoas por meio da integração com terminais
            de reconhecimento facial. Sem dúvidas, o projeto mais complexo que já trabalhei até hoje. <br></br><br></br>

            O maior desafio não foi técnico, foi regra de negócio. Criar uma API que se comunicava com uma API externa da Hikvision — empresa 
            no qual fabrica os terminais, não foi uma tarefa fácil. Com um equipe bem pequena, apenas três devs e um ux/ui designer,
            as demandas foram bastante altas e corridas. <br></br><br></br>

            Por fim, e não menos importante, a Secretaria de Educação do Estado do Piauí - SEDUC. Lá pude aprimorar 200% minhas habilidades e conhecimentos
            sobre desenvolvimento, trabalho em equipe e responsabilidades. Aprendi desde infraestrutura, microfrontends, sistemas legados. Conheci
            muitos frameworks que até então não tinha conhecimento, e isso me motivou a aprender cada vez mais. <br></br><br></br>

            Quando não estou projetando ou criando, estou buscando inspiração fora das telas — amo tocar, ouvir uma boa música, explorar coisas novas, 
            viver novas experiências, praticar esportes — tanto tradicional, quanto eSports.
          </p>
        </motion.div>
        <motion.div 
          className="hidden md:block w-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <MosaicoContainer />
        </motion.div>
      </div>
      {isMdUp && (
        <div className="flex justify-center mt-8 w-full md:hidden">
          <MosaicoContainer />
        </div>
      )}
      <div className="flex flex-col items-center justify-center mt-16 mb-8">
        <ButtonScrollDown section="projetos" />
      </div>
    </section>
  );
}