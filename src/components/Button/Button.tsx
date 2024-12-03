import React from 'react'
import s from './Button.module.css'

interface ButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>
	children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, }) => {
	return (
		<button className={s.button} onClick={onClick}>
			{children}
		</button>
	)
}
