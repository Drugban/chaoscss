import { GitHub, Logo } from 'assets/svg'
import { SearchButton } from 'components/ui/Search/Search'
import { SrOnly } from 'components/ui/SrOnly/SrOnly'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { NavMenu } from './NavMenu/NavMenu'
import { Version } from 'components/ui'

export const Header: FC = () => {
	return (
		<>
			<header className={styles.Header}>
				<SrOnly>Navigation Bar</SrOnly>
				<div className={styles.StartBar}>
					<Link to="/" className={styles.Logo}>
						<Logo />
					</Link>
					<NavMenu className={styles.NavMenu} />
				</div>
				<div className={styles.EndBar}>
					<SearchButton />
					<div className={styles.EndBarContent}>
						<Version />
						<a
							href="https://github.com/Drugban/chaoscss"
							target="_blank"
							className={styles.Btn}
						>
							<GitHub />
						</a>
						{/* <ToggleTheme className={styles.Btn} /> */}
					</div>
				</div>
			</header>
		</>
	)
}
