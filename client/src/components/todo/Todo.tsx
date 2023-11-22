import { RouteObject } from "react-router-dom";
import { TODO_PAGE } from "../../utilities/PagesIndex";

const Todo = () => {
  return <div>Todo</div>;
};

export default Todo;
export const TodoRoute: RouteObject = { path: TODO_PAGE, element: <Todo /> };
