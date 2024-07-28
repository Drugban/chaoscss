import { FC, MouseEventHandler } from 'react'
import styles from './CloseBtn.module.scss'
import { Close } from 'assets/svg'

type onClickType = {
	onClick: MouseEventHandler
}

export const CloseBtn: FC<onClickType> = ({ onClick }) => {
	return (
		<>
			<button onClick={onClick} className={styles.CloseBtn}>
				<Close />
			</button>
		</>
	)
}
