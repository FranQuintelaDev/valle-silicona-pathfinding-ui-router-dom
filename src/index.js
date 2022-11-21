import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Root from './routes/root';
import Error from './routes/error';
import Welcome from './routes/welcome';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import User, {
  loader as userLoader,
} from "./routes/user";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "user/:userId",
        element: <User />,
        loader: userLoader,
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
reportWebVitals();
