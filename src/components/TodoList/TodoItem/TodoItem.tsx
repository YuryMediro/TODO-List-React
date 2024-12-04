import { Todo } from '../../../types/Todo'
import { Button } from '../../Button/Button'
import s from './TodoItem.module.css'

interface TodoItemProps {
	todo: Todo
	checkTodo: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
	selectTodoIdForEdit: (id: Todo['id']) => void
}

export const TodoItem = ({
	todo,
	checkTodo,
	deleteTodo,
	selectTodoIdForEdit,
}: TodoItemProps) => {
	return (
		<div className={s.todo_item_container}>
			<div>
				<div
					style={{
						opacity: todo.checked ? 0.5 : 1,
						textDecoration: todo.checked ? 'line-through' : 'none',
					}}
					className={s.todo_item_name}
					onClick={() => checkTodo(todo.id)}
				>
					{todo.name}
				</div>
				<div className={s.todo_item_description}>{todo.description}</div>
			</div>
			<div className={s.todo_item_button_container}>
				<Button onClick={() => selectTodoIdForEdit(todo.id)}>EDIT</Button>
				<Button onClick={() => deleteTodo(todo.id)}>DELETE</Button>
			</div>
		</div>
	)
}
