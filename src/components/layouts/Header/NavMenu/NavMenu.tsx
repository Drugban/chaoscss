import { Link } from 'react-router-dom'
import styles from './NavMenu.module.scss'
import { FC, memo } from 'react'
import { ClassNameType } from 'types/global'
// Menu List
const HeaderMenuData = [
	{ name: 'docs', link: '/docs' },
	{ name: 'blog', link: '/blog' },
	{ name: 'components', link: '/components' }
]

export const NavMenu: FC<ClassNameType> = memo(({ className }) => {
	return (
		<>
			{/* Navigation Menu */}
			<ul className={`${className} ${styles.NavMenu} `}>
				{/* Mapping Menu List */}
				{HeaderMenuData.map(item => {
					return (
						<li key={item.name}>
							<Link to={item.link} className={styles.NavLink}>
								{item.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</>
	)
})
