import { createContext } from "react";

export const initialAppState = { loading: false };
export const AppStateContext = createContext(initialAppState);
