import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import Home from "../pages/home/Home";
import Login from "../pages/home/Login";
import SignUp from "../pages/home/SignUp.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import Checkout from "../pages/books/Checkout.jsx";
import SingleBook from "../pages/books/SingleBook.jsx";
import PrivateRoute from "./privateRoute.jsx";
import Orders from "../pages/books/Orders.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
// import Banner from "../pages/home/Banner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
  { path: "/admin", element: <AdminLogin /> },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <div>Admin Dashboard</div>
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <div>Dashboard home</div>
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoute>
            <div>Add new Book</div>
          </AdminRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoute>
            <div>Edit book</div>
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <div>Manage Books</div>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
