"use client"; // This component needs client-side interactivity

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = string; // Use 'string' to support any daisyUI theme name

interface ThemeContextType {
  theme: Theme | undefined;
  changeTheme: (nextTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme | undefined>(() => {
    const savedTheme = localStorage.getItem("daisyui-theme") as Theme;
    if (savedTheme) {
      return savedTheme;
    } else {
      // Optional: use system preference as default
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return systemPrefersDark ? "dark" : "light";
    }
  });

  // Update the DOM and localStorage whenever the theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("daisyui-theme", theme);
    }
  }, [theme]);

  const changeTheme = useCallback((nextTheme: Theme) => {
    setTheme(nextTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
