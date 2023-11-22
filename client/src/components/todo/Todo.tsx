import { RouteObject } from "react-router-dom";
import { TODOS_PAGE } from "../../utilities/PagesIndex";

const Todo = () => {
  return <div>Todo</div>;
};

export default Todo;
export const TodoRoute: RouteObject = { path: TODOS_PAGE, element: <Todo /> };
