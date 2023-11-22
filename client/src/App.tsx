import React from "react";
import { Provider } from "react-redux";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.scss";
import { ContactRoute } from "./components/contact";
import { HomeIndexRoute, HomePathRoute, MainLayout } from "./components/layout";
import store from "./redux/Store";
import { TodoRoute } from "./components/todo";

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <MainLayout />,
      children: [HomeIndexRoute, HomePathRoute, ContactRoute, TodoRoute],
    },
  ];

  return (
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  );
};
export default App;
