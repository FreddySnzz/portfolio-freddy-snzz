import { motion, useMotionValue, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import useAppData from "@/data/hook/useAppData";

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function BackgroundGradientContainer(props: BackgroundProps) {
  const { theme } = useAppData();
  const gradientBackground = `bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 animate-gradient-x`;
  
  return (
    <main className={`${theme} flex flex-col min-h-screen animated-background object-cover
    text-gray-200 dark:text-gray-800 ${props.className ?? gradientBackground}`}
    >
      {props.children}
    </main>
  )
}

export function RBGAnimatedBackground(props: BackgroundProps) {
  const { theme } = useAppData();

  function useElementDimensions(
    ref: React.RefObject<HTMLDivElement | null>
  ): [
    { width: number; height: number; top: number; left: number },
    VoidFunction
  ] {
    const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 })

    function measure() {
      if (!ref.current) return

      setSize(ref.current.getBoundingClientRect())
    }

    useEffect(() => {
      measure()
    }, [])

    return [size, measure]
  };

  const ref = useRef<HTMLDivElement>(null)
  const [{ width, height, top, left }, measure] = useElementDimensions(ref)
  const gradientX = useMotionValue(0.5)
  const gradientY = useMotionValue(0.5)
  const background = useTransform(
    () => `conic-gradient(from 0deg at calc(${
        gradientX.get() * 100
      }% - ${left}px) calc(${
        gradientY.get() * 100
      }% - ${top}px), #0cdcf7, #ff0088, #fff312, #0cdcf7)`
  )

  return (
    <div 
      className={`${theme} flex flex-col min-h-screen animated-background object-cover
    text-gray-200 dark:text-gray-800 ${props.className}`}
      onPointerMove={(e) => {
        gradientX.set(e.clientX / width)
        gradientY.set(e.clientY / height)
      }}
    >
      <motion.div
        ref={ref}
        style={{
          background,
          borderRadius: 0,
          cursor: "none",
        }}
        onPointerEnter={() => measure()}
      >
        {props.children}
      </motion.div>
    </div>
  )
}