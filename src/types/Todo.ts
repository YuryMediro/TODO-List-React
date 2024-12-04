export type Todo = {
	id: number
	name: string
	description: string
	checked: boolean
}

export type AddTodoParams = Omit<Todo, 'id' | 'checked'>
