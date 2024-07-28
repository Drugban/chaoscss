import { FC } from 'react'
import { ChildrenType, ClassNameType } from 'types/global'
import styles from './CodeSnippetBtn.module.scss'
import { Copy } from 'assets/svg'
import { useCopy } from 'hooks/useCopy'

export const CodeSnippetBtn: FC<ChildrenType & ClassNameType> = ({
	children,
	className
}) => {
	const HighlightText = `npm i ${children}`
	const copy = useCopy(HighlightText)
	return (
		<>
			<div className={`${styles.CodeSnippet} ${className ? className : ''}`}>
				<pre className={styles.Highlight}>
					<code>
						<span>{HighlightText}</span>
					</code>
				</pre>
				<button onClick={copy} className={styles.Clipboard}>
					<Copy />
				</button>
			</div>
		</>
	)
}
