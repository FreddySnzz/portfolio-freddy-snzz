'use client';

import { 
  createContext, 
  ReactNode, 
  useEffect, 
  useState 
} from "react";

interface AppContextProps {
  theme?: string;
  toggleTheme?: () => void;
  background?: string;
  setBackground?: (bg: string) => void;
  toggleBackground?: () => void;
};

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('');

  function toggleTheme() {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || '';
    setTheme(savedTheme);
  }, []);

  const backgrounds = ["gradient", "rgb"];
  const [background, setBackground] = useState("gradient");

  useEffect(() => {
    const savedBackground = localStorage.getItem("background");
    if (savedBackground && backgrounds.includes(savedBackground)) {
      setBackground(savedBackground);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("background", background);
  }, [background]);

  function toggleBackground() {
    const currentIndex = backgrounds.indexOf(background);
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    setBackground(backgrounds[nextIndex]);
  };

  return (
    <AppContext.Provider value={{ 
      theme,
      toggleTheme,
      background,
      setBackground,
      toggleBackground
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;