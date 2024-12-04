import { Todo } from '../../types/Todo'
import { TodoPanel } from '../TodoPanel/TodoPanel'
import { TodoItem } from './TodoItem/TodoItem'

interface TodoListProps {
	todos: Todo[]
	checkTodo: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
	selectTodoIdForEdit: (id: Todo['id']) => void
	todoIdForEdit: Todo['id']
}

export const TodoList = ({
	todos,
	checkTodo,
	deleteTodo,
	selectTodoIdForEdit,
	todoIdForEdit,
}: TodoListProps) => {
	return (
		<div>
			{todos.map(todo => {
				if (todo.id === todoIdForEdit) return <TodoPanel key={todo.id} />
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						checkTodo={checkTodo}
						deleteTodo={deleteTodo}
						selectTodoIdForEdit={selectTodoIdForEdit}
					/>
				)
			})}
		</div>
	)
}
