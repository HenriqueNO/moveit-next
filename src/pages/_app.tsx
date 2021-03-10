import { Provider } from 'next-auth/client'
import {ThemeContextProvider } from '../contexts/ThemeContext'

import GlobalStyle from  "../styles/global";

function MyApp({ Component, pageProps }) {

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
