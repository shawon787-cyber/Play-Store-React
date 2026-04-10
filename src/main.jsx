import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import RootLayout from './Layout/RootLayout';
import Apps from './pages/apps/Apps';
import InstallApps from './pages/InstallApps/InstallApps';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children:[
        {
          index: true,
          element: <h2>Homepage</h2>
        },
        {
          path: "/apps",
          element: <Apps></Apps>
        },
        {
          path: "/installedApps",
          element: <InstallApps></InstallApps>
        },
      ],
      errorElement: <ErrorPage></ErrorPage>
    },
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
