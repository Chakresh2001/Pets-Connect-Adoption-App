import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import { AllRoutes } from "./Routes/Allroutes";


function App() {
   return (
      <div className="App">
         <AllRoutes/>
         <Footer />
      </div>
   );
}

export default App;
