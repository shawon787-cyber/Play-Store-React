import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Homepage/Home";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/InstallApps/InstallApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/appDetails/AppDetails";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children:[
        {
          index: true,
          element: <Home></Home>,
          // loader: () => fetch("/public/data.json")
        },
        {
          path: "/apps",
          element: <Apps></Apps>, 
        },
        {
            path:"/apps/:id",
            element: <AppDetails></AppDetails>
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