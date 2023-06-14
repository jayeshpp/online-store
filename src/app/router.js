import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import ProductListing from "../modules/product-listing/ProductListing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListing />
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);
