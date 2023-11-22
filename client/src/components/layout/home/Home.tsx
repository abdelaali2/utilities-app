import { RouteObject } from "react-router-dom";
import { HOME_PAGE } from "../../../utilities/PagesIndex";

const Home = () => {
  return <div>Home</div>;
};

export default Home;
export const HomeIndexRoute: RouteObject = { index: true, element: <Home /> };
export const HomePathRoute: RouteObject = {
  path: HOME_PAGE,
  element: <Home />,
};
