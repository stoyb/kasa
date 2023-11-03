import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/root";
import Home from './pages/home/home';
import About from './pages/about/about';
import Error from './pages/error/error';
import Accomodation from './pages/accomodation/accomodation';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: 'accomodation/:id',
        element: <Accomodation />,
        errorElement: <Error />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <Error />
      },
      {
        path: '*',
        element: <Error status={404} />
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

