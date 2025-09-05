import useAppData from "@/data/hook/useAppData";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MdOutlineDisplaySettings } from "react-icons/md";
import { BackgroundToggle } from "./ButtonBackgroundToggle";
import { ThemeToggle } from "./ButtonThemeToggleButton";
import { Separator } from "../ui/separator";

export default function SettingsButton() {
  const { theme, toggleBackground, toggleTheme } = useAppData();

  return (
    <Popover>
      <PopoverTrigger>
        <MdOutlineDisplaySettings 
          className="text-xl cursor-pointer hover:text-blue-400 transition-colors font-semibold duration-300 dark:hover:text-gray-400" 
        />
      </PopoverTrigger>
      <PopoverContent 
        className={`${theme} border-none bg-gray-950 text-white dark:bg-gray-300 dark:text-gray-950`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="flex cursor-pointer items-center hover:text-blue-400 transition-colors duration-300 dark:hover:text-gray-400"
            onClick={toggleTheme}
          >
            <ThemeToggle />
            Alterar Tema
          </div>
          <Separator orientation="horizontal" className="bg-muted-foreground" />
          <div 
            className="flex cursor-pointer items-center hover:text-blue-400 transition-colors duration-300 dark:hover:text-gray-400"
            onClick={toggleBackground}
          >
            <BackgroundToggle />
            Alterar Background
          </div>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}
