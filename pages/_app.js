import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/extendTheme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
