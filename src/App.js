import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import { MainPage } from "./Components/Admin/Components/MainPage";
import Footer from "./Components/Footer/Footer";
import { TopFooter } from "./Components/Footer/TopFooter";
import { MidFooter } from "./Components/Footer/MidFooter";
import { BottomFooter } from "./Components/Footer/BottomFooter";
import { About } from "./Components/Footer/About";

function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes />
      <TopFooter/>
      <MidFooter/>
      <About/>
      <BottomFooter/>
    </div>
  );
}

export default App;
