import TodoStatusEnum from "../enums/todo-status.enum";

interface TodoModel {
    id: number;
    user_id: number;
    content: string;
    is_completed: TodoStatusEnum;
}

export default TodoModel;
