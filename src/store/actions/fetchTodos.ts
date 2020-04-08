import { FETCH_TODOS } from "./types";
import axios from "axios";

export const fetchTodos = () => {
  return (dispatch: any) => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
     
    // });
      dispatch({
          type: FETCH_TODOS,
          payload: "payload",
      });
  };
};
