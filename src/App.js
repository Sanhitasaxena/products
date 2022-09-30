
import Header from "./components/header";
import "../src/styles/style.css"

import Footer from "./components/footer";
import PrimaryRoutes from "./Routes/primaryRoutes";


function App() {
  return (
    <div className="App">
     
       <Header/>
       <PrimaryRoutes/>
      
       <Footer/>
      
       
    </div>
  );
}

export default App;
