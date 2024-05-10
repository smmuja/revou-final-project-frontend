import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, ProtectedLayout } from "./layouts";

import {
  Home,
  BusinessAllPage,
  UserDetailPage,
  BusinessDetailPage,
  ProductAllPage,
  ProductDetailPage,
  UserEditPage,
  BusinessEditPage,
  ProductAddPage,
  ProductEditPage,
  UserAllPage,
} from "./pages";
import { Login, Register } from "./pages/auth";
import { registerAction } from "./pages/auth/Register/Register";

import { AllBusinessLoader } from "./pages/business/BusinessAllPage";

// import { QueryClient, QueryClientProvider } from "react-query";
import { userEditAction } from "./pages/user/UserEditPage";
import { loginAction } from "./pages/auth/Login/Login";
import { userDetailLoader } from "./pages/user/UserDetailPage";
import { AllProductLoader } from "./pages/product/ProductAllPage";
// import { BusinessDetailLoader } from "./containers/business/BusinessDetail";
import { ErrorPage } from "./errorPage";
import { productEditAction } from "./pages/product/ProductEditPage";
import BusinessAddPage, {
  BusinessAddAction,
} from "./pages/business/BusinessAddPage";
import { ProductAddAction } from "./pages/product/ProductAddPage";
import {
  BusinessEditAction,
  BusinessEditLoader,
} from "./pages/business/BusinessEditPage";

// const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
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
              element: <UserAllPage />,
            },
            {
              path: "/user/:id",
              element: <UserDetailPage />,
              loader: userDetailLoader,
            },
            {
              path: "/user/edit",
              element: <UserEditPage />,
              action: userEditAction,
              // loader: userEditLoader,
            },
            {
              path: "/business",
              element: <BusinessAllPage />,
              loader: AllBusinessLoader,
            },
            {
              path: "/business/:id",
              element: <BusinessDetailPage />,
              // loader: BusinessDetailLoader,
            },
            {
              path: "/business/add",
              element: <BusinessAddPage />,
              action: BusinessAddAction,
            },
            {
              path: "/business/:id/edit",
              element: <BusinessEditPage />,
              loader: BusinessEditLoader,
              action: BusinessEditAction,
            },
            {
              path: "/product",
              element: <ProductAllPage />,
              loader: AllProductLoader,
            },
            {
              path: "/product/id",
              element: <ProductDetailPage />,
            },
            {
              path: "/product/add",
              element: <ProductAddPage />,
              action: ProductAddAction,
            },
            {
              path: "/product/:id/edit",
              element: <ProductEditPage />,
              action: productEditAction,
            },
            {
              path: "*",
              element: <h1>Page not found</h1>,
            },
          ],
        },
      ],
    },
  ]);

  // const router = createBrowserRouter([
  //   {
  //     element: <MainLayout />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/login",
  //         element: <Login />,
  //         action: loginAction,
  //       },
  //       {
  //         path: "/register",
  //         element: <Register />,
  //         action: registerAction,
  //       },
  //       {
  //         path: "/user",
  //         element: <User />,
  //       },
  //       {
  //         path: "/user/:id",
  //         element: <UserDetail />,
  //         loader: userDetailLoader,
  //       },
  //       {
  //         path: "/user/edit",
  //         element: <UserEdit />,
  //         action: userEditAction,
  //         // loader: userEditLoader,
  //       },
  //       {
  //         path: "/business",
  //         element: <Business />,
  //         loader: AllBusinessLoader,
  //       },
  //       {
  //         path: "/business/:id",
  //         element: <BusinessDetail />,
  //         // loader: BusinessDetailLoader,
  //       },
  //       {
  //         path: "/business/add",
  //         element: <BusinessAdd />,
  //         action: BusinessAddAction,
  //       },
  //       {
  //         path: "/business/:id/edit",
  //         element: <BusinessEdit />,
  //         loader: BusinessEditLoader,
  //         action: BusinessEditAction,
  //       },
  //       {
  //         path: "/product",
  //         element: <Product />,
  //         loader: AllProductLoader,
  //       },
  //       {
  //         path: "/product/id",
  //         element: <ProductDetail />,
  //       },
  //       {
  //         path: "/product/add",
  //         element: <ProductAdd />,
  //         action: ProductAddAction,
  //       },
  //       {
  //         path: "/product/:id/edit",
  //         element: <ProductEdit />,
  //         action: productEditAction,
  //       },
  //       {
  //         path: "*",
  //         element: <h1>Page not found</h1>,
  //       },
  //     ],
  //   },
  //   {
  //     element: <ProtectedLayout />,
  //     children: [
  //       {
  //         path: "/try",
  //         element: <></>,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
