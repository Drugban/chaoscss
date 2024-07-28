import { FC } from 'react'
import styles from './IsBeginDeveloped.module.scss'
import { Link } from 'react-router-dom'

const IsBeginDeveloped: FC = () => {
	return (
		<>
			<div className={styles.IsBeginDeveloped}>
				<h2>Is begin developed</h2>
				<Link to="/">please return to home page home page</Link>
			</div>
		</>
	)
}
export default IsBeginDeveloped
