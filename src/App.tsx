
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout, ProtectedLayout } from './layouts'

import { Home, Business, User, BusinessDetail, UserDetail, Product, ProductDetail} from './containers'
import { Login, Register} from './containers/auth'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {

  const router = createBrowserRouter ([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/user',
          element: <User />,
        },
        {
          path: '/user/id',
          element: <UserDetail />,
        },
        {
          path: '/business',
          element: <Business />,
        },
        {
          path: '/business/id',
          element: <BusinessDetail />,
        },
        {
          path: '/product',
          element: <Product />,
        },
        {
          path: '/product/id',
          element: <ProductDetail />,
        },
        {
          path: '*',
          element: <h1>Page not found</h1>,
        },
      ]
    },
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: '/try',
          element: <></>
        }
      ]
    }
  ])

  return (

    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </>
  )
}

export default App