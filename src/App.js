
import LandingPage from "../src/Components/Curousel/LandingPage";
import { MainPage } from "./Components/Admin/Components/MainPage";
import { Edit } from "./Components/Admin/Pages/Edit";

import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import AuthDetails from "./Components/auth/AuthDetails";
import { useEffect, useState } from "react";
import { auth } from "./firebase";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);


  return (
    <div>

      <Navbar name={userName}/>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <AuthDetails/> */}
      {/* <MainPage/> */}
      {/* <MainPage/> */}
      {/* <LandingPage/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
