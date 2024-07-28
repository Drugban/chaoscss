import { FC } from 'react'
import styles from './DefaultBtn.module.scss'
import { ChildrenType } from 'types/global'
import { Link } from 'react-router-dom'

export const DefaultBtn: FC<ChildrenType & { to: string }> = ({ children, to }) => {
	return (
		<>
			<Link to={'/' + to} className={styles.Btn}>
				{children}
			</Link>
		</>
	)
}
