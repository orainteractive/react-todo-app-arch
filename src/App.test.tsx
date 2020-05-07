import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./stores/store";

test('renders learn react link', () => {
  const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
  );
  const linkElement = getByText(/Things To Do/i);
  expect(linkElement).toBeInTheDocument();
});
