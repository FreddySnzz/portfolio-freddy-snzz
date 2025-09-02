import * as motion from "motion/react-client";
import { projects } from "@/data/constants/projectsList";
import { useMouseDrag } from "@/data/hook/useMouseDrag";
import { WindowControlMac } from "../WindowControlMac";
import { skills, education, languages, subtittleInfo } from "@/data/constants/apresentationInfo";
import CardItem from "./CardItem";

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  type?: 'apresentation' | 'section'
  quantity: number
};

export default function CardContainer({ type, quantity }: CardContainerProps) {
  const { containerRef, dragLeft } = useMouseDrag(quantity);

  return type === 'apresentation' ? (
    <motion.div
      className="flex flex-col h-1/2 md:h-2/3 md:w-1/4 hover:w-8/12 transition-all duration-500"
    >
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: dragLeft, right: 0 }}
        dragElastic={0.2}
        className="flex h-full gap-6 px-4 select-none cursor-grab active:cursor-grabbing"
      >
        {[...Array(quantity)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`min-w-[400px] h-full rounded-4xl font-bold bg-slate-950 border border-slate-700 shadow-xl`}
          >
            <div className="flex flex-col p-8">
              <div className="flex justify-between">
                <WindowControlMac />
                <p className="text-xs font-light text-gray-700">{subtittleInfo[i]}</p>
              </div>
              <div className="flex flex-col">
                <h1 className="mt-8">
                  {skills.main.title}
                </h1>
                <p className="flex flex-col mt-2">
                  {skills.main.langs}
                  <span>
                    {skills.main.skills}
                  </span>
                </p>

                <p className="flex flex-col mt-2">
                  {skills.frontend.title}
                  <span>
                    {skills.frontend.list}
                  </span>
                </p>

                <p className="flex flex-col mt-2">
                  {skills.backend.title}
                  <span>
                    {skills.backend.list}
                  </span>
                </p>
              </div>
            </div>
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
        {projects.map((project) => (
          <CardItem 
            key={project.name} 
            project={project} 
          />
        ))}
      </motion.div>
    </motion.div>
  )
}