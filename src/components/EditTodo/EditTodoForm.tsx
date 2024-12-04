import s from './EditPanelForm.module.css'
import { Button } from '../Button/Button'

export const EditTodoForm = () => {
	// form
	return (
		<form className={s.form}>
			<div className={s.fields_container}>
				<div className={s.field_container}>
					<label>
						<div className={s.name_todo}>Name</div>
						<input
							placeholder='Update your name...'
							type='text'
							id='name'
							name='name'
						/>
					</label>
				</div>
				<div className={s.field_container}>
					<label>
						<div className={s.name_todo}>Description</div>
						<input
							placeholder='Update your note...'
							type='text'
							id='description'
							name='description'
						/>
					</label>
				</div>
			</div>
			<div className={s.button_container}>
				<Button type='submit'>UPDATE</Button>
			</div>
		</form>
	)
}
