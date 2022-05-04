import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />

            <Route path="machines"> {/*  MACHINES  */ }
              <Route index element={<List/>} />
              <Route path=":machineId" element={<Single/>} />
              <Route path="new" element={<New inputs = {userInputs} title="Add New Machine"/>} />
            </Route>

            <Route path="products"> {/*  PRODUCTS  */ }
              <Route index element={<Product />} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New inputs = {productInputs} title="Add New Product"/>} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
