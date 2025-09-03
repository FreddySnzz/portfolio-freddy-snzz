'use client'

import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { Toggle } from "../ui/toggle";
import useAppData from "@/data/hook/useAppData";

export function BackgroundToggle() {
  const { background, toggleBackground } = useAppData();

  return (
    <div className="flex items-center space-x-2">
      <Toggle value={background} onClick={toggleBackground} >
        <GiPerspectiveDiceSixFacesOne />
      </Toggle>
    </div>
  )
}
