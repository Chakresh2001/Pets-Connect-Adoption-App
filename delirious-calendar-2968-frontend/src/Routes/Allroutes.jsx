import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import Cats from "../Pages/Cats";


export const AllRoutes = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
           {/* <Route path="/cats-and-kitten" element={<Cats />} /> */}
         </Routes>
      </div>
   );
};
