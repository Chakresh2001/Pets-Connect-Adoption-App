import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import { AllRoutes } from "./Routes/Allroutes";
import Navbar from "./Components/Navbar";
import { AboutPetfinder } from "./Pages/AboutPetfinder";
import { AdoptingPets } from "./Pages/AdoptingPets";
import { AdminLogin } from "./Admin/AdminLogin";
import { AdminHomePage } from "./Admin/AdminHomePage";

function App() {
   return (
      <div className="App">
      <Navbar/>

          <AllRoutes/>
         <Footer />
         {/* <AdminHomePage/> */}
      </div>
   );
}

export default App;
