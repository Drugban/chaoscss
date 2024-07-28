import { NavMenu } from 'components/layouts/Header/NavMenu/NavMenu'
import { CloseBtn, ToggleTheme } from 'components/ui'
import { FC } from 'react'
import styles from './NavModal.module.scss'

type NavModalType = {
	setNavModalOpen: React.MouseEventHandler
}

export const NavModal: FC<NavModalType> = ({ setNavModalOpen }) => {
	return (
		<>
			<div className={styles.NavModal}>
				<div className={styles.NavOverlay}>
					<div className={styles.NavModalHeader}>
						<h2>ChaosCss</h2>
						<CloseBtn onClick={setNavModalOpen} />
					</div>
					<NavMenu className={styles.NavModalNavMenu} />
					<div className={styles.NavModalFoot}>
						<ToggleTheme />
						<span>Toggle Theme</span>
					</div>
				</div>
			</div>
		</>
	)
}
