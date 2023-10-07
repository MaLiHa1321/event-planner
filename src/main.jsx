import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './pages/privateRoute/PrivateRoute.jsx';
import ErrorElement from './pages/Errorpage/ErrorElement';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
         path: "/categore/:ID",
         element:  <PrivateRoute><Service></Service></PrivateRoute> ,
         loader: ()=> fetch('/data.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
     {
      path: "/event",
      element: <Event></Event>
     },
     {
      path: "/login",
      element: <Login></Login>
     },
     {
      path: "/register",
      element: <Register></Register>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
