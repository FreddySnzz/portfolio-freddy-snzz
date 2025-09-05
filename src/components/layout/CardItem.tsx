import { useState } from "react";
import * as motion from "motion/react-client"
import PictureFrame from "../PictureFrame";
import { Separator } from "../ui/separator";
import { useIsTouchDevice } from "@/data/hook/useMouseDrag";
import ButtonCarousel from "../buttons/ButtonCarousel";
import { Badge } from "@/components/ui/badge";

export default function CardItem({ project }: { project: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTouch = useIsTouchDevice();

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative flex group items-center justify-center min-w-[350px] sm:w-auto h-auto rounded-4xl object-cover overflow-hidden"
      >
        <ButtonCarousel
          direction="left" 
          className={isTouch ? "" : "hidden group-hover:block cursor-pointer"}
          onClick={handlePrev}
        />
        <div className="flex items-center justify-center w-full h-60 object-cover overflow-hidden rounded-2xl font-bold">
          <PictureFrame src={project.images[currentIndex]} />
        </div>
        <ButtonCarousel
          direction="right" className={isTouch ? "" : "hidden group-hover:block cursor-pointer"}
          onClick={handleNext}
        />
      </motion.div>
      <Separator orientation="horizontal" className="bg-muted-foreground my-4" />
      <div className="flex flex-col">
        <span className="font-bold tracking-widest">
          {project.name} —
          <span className="ml-2 text-xs text-gray-500">
            {project.year}
          </span>
        </span>
        <span className="mt-1 text-sm text-gray-500">
          {project.about}
        </span>
        <span className="mt-2 text-sm">
          <div className="flex gap-1 items-center">
            {project.stackFrontend.map(
              (tech: string, i: number) => 
                <Badge 
                  key={i}
                  variant="outline"
                  className="border-none bg-gray-800 text-white dark:bg-gray-400 dark:text-gray-950 shadow-xl ml-1"
                >
                  {tech}
                </Badge>
            )}
          </div>
        </span>
      </div>
    </div>
  );
}