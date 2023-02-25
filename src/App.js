



import LandingPage from "../src/Components/Curousel/LandingPage";



import { MainPage } from "./Components/Admin/Components/MainPage";
import { Edit } from "./Components/Admin/Pages/Edit";
// import { ProductView } from "./Components/Admin/Pages/ProductView";
// import { Sidebar } from "./Components/Admin/Pages/Sidebar";

// import { AddProduct } from "./Components/Admin/AddProduct";

import Navbar from "./Components/Navbar/Navbar";


import AllRoutes from "./Pages/AllRoutes";


function App() {
  return (
    <div>
      <Navbar/>
      <MainPage/>
      <LandingPage/>
      <AllRoutes/>


    </div>
  );
}

export default App;
