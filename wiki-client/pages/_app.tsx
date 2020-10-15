import { createClient, Provider } from 'urql';
import { ThemeProvider } from "@chakra-ui/core";


const client = createClient({ url: "http://localhost:4000/graphql" });

function MyApp({ Component, pageProps }) {
  return (
  <Provider value={client}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
  )
}

export default MyApp
