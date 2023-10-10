import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from './routes/home';
import About from './routes/about';
import Error from './routes/error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />, 
    children: [
      {
        index: "home",
        element: <Home />,
        errorElement: <Error />,
        //loader: api.getAll
      }, 
      // {
      //   path: 'accomodation/:id',
      //   element: <Details />,
      //   errorElement: <Error />,
      //   //loader: api.getOneById
      // }, 
      {
        path: 'about',
        element: <About />,
        errorElement: <Error />,
        //loader: api.getAllAbout
      }, 
      {
        path: '*',
        element: <Error status={404}/>
      }
    ]
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

