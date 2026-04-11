import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Routes';
import InstalledAppProvider from './Context/InstalledAppProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppProvider>
        <RouterProvider router={router} />
    </InstalledAppProvider>
      
  </StrictMode>,
)
