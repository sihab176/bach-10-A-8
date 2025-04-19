import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,
        loader:()=>fetch('/product.json'),
        Component:Home},
      {path:"/Statistics",Component:About},
      {path:"/productDetails/:id",
        loader:()=>fetch('/product.json'),
        Component:ProductDetails},
      {path:"/Dashboard",
        loader:()=>fetch('/product.json'),
        Component:Dashboard}
    ]
  },
]);












createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
