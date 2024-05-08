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
} from "./pages";
import { Login, Register } from "./pages/auth";
import { registerAction } from "./pages/auth/Register/Register";

import { AllBusinessLoader } from "./pages/business/Business";

// import { QueryClient, QueryClientProvider } from "react-query";
import { userEditAction } from "./pages/user/UserEdit";
import { loginAction } from "./pages/auth/Login/Login";
import { userDetailLoader } from "./pages/user/UserDetail";
import { AllProductLoader } from "./pages/product/Product";
// import { BusinessDetailLoader } from "./containers/business/BusinessDetail";
import { ErrorPage } from "./errorPage";
import { productEditAction } from "./pages/product/ProductEdit";
import { BusinessAddAction } from "./pages/business/BusinessAdd";
import { ProductAddAction } from "./pages/product/ProductAdd";
import {
  BusinessEditAction,
  BusinessEditLoader,
} from "./pages/business/BusinessEdit";

// const queryClient = new QueryClient();

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
      {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
