import { AddProduct } from "./Components/Admin/AddProduct";
import { ProductView } from "./Components/Admin/ProductView";
import AllRoutes from "./Pages/AllRoutes";


function App() {
  return (
    <div>
      <AllRoutes/>
      <AddProduct/>
      <ProductView/>
    </div>
  );
}

export default App;
