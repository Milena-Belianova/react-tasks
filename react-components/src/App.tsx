import "./App.css";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Main } from "./main/main";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <>
      <body>
        <Header showCartCount={true} cartCount={0} />
        <Main />
        <Footer />

      </body>
    </>
    </ChakraProvider>
  );
}

export default App;
