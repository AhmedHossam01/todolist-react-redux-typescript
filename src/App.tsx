import React, { Fragment } from "react";

interface ITodo {
  text: string;
  complete: boolean;
}

const todos = [
  { text: "guys how are you today", complete: true },
  {
    text: "hello",
    complete: false,
  },
];

//JSX.Element: TS custom definition
function App(): JSX.Element {
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={() => null}>
        <input type="text" value={"null"} onChange={(e) => null} required />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <Fragment key={index}>
              <div
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
              >
                {todo.text}
              </div>
              <button type="button" onClick={() => null}>
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => null}>
                &times;
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
}
export default App;
