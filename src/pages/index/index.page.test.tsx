import React from 'react';
import {render, waitForElement} from '@testing-library/react';
import {Provider} from "react-redux";
import IndexPage from "./index.page";
import {makeServer} from "../../server";
import {Server} from "miragejs/server";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

let server: Server;

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

beforeEach(() => {
    server = makeServer();
    jest.spyOn(window, 'fetch');
});

afterEach(() => {
    server.shutdown();
});

test('does index page load', () => {
    const store = mockStore({
        todosReducer: todos
    });

    const {getByText} = render(
        <Provider store={store}>
            <IndexPage/>
        </Provider>
    );
    const text = getByText(/Things to Do/i);
    expect(text).toBeInTheDocument();
});

test('does load up todos', async () => {
    const store = mockStore({
        todosReducer: todos
    });

    const {getByTestId} = render(
        <Provider store={store}>
            <IndexPage/>
        </Provider>
    );

    await waitForElement(() => getByTestId('todo-1'));

    todos.forEach((t: any) => {
       expect(getByTestId(`todo-${t.id}`)).toHaveTextContent(t.attributes.content);
    });
});
