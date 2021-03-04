import { createContext, ReactNode } from "react";

interface LoginDataContextData {

}

interface LoginDataProviderProps {
    children: ReactNode,
}

export const LoginDataContext = createContext({} as LoginDataContextData)

export function LoginDataProvider({children}: LoginDataProviderProps) {

}