import { useEffect, useState } from "react";
import * as motion from "motion/react-client"
import { phrases } from "@/data/constants/apresentationInfo";

export default function TextAnimated() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentText = phrases[index]
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
      className="text-2xl md:text-4xl text-center font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
    </motion.span>
  )
}