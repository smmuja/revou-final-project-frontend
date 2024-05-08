import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, ProtectedLayout } from "./layouts";

import {
  Home,
  Business,
  User,
  BusinessDetail,
  UserDetail,
  Product,
  ProductDetail,
  UserEdit,
  BusinessEdit,
  BusinessAdd,
  ProductAdd,
  ProductEdit,
} from "./containers";
import { Login, Register } from "./containers/auth";
import { registerAction } from "./containers/auth/Register";

import { AllBusinessLoader } from "./containers/business";

import { QueryClient, QueryClientProvider } from "react-query";
import { userEditAction, userEditLoader } from "./containers/user/UserEdit";
import { loginAction } from "./containers/auth/Login";
import { userDetailLoader } from "./containers/user/UserDetail";
import { AllProductLoader } from "./containers/product";
// import { BusinessDetailLoader } from "./containers/business/BusinessDetail";
import { ErrorPage } from "./errorPage";
import { productEditAction } from "./containers/product/ProductEdit";
import { BusinessAddAction } from "./containers/business/BusinessAdd";
import { ProductAddAction } from "./containers/product/ProductAdd";
import {
  BusinessEditAction,
  BusinessEditLoader,
} from "./containers/business/BusinessEdit";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "/register",
          element: <Register />,
          action: registerAction,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/user/:id",
          element: <UserDetail />,
          loader: userDetailLoader,
        },
        {
          path: "/user/edit",
          element: <UserEdit />,
          action: userEditAction,
          // loader: userEditLoader,
        },
        {
          path: "/business",
          element: <Business />,
          loader: AllBusinessLoader,
        },
        {
          path: "/business/:id",
          element: <BusinessDetail />,
          // loader: BusinessDetailLoader,
        },
        {
          path: "/business/add",
          element: <BusinessAdd />,
          action: BusinessAddAction,
        },
        {
          path: "/business/:id/edit",
          element: <BusinessEdit />,
          loader: BusinessEditLoader,
          action: BusinessEditAction,
        },
        {
          path: "/product",
          element: <Product />,
          loader: AllProductLoader,
        },
        {
          path: "/product/id",
          element: <ProductDetail />,
        },
        {
          path: "/product/add",
          element: <ProductAdd />,
          action: ProductAddAction,
        },
        {
          path: "/product/:id/edit",
          element: <ProductEdit />,
          action: productEditAction,
        },
        {
          path: "*",
          element: <h1>Page not found</h1>,
        },
      ],
    },
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: "/try",
          element: <></>,
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
