import { createContext, ReactNode, useState } from "react";
import normal from '../styles/theme/normal';
import dark from '../styles/theme/dark';
import { DefaultTheme, ThemeProvider } from "styled-components";

interface ThemeContextData{
    isDark: boolean,
    toggleTheme: () => void,
    
}

interface ThemeContextProps {
    children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeContextProvider({children} : ThemeContextProps) {
    const [theme, setTheme] = useState(normal)
    const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    setTheme(theme.tittle === 'normal' ? dark : normal)
    setIsDark(isDark === false ? true : false)
  }

    return (
        <ThemeContext.Provider value={{
            isDark,
            toggleTheme
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}