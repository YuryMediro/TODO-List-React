import { useState } from 'react'
import s from '../../BaseLayout.module.css'
import { Header } from '../../components/Header/Header'
import { TodoPanel } from '../../components/TodoPanel/TodoPanel'

const TASK_TODO_LIST = [
	{ id: 1, name: 'task1', description: 'description 1', checked: false },
	{ id: 2, name: 'task2', description: 'description 2', checked: true },
	{ id: 3, name: 'task3', description: 'description 3', checked: false },
]
type Todo = {
	id: number
	name: string
	description: string
	checked: boolean
}
type AddTodoParams = Omit<Todo, 'id' | 'checked'>

export const BaseLayout = () => {
	const [todos, setTodos] = useState(TASK_TODO_LIST)

	const addTodo = ({ name, description }: AddTodoParams): void => {
		setTodos([
			...todos,
			{ id: todos[todos.length - 1].id + 1, description, name, checked: false },
		])
	}

	return (
		<div className={s.app_wrapper}>
			<div className={s.wrapper_content}>
				<Header todoCount={todos.length} />
				<TodoPanel addTodo={addTodo} />
			</div>
		</div>
	)
}
