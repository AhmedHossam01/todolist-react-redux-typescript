import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ITodo } from "./store/interface";
import { fetchTodos } from "./store/actions/fetchTodos";

//JSX.Element: TS custom definition
function App(): JSX.Element {
  const todosss = useSelector((state: { todos: ITodo[] }) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  });

  console.log(todosss);
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={() => null}>
        <input type="text" value={"null"} onChange={(e) => null} required />
        <button type="submit">Add Todo</button>
      </form>
      {/* <section>
        {todos.map((todo, index) => {
          return (
            <Fragment key={index}>
              <div
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.title}
              </div>
              <button type="button" onClick={() => null}>
                {todo.completed ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => null}>
                &times;
              </button>
            </Fragment>
          );
        })}
      </section> */}
    </Fragment>
  );
}

export default App;
