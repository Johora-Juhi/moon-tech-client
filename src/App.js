import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes/routes";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
