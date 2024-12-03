import React, { useState } from 'react'
import s from './TodoPanel.module.css'
import { Button } from '../Button/Button'

const TODO_ITEM = {
	name: '',
	description: '',
}
type Todo = {
	id: number
	name: string
	description: string
	checked: boolean
}

interface TodoPanelProps {
	addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void
}

export const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
	const [todo, setTodo] = useState(TODO_ITEM)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target //с помощью деструктуризации достаем name, value
		setTodo({ ...todo, [name]: value })
	}
	const handleAddTodo = () => {
		addTodo(todo)
		setTodo(TODO_ITEM) // Сброс состояния после добавления
	}
	return (
		<div className={s.todo_panel_container}>
			<div className={s.fields_container}>
				<div className={s.field_container}>
					<label>
						<div>name</div>
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
						<div>description</div>
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
				<Button onClick={handleAddTodo}>APPLY</Button>
			</div>
		</div>
	)
}
