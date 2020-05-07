import React from 'react';
import {Server} from "miragejs";
import makeServer from "../../server";
import {
    CREATE_TODO,
    createTodo,
    DELETE_TODO,
    deleteTodo,
    fetchTodos,
    GET_TODO,
    getTodo,
    RECEIVE_TODOS,
    UPDATE_TODO,
    updateTodo
} from "./todo.action";

let server: Server;

beforeEach(() => {
   server = makeServer();
});

afterEach(() => {
    server.shutdown();
});

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

test('should trigger action receiveTodos', () => {
    const expectedAction = {
        type: RECEIVE_TODOS,
        todos
    };

    const data = {
        data: todos
    };

    expect(fetchTodos(data)).toEqual(expectedAction);
});

test('should trigger action getTodo', () => {
    const expectedAction = {
        type: GET_TODO
    };

    expect(getTodo()).toEqual(expectedAction);
});

test('should trigger action deleteTodo', () => {
    const expectedAction = {
        type: DELETE_TODO
    };

    expect(deleteTodo()).toEqual(expectedAction);
});

test('should trigger action updateTodo', () => {
    const todo = todos[0];
    const expectedAction = {
        type: UPDATE_TODO,
        todo
    };

    expect(updateTodo(todo)).toEqual(expectedAction);
});

test('should triggerAction createTodo', () => {
    const expectedAction = {
        type: CREATE_TODO
    };

    expect(createTodo()).toEqual(expectedAction);
});
