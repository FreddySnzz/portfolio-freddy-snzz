"use client"
import { useRef, useEffect } from "react"

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - element.offsetLeft
      scrollLeft = element.scrollLeft
      element.style.cursor = "grabbing"
      e.preventDefault()
    }

    const onMouseLeave = () => {
      isDown = false
      element.style.cursor = "grab"
    }

    const onMouseUp = () => {
      isDown = false
      element.style.cursor = "grab"
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - element.offsetLeft
      const walk = x - startX
      element.scrollLeft = scrollLeft - walk
    }

    element.addEventListener("mousedown", onMouseDown)
    element.addEventListener("mouseleave", onMouseLeave)
    element.addEventListener("mouseup", onMouseUp)
    element.addEventListener("mousemove", onMouseMove)

    element.style.cursor = "grab"

    return () => {
      element.removeEventListener("mousedown", onMouseDown)
      element.removeEventListener("mouseleave", onMouseLeave)
      element.removeEventListener("mouseup", onMouseUp)
      element.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return ref
}
