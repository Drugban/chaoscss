import { FC } from 'react'
import styles from './MastHead.module.scss'
import { Button, CodeSnippetBtn } from 'components/ui'

export const MastHead: FC = () => {
	return (
		<>
			<div className={styles.MastHead}>
				<h1 className={styles.Title}>
					Easily create beautiful, modern websites using only HTML classes.
				</h1>
				<p className={styles.Description}>Сss-framework is focused on short, simple and fast work with css.</p>
				<div className={styles.BtnGroup}>
					<CodeSnippetBtn lang='sh'>chaoscss</CodeSnippetBtn>
					<Button variant='outline'>Get started</Button>
				</div>
			</div>
		</>
	)
}
