import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

export const AllRoutes = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
           
         </Routes>
      </div>
   );
};