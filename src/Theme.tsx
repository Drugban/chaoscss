import { createContext, useEffect, useState } from 'react'
import { ChildrenType } from 'types/global'

export const ThemeContext = createContext({
	theme: '',
	toggleTheme: () => {}
})

const getTheme = () => {
	const theme = localStorage.getItem('theme')
	if (!theme) {
		localStorage.setItem('theme', 'dark')
		return 'dark'
	} else {
		return theme
	}
}

export const ThemeProvider = function ThemeProvider({
	children
}: ChildrenType): JSX.Element {
	const [theme, setTheme] = useState(getTheme)
	function toggleTheme() {
		if (theme === 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	useEffect(() => {
		const refreshTheme = () => {
			localStorage.setItem('theme', theme)
			document.body.setAttribute('data-theme', theme)
		}

		refreshTheme()
	}, [theme])
	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
