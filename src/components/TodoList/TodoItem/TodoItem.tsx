import { Todo } from '../../../types/Todo'
import { Button } from '../../Button/Button'
import s from './TodoItem.module.css'

interface TodoItemProps {
	todo: Todo
	checkTodo: (id: Todo['id']) => void
}

export const TodoItem = ({ todo, checkTodo }: TodoItemProps) => {
	return (
		<div className={s.todo_item_container}>
			<div>
				<div
					style={{
						opacity: todo.checked ? 0.5 : 1,
						textDecoration: todo.checked ? 'line-through' : 'none',
					}}
					className={s.todo_item_title}
					onClick={() => checkTodo(todo.id)}
				>
					{todo.name}
				</div>
				<div className={s.todo_item_title}>{todo.description}</div>
			</div>
			<div className={s.todo_item_button_container}>
				<Button>Edit</Button>
				<Button>Delete</Button>
			</div>
		</div>
	)
}
