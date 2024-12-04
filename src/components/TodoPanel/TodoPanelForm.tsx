import { ChangeEvent, useState } from 'react'
import s from './TodoPanelForm.module.css'
import { Button } from '../Button/Button'
import { AddTodoParams } from '../../types/Todo'
import { TODO_ITEM } from '../../features/TodoPanelItem/TodoItem'

interface TodoPanelProps {
	addTodo: ({ name, description }: AddTodoParams) => void
}

export const TodoPanel = ({ addTodo }: TodoPanelProps) => {
	const [todo, setTodo] = useState(TODO_ITEM)

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target // с помощью деструктуризации достаем name, value
		setTodo({ ...todo, [name]: value })
	}
	const handleAddTodo = () => {
		addTodo(todo)
		setTodo(TODO_ITEM) // Сброс состояния после добавления
	}

	// form
	return (
		<form
			className={s.todo_panel_container}
			onSubmit={e => {
				e.preventDefault()
				handleAddTodo()
			}}
		>
			<div className={s.fields_container}>
				<div className={s.field_container}>
					<label>
						<div className={s.name_todo}>Name</div>
						<input
							placeholder='Input your name...'
							type='text'
							id='name'
							name='name'
							onChange={onChange}
							value={todo.name}
						/>
					</label>
				</div>
				<div className={s.field_container}>
					<label>
						<div className={s.name_todo}>Description</div>
						<input
							placeholder='Input your note...'
							type='text'
							id='description'
							name='description'
							onChange={onChange}
							value={todo.description}
						/>
					</label>
				</div>
			</div>
			<div className={s.button_container}>
				<Button type='submit'>APPLY</Button>
			</div>
		</form>
	)
}
