import { FC } from 'react'
import { ChildrenType, ClassNameType } from 'types/global'
import styles from './CustomBtn.module.scss'
import { Link } from 'react-router-dom'

export const CustomBtn: FC<
	ChildrenType & { variant: string } & ClassNameType
> = ({ children, variant }) => {
	return (
		<>
			{variant == 'github' && (
				<Link
					to="https://github.com"
					target='_blank'
					className={`${styles.CustomBtn} ${styles.GitHub}`}
				>
					{children}
				</Link>
			)}
		</>
	)
}
