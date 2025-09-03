'use client';

import { 
  createContext, 
  ReactNode, 
  useEffect, 
  useState 
} from "react";
import refreshPage from "../functions/refreshPageOnClick";

interface AppContextProps {
  theme?: string;
  toggleTheme?: () => void;
  background?: string;
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

  const [background, setBackground] = useState('gradient');

  function toggleBackground() {
    const newBackground = background === 'gradient' ? 'rgb' : 'gradient';
    setTheme(newBackground);
    localStorage.setItem('background', newBackground);
    refreshPage();
  };

  useEffect(() => {
    const savedBackground = localStorage.getItem('background') || 'gradient';
    setBackground(savedBackground);
  }, []);

  return (
    <AppContext.Provider value={{ 
      theme,
      toggleTheme,
      background,
      toggleBackground
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;