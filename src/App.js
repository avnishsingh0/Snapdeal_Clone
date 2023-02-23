import { AddProduct } from "./Components/Admin/Pages/AddProduct";
import { MainPage } from "./Components/Admin/Components/MainPage";
import { ProductView } from "./Components/Admin/Pages/ProductView";
import { Sidebar } from "./Components/Admin/Pages/Sidebar";
import AllRoutes from "./Pages/AllRoutes";


function App() {
  return (
    <div>
      <MainPage/>
      <AllRoutes/>
      {/* <AddProduct/>
      <ProductView/> */}
      
      
    </div>
  );
}

export default App;
