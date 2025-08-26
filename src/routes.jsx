import AboutPage from "./pages/AboutPage";
import CartPage from "./features/cart/page/CartPage";
import CheckoutPage from "./features/checkout/pages/CheckoutPage";
import ErrorPage from "./components/feedback/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./features/products/pages/ProductPage";
import RootLayout from "./components/layout/RootLayout";
import SingleProductPage from "./features/products/pages/SingleProductPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductPage /> },
      { path: "product/:id", element: <SingleProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
];
export default routes;