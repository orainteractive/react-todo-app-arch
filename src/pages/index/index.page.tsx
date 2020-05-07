import React from 'react';
import NavbarComponent from "../../components/navbar/navbar.component";
import {connect} from "react-redux";
import {receiveTodos, updateTodo} from '../../stores/actions/todo.action';
import './index.page.scss';

class IndexPage extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.receiveTodos();
    }

    render() {
        const todos = this.props.todos;

        const handleTodoCheckboxChecked = (todo: any) => {
            todo.attributes.is_completed = !todo.attributes.is_completed;
            this.props.updateTodos(todo);
        };

        return (
            <div>
                <NavbarComponent></NavbarComponent>
                <div className={"w-100 text-center pt-4 pb-4"}>
                    <h3>Things To Do</h3>
                </div>
                <div className={"container"}>
                    {todos && todos.length
                        ? <div className={"row"}>
                            {todos.map((todo: any) => (
                                <div key={todo.id} className={"d-flex justify-between col-lg-4 mb-3 col-md-12"}>
                                    <div className={"todo-card card w-100"} key={todo.id} data-testid={`todo-${todo.id}`}>
                                        <div className={"card-body inner-padding"}>
                                            <div className="row h-100">
                                                <div className={`col-2 d-flex align-items-center justify-content-center ${todo.attributes.is_completed ? 'bg-success' : 'bg-light'}`}>
                                                    <input className={"form-control w-auto"} type={"checkbox"} checked={todo.attributes.is_completed} onChange={handleTodoCheckboxChecked.bind(this, todo)}/>
                                                </div>
                                                <div className="d-flex pt-3 pb-3 col-10 align-items-center">
                                                    {todo.attributes.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.todosReducer
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    receiveTodos: () => dispatch(receiveTodos()),
    updateTodos: (todo: any) => dispatch(updateTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
