'use client';

import useAppData from "@/data/hook/useAppData";
import Content from "./Content";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout( props: LayoutProps ) {
  const { theme } = useAppData();

  return (
    <div className={`${theme} flex h-full`}>
      <div className={`flex flex-col p-7`}>
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  );
};