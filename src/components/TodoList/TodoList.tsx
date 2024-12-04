import { Todo } from '../../types/Todo'
import { TodoItem } from './TodoItem/TodoItem'

interface TodoListProps {
	todos: Todo[]
	checkTodo: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
}

export const TodoList = ({ todos, checkTodo, deleteTodo }: TodoListProps) => {
	return (
		<div>
			{todos.map(todo => (
				<TodoItem todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
			))}
		</div>
	)
}
