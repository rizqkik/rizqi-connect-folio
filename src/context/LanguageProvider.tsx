// src/context/LanguageProvider.tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getLang(): Language {
  if (typeof window === "undefined") return "id";
  return (localStorage.getItem("lang") as Language) || "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
}
