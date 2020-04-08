import { FETCH_TODOS } from "./../actions/types";
import { ITodo } from "./../interface";

const initialState: ITodo[] = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
];

// @ts-ignore
export default function (state = { count: 0 }, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state };
    default:
      return state;
  }
}
