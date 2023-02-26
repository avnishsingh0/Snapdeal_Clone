
import LandingPage from "../src/Components/Curousel/LandingPage";
import { MainPage } from "./Components/Admin/Components/MainPage";
import { Edit } from "./Components/Admin/Pages/Edit";

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
      {/* <MainPage/>
      <LandingPage/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
