import * as motion from "motion/react-client";
import PonteEstaiadaClock from "../RealTimeClock";
import CardContainer from "./CardsContainer";
import TextAnimated from "../TextAnimated";
import ButtonScrollDown from "../buttons/ButtonScrollDown";
import ButtonApresentationContact from "../buttons/ButtonApresentationContact";
import ButtonWhatsapp from "../buttons/ButtonWhatsapp";

export default function ApresentationContainer() {
  return (
    <section id="home" className="flex flex-col h-auto md:h-screen w-full overflow-hidden">
      <div className="md:flex grow items-center justify-center mt-24 p-6 md:p-0 group">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center h-2/5 md:h-2/3 w-full transition-all duration-500 md:group-hover:w-3/4"
        >
          <TextAnimated /> 
          <div className="flex justify-center items-center gap-8 md:gap-24 mt-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              viewport={{ once: false }}
            >
              <ButtonWhatsapp />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              viewport={{ once: false }}
            >
              <PonteEstaiadaClock />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 md:mt-12"
          >
            <ButtonApresentationContact className="scale-150" />
          </motion.div>
        </motion.div>
        <CardContainer quantity={3} type="apresentation"/>
      </div>
      <div className="flex h-20 justify-center items-center">
        <ButtonScrollDown section="sobre" />
      </div>
    </section>
  )
}