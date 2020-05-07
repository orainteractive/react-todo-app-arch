import todosReducer from "./todo.reducer";
import {RECEIVE_TODOS, UPDATE_TODO} from "../actions/todo.action";

const todos = [{
    "type": "todos",
    "id": "1",
    "attributes": {
        "is_completed": false,
        "content": "Qui ducimus ut impedit alias similique vero accusamus qui nostrum."
    },
    "relationships": {"user": {"data": {"type": "users", "id": "1"}}}
}, {
    "type": "todos",
    "id": "2",
    "attributes": {"is_completed": false, "content": "Non minus sequi dolorum itaque ipsum occaecati deserunt quis."},
    "relationships": {"user": {"data": {"type": "users", "id": "1"}}}
}, {
    "type": "todos",
    "id": "3",
    "attributes": {"is_completed": false, "content": "Dolor quod explicabo id rerum beatae doloribus odit ratione."},
    "relationships": {"user": {"data": {"type": "users", "id": "1"}}}
}, {
    "type": "todos",
    "id": "4",
    "attributes": {"is_completed": false, "content": "Cumque qui dicta cum."},
    "relationships": {"user": {"data": {"type": "users", "id": "1"}}}
}, {
    "type": "todos",
    "id": "5",
    "attributes": {
        "is_completed": false,
        "content": "Commodi sunt tempora autem consectetur deserunt molestiae sapiente unde."
    },
    "relationships": {"user": {"data": {"type": "users", "id": "1"}}}
}];

test('should handle RECEIVE_TODOS', () => {
    expect(
        todosReducer(undefined, {
            type: RECEIVE_TODOS,
            todos
        })
    ).toEqual(todos);
});

test('should handle UPDATE_TODO', () => {
    const todo = todos[0];
    todo.attributes.is_completed = true;
    expect(
        todosReducer(todos, {
            type: UPDATE_TODO,
            todo,
        })
    ).toEqual(todos);
});
