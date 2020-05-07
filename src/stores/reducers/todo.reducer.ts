import {RECEIVE_TODOS, UPDATE_TODO} from "../actions/todo.action";

const initialState = {
    todos: []
};

interface ActionInterface {
    todos?: any[],
    todo?: object,
    type: string,
}

const todosReducer = (state: any = initialState, action: ActionInterface) => {
    switch (action.type) {
        case RECEIVE_TODOS:
            state.todos = action.todos;
            return state.todos;
        case UPDATE_TODO:
            const index = (state).indexOf(action.todo);
            state[index] = action.todo;
            return [...state];
        default:
            return state.todos;
    }
};

export default todosReducer;
