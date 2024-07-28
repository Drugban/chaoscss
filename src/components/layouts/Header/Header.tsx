import { FC } from 'react'
import { EndBar, StartBar } from '..'
import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<>
			<header className={styles.Header} role="banner">
				<h2 className="sr-only">Navigation Bar</h2>
				<nav className={styles.NavBar}>
					<StartBar />
					<EndBar />
				</nav>
			</header>
		</>
	)
}
