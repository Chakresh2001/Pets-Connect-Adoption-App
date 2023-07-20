import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import { AllRoutes } from "./Routes/Allroutes";
import Navbar from "./Components/Navbar";


function App() {
   return (
      <div className="App">
      <Navbar/>
         <AllRoutes/>
         <Footer />
      </div>
   );
}

export default App;
