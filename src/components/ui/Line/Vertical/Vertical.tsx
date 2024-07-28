import { FC, memo } from 'react'
import styles from './Vertical.module.scss'

type VerticalLineType = {
	className: string
}
export const VerticalLine: FC<VerticalLineType> = memo(({ className }) => {
	return (
		<>
			<div className={`${styles.VerticalLine} ${className}`} />
		</>
	)
})
