import { combineReducers } from "redux";
import todosReducer from "./todo.reducer";

const rootReducer = combineReducers({
    todosReducer
});

export default rootReducer;
