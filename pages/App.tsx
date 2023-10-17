import React from "react";
import SideMenu from "./Layout/SideMenu";
import { ErrorScreen } from "./Layout/ErrorScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./Layout/HomeScreen";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenu />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
]);

export const App = (): JSX.Element => {
  return <RouterProvider router={Router} />;
};
