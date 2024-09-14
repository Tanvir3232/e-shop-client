import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <ProductList />
      },
      {
        path: '/products/:id',
        element: <ProductDetails />
      }

    ]
  },
]);

export default router;