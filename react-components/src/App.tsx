import "./App.css";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Main } from "./main/main";

function App() {
  return (
    <div className="App">
      <body>
        <Header showCartCount={true} cartCount={0} />
        <Main />
        <Footer />
        
      </body>
    </div>
  );
}

export default App;
