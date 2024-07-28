import { FC } from 'react'
import styles from './MastHead.module.scss'
import { GitHub } from 'assets/svg'
import { DefaultBtn, CodeSnippetBtn } from 'components/ui'
import { CustomBtn } from 'components/ui/Btns/CustomBtn/CustomBtn'

export const MastHead: FC = () => {
	return (
		<>
			<div className={styles.MastHead}>
				<div className="container-xl">
					<h1 className={`${styles.Title} md_col-6`}>
						Start creating your websites with ChaosCss.
					</h1>
					<p className="md_col-6">
						ChaosCSS - is a free and simple open source CSS library.
					</p>
					<div className={styles.BtnGroup}>
						<CodeSnippetBtn>chaoscss</CodeSnippetBtn>
						<DefaultBtn to="docs">Read the docs</DefaultBtn>
						<CustomBtn variant="github">
							<GitHub />
							GitHub
						</CustomBtn>
					</div>
				</div>
			</div>
		</>
	)
}
