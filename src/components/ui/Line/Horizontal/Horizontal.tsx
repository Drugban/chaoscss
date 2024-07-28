import { FC } from 'react'
import styles from './Horizontal.module.scss'


export const HorizontalLine: FC<string> = className => {
	return (
		<>
			<div className={`${styles.HorizontalLine} ${className}`} />
		</>
	)
}
