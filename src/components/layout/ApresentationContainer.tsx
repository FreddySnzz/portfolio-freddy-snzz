import * as motion from "motion/react-client"
import { ButtonScrollDown, ButtonWhatsapp } from "../Button";
import PonteEstaiadaClock from "../RealTimeClock";
import CardContainer from "./CardsContainer";
import TextAnimated from "../TextAnimated";

export default function ApresentationContainer() {
  return (
    <section id="home" className="flex flex-col h-screen w-full overflow-hidden">
      <div className="md:flex grow items-center justify-center mt-24 md:mt-6 p-6 md:p-0 group">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center h-2/5 md:h-2/3 w-full transition-all duration-500 md:group-hover:w-3/4"
        >
          <TextAnimated /> 
          <div className="flex justify-center items-center gap-8 md:gap-24 mt-12">
            <ButtonWhatsapp />
            <PonteEstaiadaClock />
          </div>
        </motion.div>
        <CardContainer quantity={5} type="apresentation"/>
      </div>
      <div className="flex justify-center items-center">
        <ButtonScrollDown section="sobre" />
      </div>
    </section>
  )
}