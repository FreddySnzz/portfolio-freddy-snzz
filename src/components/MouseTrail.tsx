'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type TrailDot = {
  id: number
  x: number
  y: number
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<TrailDot[]>([])

  useEffect(() => {
    let id = 0
    const handleMouseMove = (e: MouseEvent) => {
      id++
      const newDot = { id, x: e.clientX, y: e.clientY }
      setTrail((prev) => [...prev.slice(-15), newDot])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {trail.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: dot.x - 4,
              top: dot.y - 4,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
