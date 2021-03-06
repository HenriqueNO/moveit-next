import { useContext, useState } from 'react'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'


import GlobalStyle from  "../styles/global";
import { ThemeContext, ThemeContextProvider } from '../contexts/ThemeContext'
import normal from '../styles/theme/normal';
import dark from '../styles/theme/dark';


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(normal)

  function toggleTheme() {
    setTheme(theme.tittle === 'normal' ? dark : normal)
  }
  
  return (
    <ThemeContextProvider>
      <Provider session={pageProps.session}>
          <GlobalStyle />
          <Component {...pageProps} />
      </Provider>
    </ThemeContextProvider>
  );
}

export default MyApp;
