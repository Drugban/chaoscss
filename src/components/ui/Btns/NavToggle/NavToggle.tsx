import { Menu } from 'assets/svg'
import styles from './NavToggle.module.scss'
import { FC, memo, MouseEventHandler } from 'react'

type onClicktype = {
	onClick: MouseEventHandler
}

export const NavToggle: FC<onClicktype> = memo(({ onClick }) => {
	return (
		<>
			<button onClick={onClick} className={`${styles.NavToggle}`}>
				<Menu />
			</button>
		</>
	)
})
