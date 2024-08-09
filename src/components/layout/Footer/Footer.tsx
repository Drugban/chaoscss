import { FC } from 'react'
import styles from './Footer.module.scss'
import { Logo } from 'assets/svg'
import { Link } from 'react-router-dom'

const FooterMenuData = [
	{
		name: 'products',
		links: [
			{ label: 'css', to: '/' },
			{ label: 'icons', to: '/icons' },
			{ label: 'components', to: '/components' }
		]
	},
	{
		name: 'links',
		links: [{ label: 'begin developed', to: 'docs' }]
	}
]

const FooterMenu: FC = () => {
	return (
		<>
			<div className={styles.FooterMenu}>
				{FooterMenuData.map((item, idx) => {
					return (
						<div key={idx}>
							<span className={styles.FooterMenuTitle}>{item.name}</span>
							<ul key={idx}>
								{item.links.map((item, idx) => {
									return (
										<li className={styles.FooterMenuList} key={idx}>
											<Link to={item.to}>{item.label}</Link>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</>
	)
}

export const Footer: FC = () => {
	return (
		<>
			<footer className={styles.Footer}>
				<div className={styles.FooterTop}>
					<Logo />
				</div>
				<FooterMenu />
				<div className={styles.FooterBottom}>
					<p>
						Code licensed{' '}
						<a
							href="https://github.com/Drugban/chaoscss/blob/main/LICENSE"
							target="_blank"
						>
							MIT
						</a>
					</p>
					<p>Create by Drugban</p>
				</div>
			</footer>
		</>
	)
}
