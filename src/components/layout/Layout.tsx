'use client';

import useAppData from "@/data/hook/useAppData";
import Content from "./Content";
import ApresentationContainer from "./ApresentationContainer";
import ContactContainer from "./ContactContainer";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout( props: LayoutProps ) {
  const { theme } = useAppData();

  return (
    <div className={`${theme} flex h-full justify-center`}>
      <div className={`flex flex-col p-7 w-full sm:w-2/3`}>
        {/* <ApresentationContainer /> */}
        <ContactContainer />
        {/* <Content>
          {props.children}
        </Content> */}
      </div>
    </div>
  );
};