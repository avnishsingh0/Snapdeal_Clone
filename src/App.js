import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { MainPage } from "./Components/Admin/Components/MainPage";


function App() {
 


  return (
    <div>

     
      {/* <Navbar name={userName}/> */}
    
      <AllRoutes/>
      {/* <MainPage/> */}
  

    </div>
  );
}

export default App;
