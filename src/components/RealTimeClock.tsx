import { useEffect, useState } from "react";
import { DateTime } from "luxon"
import PonteEstaiada from "./icons/PonteEstaiada";

export default function PonteEstaiadaClock({
  timeZone = "America/Fortaleza",
  format = "HH:mm:ss"
}) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateClock = () => {
      const now = DateTime.now().setZone(timeZone)
      setTime(now.toFormat(format))
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timeZone, format]);

  return (
    <div className="scale-80 md:scale-115 flex items-center justify-center gap-3">
      <PonteEstaiada className="w-20 h-20"/>
      <div className="flex flex-col">
        <span className="text-md font-bold text-gray-500 dark:text-gray-800">THE • BRAZIL</span>
        <div className="text-md font-mono font-bold text-gray-700 dark:text-gray-500">
          {time}
        </div>
      </div>
    </div>
  )
}