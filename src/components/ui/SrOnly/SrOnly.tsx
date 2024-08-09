import { FC } from 'react'
import { ChildrenType } from 'types/global'
import styles from './SrOnly.module.scss'

export const SrOnly: FC<ChildrenType> = ({ children }) => {
	return (
		<>
			<h2 className={styles.SrOnly}>{children}</h2>
		</>
	)
}
