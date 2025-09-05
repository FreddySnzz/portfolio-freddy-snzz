import * as motion from "motion/react-client";
import { projects } from "@/data/constants/projectsList";
import { useMouseDrag } from "@/data/hook/useMouseDrag";
import { WindowControlMac } from "../WindowControlMac";
import { skills, education, languages, subtittleInfo } from "@/data/constants/apresentationInfo";
import CardItem from "./CardItem";
import openLinkOnButton from "@/data/functions/openNewWindowButton";
import TextConsole from "../TextConsole";
import ButtonCurriculum from "../buttons/ButtonCurriculum";
import CustomBadge from "../CustomBadge";
import { badgeList } from "@/data/constants/badgesList";

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  type?: 'apresentation' | 'section'
  quantity: number
};

export default function CardContainer({ type, quantity }: CardContainerProps) {
  const { containerRef, dragLeft } = useMouseDrag(quantity);
  const educationArray = [Object(education)];

  return type === 'apresentation' ? (
    <motion.div
      className="flex flex-col mt-8 md:mt-0 md:w-1/4 hover:w-8/12 transition-all duration-500"
    >
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: dragLeft, right: 0 }}
        dragElastic={0.2}
        className="flex items-center h-full gap-8 px-4 scale-80 sm:scale-100 select-none cursor-grab active:cursor-grabbing"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`min-w-[400px] min-h-[400px] h-auto rounded-4xl font-bold bg-slate-950 border border-slate-700 shadow-xl`}
        >
          <div className="flex flex-col p-8">
            <div className="flex justify-between"> 
              <WindowControlMac />
              <p className="text-xs font-light text-gray-700">{subtittleInfo[0]}</p>
            </div>

            <div className="mt-8">
              <TextConsole
                comment="// Desenvolvedor Web / Fullstack"
                variableName="developer"
                data={{
                  name: "Fredson Luiz",
                  langs: skills.main.langs[0],
                  mainStack: [...skills.frontend.list, ...skills.backend.list],
                  startWorking: "2021",
                  learning: "UX",
                }}
              />
              <div className="flex items-center justify-center mt-4">
                <ButtonCurriculum />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`min-w-[400px] h-full rounded-4xl font-bold bg-slate-950 border border-slate-700 shadow-xl`}
        >
          <div className="flex flex-col p-8">
            <div className="flex justify-between"> 
              <WindowControlMac />
              <p className="text-xs font-light text-gray-700">{subtittleInfo[1]}</p>
            </div>

            <div className="flex flex-col overflow-hidden text-gray-200">
              <p className="mt-8">
                {skills.main.title}
              </p>
              <div className="mt-2">
                <div className="flex gap-1">
                  <CustomBadge url={badgeList.Javascript.link} />
                  <CustomBadge url={badgeList.React.link} />
                  <CustomBadge url={badgeList.NestJs.link} />
                  <CustomBadge url={badgeList.Nextjs.link} />
                </div>
                <div className="flex items-start gap-1 mt-1">
                  <CustomBadge url={badgeList.Typescript.link} />
                  <CustomBadge url={badgeList.Nodejs.link} />
                  <CustomBadge url={badgeList.Expressjs.link} />
                  <CustomBadge url={badgeList.Vue.link} />
                </div>
              </div>

              <p className="mt-4">
                {skills.database.title}
              </p>
              <div className="mt-2">
                <div className="flex gap-1">
                  <CustomBadge url={badgeList.MySQL.link} />
                  <CustomBadge url={badgeList.PostgreSQL.link} />
                  <CustomBadge url={badgeList.SQLServer.link} />
                </div>
                <div className="flex items-start gap-1 mt-1">
                  <CustomBadge url={badgeList.MongoDB.link} />
                  <CustomBadge url={badgeList.Redis.link} />
                  <CustomBadge url={badgeList.SQLite.link} />
                  <CustomBadge url={badgeList.FirebaseDB.link} />
                </div>
                <div className="flex items-start gap-1 mt-1">
                  <CustomBadge url={badgeList.TypeORM.link} />
                  <CustomBadge url={badgeList.Prima.link} />
                  <CustomBadge url={badgeList.Sequelize.link} />
                  <CustomBadge url={badgeList.Mongoose.link} />
                </div>
              </div>

              <p className="mt-4">
                {skills.others.title}
              </p>
              <div className="mt-2">
                <div className="flex gap-1">
                  <CustomBadge url={badgeList.Tailwind.link} />
                  <CustomBadge url={badgeList.ShadcnUI.link} />
                  <CustomBadge url={badgeList.AntDesign.link} />
                </div>
                <div className="flex items-start gap-1 mt-1">
                  <CustomBadge url={badgeList.ChakraUI.link} />
                  <CustomBadge url={badgeList.Zod.link} />
                  <CustomBadge url={badgeList.StyledComponents.link} />
                </div>
                <div className="flex items-start gap-1 mt-1">
                  <CustomBadge url={badgeList.Docker.link} />
                  <CustomBadge url={badgeList.AWS.link} />
                  <CustomBadge url={badgeList.Supabase.link} />
                  <CustomBadge url={badgeList.Jest.link} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`min-w-[400px] h-full w-full rounded-4xl font-bold bg-slate-950 border border-slate-700 shadow-xl`}
        >
          <div className="flex flex-col p-8">
            <div className="flex justify-between"> 
              <WindowControlMac />
              <p className="text-xs font-light text-gray-700">{subtittleInfo[2]}</p>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-yellow-400 mt-8">FORMAÇÃO:</span>
              <p className="text-sm text-gray-200">
                • {education.graduation.course}
                <span className="flex flex-col ml-2">
                  <span className="text-xs text-gray-300">
                    {education.graduation.place}
                  </span>
                  <span className="text-xs text-gray-400 italic">
                    {education.graduation.year}
                  </span>
                </span>
              </p>

              <span className="text-sm text-yellow-400 mt-4">CURSOS:</span>
              <ul className="text-sm text-gray-200">
                {educationArray[0].complementary.map((info: any, index: number) => (
                  <li key={index} className="mb-2">
                    • {info.course}
                    <span className="text-xs ml-2 text-gray-300">{info.place}</span>
                    <span className="text-xs ml-2 text-gray-400 italic">{info.year}</span>
                  </li>
                ))}
              </ul>

              <span className="text-sm text-yellow-400 mt-4">IDIOMAS:</span>
              {languages.map((info: any, index: number) => (
                <div key={index}>
                  <h1 className="text-sm text-gray-200">
                    • {info.language}
                  </h1>
                  <ul className="text-xs ml-2 text-gray-400">
                    <li>
                      Level: {info.level}
                    </li>
                    <li
                      onClick={() => openLinkOnButton(info.certificate)}
                      className="text-blue-500 underline cursor-pointer"
                    >
                      {info.institution}
                    </li>
                    <li className="text-xs text-gray-400 italic">{info.year}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
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
  );
};