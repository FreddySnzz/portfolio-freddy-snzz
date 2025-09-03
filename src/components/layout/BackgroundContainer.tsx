'use client';

import useAppData from "@/data/hook/useAppData";
import BackgroundGradient from "../BackgroundGradient";
import RBGAnimatedBackground from "../RBGAnimatedBackground";

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
};

export default function BackgroundContainer(props: BackgroundProps) {
  const { background } = useAppData();
  
  return (
    <>
      {background === 'gradient' ? (
        <BackgroundGradient>
          {props.children}
        </BackgroundGradient>
      ) : (
        <RBGAnimatedBackground>
          {props.children}
        </RBGAnimatedBackground>
      )}
    </>
  );
};