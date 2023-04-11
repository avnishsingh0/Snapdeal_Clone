import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { MainPage } from "./Components/Admin/Components/MainPage";
// import NewNav from "./Components/Navbar/NewNav";


function App() {
 


  return (
    <div>
      {/* <NewNav/> */}
      <AllRoutes/>

    </div>
  );
}

export default App;
