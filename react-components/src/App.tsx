import "./App.css";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Main } from "./main/main";

function App() {
  return (
    <>
        <Header showCartCount={true} cartCount={0} />
        <Main />
        <Footer />
    </>
  );
}

export default App;
