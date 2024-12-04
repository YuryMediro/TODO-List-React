import s from './Header.module.css'

interface HeaderProps {
	todoCount: number
}

export const Header = ({ todoCount }: HeaderProps) => {
	return (
		<div className={s.header_container}>
			<div className={s.header_title}>
				TODO <b>{todoCount}</b> task
			</div>
		</div>
	)
}
