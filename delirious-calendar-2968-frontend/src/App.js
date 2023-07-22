import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import { AllRoutes } from "./Routes/Allroutes";
import Navbar from "./Components/Navbar";
import { AboutPetfinder } from "./Pages/AboutPetfinder";
import { AdoptingPets } from "./Pages/AdoptingPets";
import { AdminLogin } from "./Admin/AdminLogin";
import { AdminHomePage } from "./Admin/AdminHomePage";
import AdoptingDogs from "./Pages/AdoptingDogs";
import FeedingDog from "./Pages/FeedingDog";
import AdoptingCats from "./Pages/AdoptionCat";

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
