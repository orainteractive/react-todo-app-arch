import React from 'react';

class NavbarComponent extends React.Component<any, any> {
    render() {
        return (
            <nav className={"navbar navbar-light bg-info"}>
                <a className={"navbar-brand text-white"} href={"/"}>React ToDo</a>
            </nav>
        );
    }
}

export default NavbarComponent;
