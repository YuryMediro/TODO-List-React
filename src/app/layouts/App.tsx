import { useState } from 'react'
import s from './App.module.css'
import { Header } from '../../components/Header/Header'
import { TodoPanel } from '../../components/TodoPanel/TodoPanelForm'
import { AddTodoParams, Todo } from '../../types/Todo'
import { TodoList } from '../../components/TodoList/TodoList'
import { TASK_TODO_LIST } from '../../features/TodoList/TaskTodoList'

export const App = () => {
	const [todos, setTodos] = useState<Todo[]>(TASK_TODO_LIST)
	const [todoIdForEdit, setTodoIdForEdit] = useState<Todo['id']>(Number)

	const addTodo = ({ name, description }: AddTodoParams): void => {
		const newId = Date.now() // Генерация уникального ID
		setTodos([...todos, { id: newId, description, name, checked: false }])
	}

	const checkTodo = (id: Todo['id']) => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo
			)
		)
	}
	const deleteTodo = (id: Todo['id']) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const selectTodoIdForEdit = (id: Todo['id']) => {
		setTodoIdForEdit(id)
	}

	return (
		<div className={s.app_wrapper}>
			<div className={s.wrapper_content}>
				<Header todoCount={todos.length} />
				<TodoPanel addTodo={addTodo} />
				<TodoList
					todos={todos}
					checkTodo={checkTodo}
					deleteTodo={deleteTodo}
					selectTodoIdForEdit={selectTodoIdForEdit}
					todoIdForEdit={todoIdForEdit}
				/>
			</div>
		</div>
	)
}
