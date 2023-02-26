import { Todo } from "../../../typing";

import { notFound } from "next/navigation";

interface TodoPageProps {
    params: {
        todoId: string;
    }
}

const fetchTodo = async (todoId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } });
    const dataJson: Todo = await response.json();

    return dataJson;
}

const TodoPage = async ({ params: { todoId } }: TodoPageProps) => {
    const todo = await fetchTodo(todoId);

    if(!todo.id) return notFound();

    return (
        <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>Completed: {todo.completed ? "yes" : "no"}</p>

            <p className="border-t border-black mt-5 text-right">
                By user: {todo.userId}
            </p>
        </div>
    )
}

export default TodoPage;