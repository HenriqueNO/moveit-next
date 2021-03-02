import "../styles/global.css";
import { Provider } from 'next-auth/client'
import { ReturnToIndexProvider } from "../contexts/ReturnToIndexContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReturnToIndexProvider>
        <Component {...pageProps} />
      </ReturnToIndexProvider>
    </Provider>
  );
}

export default MyApp;
