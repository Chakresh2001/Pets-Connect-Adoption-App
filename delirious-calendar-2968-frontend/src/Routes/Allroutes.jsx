import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import { AboutPetfinder } from "../Pages/AboutPetfinder";
import { AdoptingPets } from "../Pages/AdoptingPets";
import ContributionForm from "../Pages/ContributionForm";
import { CatProduct } from "../Components/Products/Cat_adopt";
import { DogProduct } from "../Components/Products/Dog_adopt";
import Register from "../Components/Register"
import Login from "../Components/Login"
import { AdminLogin } from "../Admin/AdminLogin"
import { AdminHomePage } from "../Admin/AdminHomePage"
import { AdminPrivateRoute } from "../context/AdminPrivateRoute"


export const AllRoutes = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutPetfinder" element={<AboutPetfinder/>}/>
            <Route path="/AdoptingPets" element={<AdoptingPets/>}/>
            <Route path="/ContributionForm" element={<ContributionForm/>}/>
            <Route path="/catadopt" element={<CatProduct/>}/>
            <Route path="/dogadopt" element={<DogProduct/>}/>
            <Route path="/signup" element={ <Register/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/adminLogin" element={ <AdminLogin/> }/>
            <Route path="/adminHome" element={<AdminPrivateRoute> <AdminHomePage/> </AdminPrivateRoute>}/>
         </Routes>
      </div>
   );
};
