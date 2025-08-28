import * as motion from "motion/react-client"
import { useEffect, useRef, useState } from "react"

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  type?: 'apresentation' | 'section'
  quantity: number
};

export default function CardContainer({ type, quantity }: CardContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragLeft, setDragLeft] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = containerRef.current.scrollWidth
      setDragLeft(containerWidth - contentWidth)
    }
  }, [quantity])

  return type === 'apresentation' ? (
    <motion.div
      className="flex flex-col h-1/2 md:h-2/3 md:w-1/4 hover:w-8/12 transition-all duration-500"
    >
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: dragLeft, right: 0 }}
        dragElastic={0.2}
        className="flex h-full gap-4 px-4 select-none cursor-grab active:cursor-grabbing"
      >
        {[...Array(quantity)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`flex items-center justify-center min-w-[400px] h-full rounded-4xl text-white font-bold ${
              i % 2 === 0 ? "bg-blue-500" : "bg-purple-700"
            }`}
          >
            Card {i + 1}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  ) : (
    <motion.div
      className="flex flex-col h-full w-full transition-all duration-500"
    >
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: dragLeft, right: 0 }}
        dragElastic={0.2}
        className="flex items-center h-full gap-12 sm:ml-12 select-none cursor-grab active:cursor-grabbing"
      >
        {[...Array(quantity)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`flex items-center justify-center min-w-[350px] sm:min-w-[600px] h-2/3 rounded-4xl text-white font-bold ${
              i % 2 === 0 ? "bg-blue-700" : "bg-purple-900"
            }`}
          >
            <span>
              Card {i + 1}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}