import { FC, memo } from 'react'
import styles from './Footer.module.scss'
import { Logo } from 'assets/svg'
import packageJSON from 'components/../../package.json'

export const Footer: FC = memo(function () {
	return (
		<>
			<footer className={styles.Footer}>
				<div className="container-xl">
					<div className={styles.FooterTop}>
						<Logo width={54} height={54} />
						<h3>ChaosCss</h3>
					</div>
					<div className={styles.FooterContent}>
						<p className="flex flex-column md_flex-row">
							<p>Created by Drugban. </p>
							<p>
								<a
									href="https://github.com/ChaosLib/chaoscss/LICENSE"
									target="_blank"
								>
									MIT
								</a>{' '}
								license, docs{' '}
								<a href="https://creativecommons.org/licenses/by/3.0/">
									CC BY 3.0
								</a>
								.
							</p>
						</p>
						<p>Currently v{packageJSON.version}</p>
					</div>
				</div>
			</footer>
		</>
	)
})
