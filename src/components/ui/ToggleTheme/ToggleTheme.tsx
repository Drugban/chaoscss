import { Moon, Sun } from 'assets/svg'
import { FC, useContext } from 'react'
import { ThemeContext } from '../../../Theme'
import { ClassNameType } from 'types/global'
import styles from './ToggleTheme.module.scss'

export const ToggleTheme: FC<ClassNameType> = ({ className }) => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<>
			<button
				onClick={toggleTheme}
				className={`${styles.ToggleTheme} ${theme == 'dark' ? styles.dark : styles.light} ${className}`}
			>
				{theme == 'dark' ? <Moon /> : <Sun />}
			</button>
		</>
	)
}
