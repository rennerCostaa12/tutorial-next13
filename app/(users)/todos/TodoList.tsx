import Link from "next/link";
import { Todo } from "../../typing";

const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const dataJson: Todo[] = await response.json();

    return dataJson;
}

const TodoList = async () => {
    const todos = await fetchTodos();
    return (
        <div>
            {todos.map((value) => {
                return (
                    <p key={value.id}>
                        <Link href={`/todos/${value.id}`}>Todo: {value.id}</Link>
                    </p>
                )
            })}
        </div>
    )
}

export default TodoList;