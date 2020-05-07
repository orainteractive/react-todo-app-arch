import React from 'react';
import NavbarComponent from "./navbar.component";
import { render } from '@testing-library/react';

test('render navbar component', () => {
    const {getByText} = render(<NavbarComponent/>);
    const text = getByText(/React ToDo/i);
    expect(text).toBeInTheDocument();
});
