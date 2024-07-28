import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

export default function NotFoundPage(): JSX.Element {
	return (
		<>
			<div className={styles.NotFoundPage}>
				<h1 className={styles.Title}>404</h1>
				<h3 className={styles.SubTitle}>Page not found</h3>
				<article className={styles.Article}>
					please return to home page {''}
					<Link to="/" className={styles.Link}>
						home page
					</Link>
				</article>
			</div>
		</>
	)
}
