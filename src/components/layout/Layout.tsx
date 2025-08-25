'use client';

import useAppData from "@/data/hook/useAppData";
import LayoutContent from "./LayoutContent";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Layout( props: LayoutProps ) {
  const { theme } = useAppData();

  return (
    <div className={props.className}>
      <div className={`${theme} flex h-full justify-center`}>
        <div className={`flex flex-col w-full md:w-10/12`}>
          <LayoutContent>
            {props.children}
          </LayoutContent>
        </div>
      </div>
    </div>
  );
};