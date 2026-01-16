import { RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./MainLayout"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
const router = createBrowserRouter(
  [{
  path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> }
    ]
}])
function App() {

  return <RouterProvider router={router} />
}

export default App
