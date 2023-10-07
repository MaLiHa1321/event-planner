import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/home/Home.jsx';
import About from './pages/about/About.jsx';
import Service from './component/Service/Service.jsx';
import Event from './component/Event/Event.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
         path: "/categore/:ID",
         element: <Service></Service>,
         loader: ()=> fetch('/data.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
     {
      path: "/event",
      element: <Event></Event>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
