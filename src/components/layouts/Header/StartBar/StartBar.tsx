import { HeaderLogo } from 'assets/svg'
import { Link } from 'react-router-dom'
import styles from './StartBar.module.scss'
import packageJSON from 'components/../../package.json'

export function StartBar() {
	return (
		<>
			{/* Left Bar */}
			<ul className={`${styles.StartBar} col`}>
				{/* Logo */}
				<li className={`${styles.Logo}`}>
					<Link to="/" className="flex a-i-c">
						<HeaderLogo />
					</Link>
				</li>
				<li className={`${styles.Version}`}>
					<span>v{packageJSON.version}</span>
				</li>
			</ul>
		</>
	)
}
