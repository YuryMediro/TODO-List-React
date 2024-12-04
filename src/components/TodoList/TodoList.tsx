import { Todo } from '../../types/Todo'
import { TodoItem } from './TodoItem/TodoItem'

interface TodoListProps {
	todos: Todo[]
	checkTodo: (id: Todo['id']) => void
}

export const TodoList = ({ todos, checkTodo }: TodoListProps) => {
	return (
		<div>
			{todos.map(todo => (
				<TodoItem todo={todo} checkTodo={checkTodo} />
			))}
		</div>
	)
}
