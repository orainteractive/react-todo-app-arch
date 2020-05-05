export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const GET_TODO = 'GET_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CREATE_TODO = 'CREATE_TODO';

export const receiveTodos = () => {
    return function (dispatch: any) {
        fetch('/api/todos?include=user')
            .then((res) => res.json())
            .then((json) => dispatch(fetchTodos(json)));

    };
};

export const fetchTodos = (json: any) => {
    return {
        type: RECEIVE_TODOS,
        todos: json.data,
    }
};

export const getTodo = () => ({
    type: GET_TODO,
});

export const deleteTodo = () => ({
   type: DELETE_TODO,
});

export const updateTodo = (todo: any) => ({
    type: UPDATE_TODO,
    todo
});

export const createTodo = () => ({
    type: CREATE_TODO,
});
