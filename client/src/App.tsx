import React from "react";
import { Provider } from "react-redux";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.scss";
import { ContactLayout } from "./components/contact";
import { Home, MainLayout } from "./components/layout";
import { Todo } from "./components/todo";
import store from "./redux/Store";
import { CONTACT_PAGE, HOME_PAGE, TODO_PAGE } from "./utilities/PagesIndex";

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: HOME_PAGE, element: <Home /> },
        { path: CONTACT_PAGE, element: <ContactLayout /> },
        { path: TODO_PAGE, element: <Todo /> },
      ],
    },
  ];

  return (
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  );
};
export default App;
