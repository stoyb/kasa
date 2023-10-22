import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from './routes/home';
import About from './routes/about';
import Error from './routes/error';
import Accomodation from './routes/accomodation';


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

