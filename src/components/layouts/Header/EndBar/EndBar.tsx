import { NavModal, NavToggle, ToggleTheme, VerticalLine } from 'components/ui'
import {  useEffect, useState } from 'react'
import { NavMenu } from '../..'
import styles from './EndBar.module.scss'

export const EndBar = () => {
	const [navModalOpen, setNavModalOpen] = useState(false)

	useEffect(() => {
		function windowRezize() {
			if (window.innerWidth >= 768) {
				setNavModalOpen(false)
			}
		}
		window.addEventListener('resize', windowRezize)

		return () => {
			window.removeEventListener('resize', windowRezize)
		}
	}, [])

	return (
		<>
			{/* End Bar */}
			<ul className={`${styles.EndBar} col`}>
				{/* Navigation Menu */}
				<NavMenu className="md_flex none" />
				{navModalOpen && (
					<NavModal setNavModalOpen={() => setNavModalOpen(!navModalOpen)} />
				)}
				<VerticalLine className="mx-16 md_block none" />
				{/* Toggle Theme */}
				<ToggleTheme />
				<VerticalLine className="mx-16 md_none block" />
				<NavToggle onClick={() => setNavModalOpen(!navModalOpen)} />
			</ul>
		</>
	)
}