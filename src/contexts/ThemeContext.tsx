import { createContext, ReactNode, useEffect, useState } from "react";
import normal from '../styles/theme/normal';
import dark from '../styles/theme/dark';
import { DefaultTheme, ThemeProvider } from "styled-components";
import Cookies from "js-cookie";

interface ThemeContextData{
    theme: DefaultTheme,
    isDark: boolean,
    toggleTheme: () => void,
    
}

interface ThemeContextProps {
    children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeContextProvider({children} : ThemeContextProps) {
    const lastTheme = Cookies.get('lastTheme') ?? 'normal'
    const [theme, setTheme] = useState((lastTheme === 'normal' ? normal : dark))
    const [isDark, setIsDark] = useState(theme.tittle === 'normal' ? false : true)

    function toggleTheme() {
        setTheme(theme.tittle === 'normal' ? dark : normal)
        setIsDark(isDark === false ? true : false)
    }

    useEffect(() => {
        Cookies.set('lastTheme', theme.tittle)
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            isDark,
            theme,
            toggleTheme
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}