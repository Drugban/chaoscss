import { Moon, Sun } from 'assets/svg'
import { memo, useContext } from 'react'
import styles from './ToggleTheme.module.scss'
import { ThemeContext } from 'components/../Theme'

export const ToggleTheme = memo(() => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<>
			<li>
				<button className={styles.ToggleTheme} onClick={() => toggleTheme()}>
					{theme == 'dark' ? <Moon /> : <Sun />}
				</button>
			</li>
		</>
	)
})
