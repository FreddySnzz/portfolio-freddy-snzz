'use client'

import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { Toggle } from "../ui/toggle";
import useAppData from "@/data/hook/useAppData";

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppData();

  return (
    <div className="flex items-center space-x-2">
      <Toggle value={theme} onClick={toggleTheme} >
        { theme === 'dark' ? <MdSunny /> : <HiMiniMoon /> }
      </Toggle>
    </div>
  )
}
