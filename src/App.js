
import { LandingPage } from "../src/Components/Curousel/LandingPage";

import { AddProduct } from "./Components/Admin/Pages/AddProduct";
import { MainPage } from "./Components/Admin/Components/MainPage";
import { ProductView } from "./Components/Admin/Pages/ProductView";
import { Sidebar } from "./Components/Admin/Pages/Sidebar";

// import { AddProduct } from "./Components/Admin/AddProduct";

import Navbar from "./Components/Navbar/Navbar";


import AllRoutes from "./Pages/AllRoutes";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import AuthDetails from "./Components/auth/AuthDetails";


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <AuthDetails/> */}
      {/* <MainPage/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
