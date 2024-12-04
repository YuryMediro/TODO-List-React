import { ButtonHTMLAttributes } from 'react'
import s from './Button.module.css'

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>

// Поменять типы на которые я скину

export const Button = ({ onClick, children }: ButtonProps) => {
	return (
		<button className={s.button} onClick={onClick}>
			{children}
		</button>
	)
}
