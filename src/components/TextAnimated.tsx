import { useEffect, useState } from "react";
import * as motion from "motion/react-client"

export default function TextAnimated() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")

  const phrases = [
    "Olá! Seja bem-vindo(a) 💓",
    "Meu nome é Fredson Luiz",
    "Sou Desenvolvedor Fullstack 💻",
    "Vamos construir algo juntos? 🫱🏼‍🫲🏼",
    "FAZ UM BOTÃO PARA MUDAR LING PT/EN",
  ]

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentText = phrases[index]
    let i = 0

    function type() {
      if (i <= currentText.length) {
        setDisplayedText(currentText.slice(0, i))
        i++
        timeout = setTimeout(type, 50)
      } else {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % phrases.length)
        }, 1500)
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [index])

  return (
    <motion.span
      key={index}
      className="text-4xl text-center font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
    </motion.span>
  )
}