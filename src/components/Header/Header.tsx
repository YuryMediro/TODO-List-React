import React from 'react'
import s from './Header.module.css'


interface HeaderProps {
	todoCount: number
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
	return (
		<div className={s.header_container}>
			<div className={s.header_title}>
				TODO <b>{todoCount}</b> task
			</div>
		</div>
	)
}
