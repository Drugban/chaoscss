import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ChildrenType, ClassNameType } from 'types/global'
import styles from './Button.module.scss'

export const Button: FC<
	ClassNameType & ChildrenType & { to?: string; variant?: string }
> = ({ className, children, variant, to }) => {
	return (
		<>
			{!to ? (
				<button
					className={`${(!variant && styles.Button) || (variant == 'outline' && styles.ButtonOutline)} ${className ? className : ''}`}
				>
					{children}
				</button>
			) : (
				<Link
					to={to}
					target="_blank"
					className={`${(!variant && styles.Button) || (variant == 'outline' && styles.ButtonOutline)} ${className && className}`}
				>
					{children}
				</Link>
			)}
		</>
	)
}
