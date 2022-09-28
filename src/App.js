import Products from "./components/products";
import Header from "./components/header";
import "../src/styles/style.css"
import Cover from "./components/cover";

function App() {
  return (
    <div className="App">
       <Header/>
       <Cover/>
       <Products/>
       
    </div>
  );
}

export default App;
