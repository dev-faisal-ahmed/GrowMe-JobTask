import { ReactNode, createContext, useState } from "react";

interface AppContextType {
  notify: boolean;
  onNotify: () => void;
  offNotify: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [notify, setNotify] = useState(false);
  const onNotify = () => setNotify(true);
  const offNotify = () => setNotify(false);

  return <AppContext.Provider value={{ notify, onNotify, offNotify }}>{children}</AppContext.Provider>;
}
