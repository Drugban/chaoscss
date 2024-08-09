import { Link } from 'react-router-dom'
import { SrOnly } from '../SrOnly/SrOnly'
import styles from './Version.module.scss'

const optionsData = [{ value: 'v1.1.0', to: '/blog/v1.1.0' }]

export const Version = () => {
	return (
		<>
			<div>
				<form>
					<label>
						<SrOnly>Chaos Css version</SrOnly>
						<select className={styles.Select}>
							{optionsData.map((item, idx) => {
								return (
									<option key={idx} value={item.value}>
										<Link to={item.to}>{item.value}</Link>
									</option>
								)
							})}
						</select>
					</label>
				</form>
			</div>
		</>
	)
}
