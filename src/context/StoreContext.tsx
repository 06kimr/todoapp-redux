import { createContext, PropsWithChildren, useContext } from "react";
import store from "../store";

const StoreContext = createContext(store);

export default function StoreContextProvider({ children }: PropsWithChildren) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
