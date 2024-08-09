import { FC } from 'react'
import styles from './NavModal.module.scss'
import { Close } from 'assets/svg'
export const NavModal: FC<{ isOpen: boolean; setIsOpen: unknown }> = (
	isOpen,
	setIsOpen
) => {
	return (
		isOpen && (
			<div className={styles.NavModal}>
				<div className={styles.NavModalContainer}>
					<header className={styles.NavModalHeader}>
						<button onMouseDown={() => setIsOpen(false)}>
							<Close />
						</button>
					</header>
					<div className={styles.NavModalContent}></div>
					<footer className={styles.NavModalFooter}></footer>
				</div>
			</div>
		)
	)
}
