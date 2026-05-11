"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: AppProviderProps) {
  const [nombre, setNombre] = useState("Daniel");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}