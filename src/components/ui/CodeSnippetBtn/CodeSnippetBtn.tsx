import { FC } from 'react'
import { ChildrenType, ClassNameType } from 'types/global'
import styles from './CodeSnippetBtn.module.scss'
import { Copy } from 'assets/svg'
import { useCopy } from 'hooks/useCopy'

export const CodeSnippetBtn: FC<
	ChildrenType & ClassNameType & { lang: string }
> = ({ children, className, lang }) => {
	const HighlightText = `npm i ${children}`
	const copy = useCopy(HighlightText)
	return (
		lang == 'sh' && (
			<>
				<div className={`${styles.CodeSnippetSh} ${className ? className : ''}`}>
					<pre className={styles.Highlight}>
						<code>
							<span>{HighlightText}</span>
						</code>
					</pre>
					<button onClick={copy} className={styles.Clipboard}>
						<Copy width={22} height={22} />
					</button>
				</div>
			</>
		)
	)
}
