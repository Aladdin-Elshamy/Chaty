"use client"; // This component needs client-side interactivity

import {
  createContext,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  authUser?: object;
  setAuthUser?: (authUser: object) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authUser, setAuthUser] = useState<AuthContextType>();
  // Update the DOM and localStorage whenever the theme changes

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a AuthProvider");
  }
  return context;
};
