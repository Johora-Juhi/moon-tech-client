import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import About from "../../Pages/About/About";
import Cart from "../../Pages/Cart/Cart";
import Home from "../../Pages/Home/Home";
import TopRated from "../../Pages/TopRated/TopRated";

const routes = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children: [
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "top-rated",
            element: <TopRated />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
    ]
    }
])

export default routes;