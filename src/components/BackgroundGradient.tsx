'use client';

import useAppData from "@/data/hook/useAppData";

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BackgroundGradient(props: BackgroundProps) {
  const { theme } = useAppData();
  const gradientBackground = `bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 animate-gradient-x`;
  
  return (
    <main className={`${theme} flex flex-col min-h-screen animated-background object-cover
    text-gray-200 dark:text-gray-800 ${props.className ?? gradientBackground}`}
    >
      {props.children}
    </main>
  );
};