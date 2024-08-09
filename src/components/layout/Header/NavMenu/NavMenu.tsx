import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavMenu.module.scss'
import { ClassNameType } from 'types/global'

const NavMenuData = [
	{ id: 1, to: '/docs', name: 'docs' },
	{ id: 2, to: '/components', name: 'components' },
	{ id: 3, to: '/icons', name: 'icons' },
	{ id: 4, to: '/blog', name: 'blog' }
]

export const NavMenu: FC<ClassNameType> = ({className}) => {
	return (
		<>
			<ul className={`${styles.NavMenu} ${className && className}`}>
				{NavMenuData.map(item => {
					return (
						<li className={styles.List} key={item.id}>
							<Link to={item.to}>{item.name}</Link>
						</li>
					)
				})}
			</ul>
		</>
	)
}
