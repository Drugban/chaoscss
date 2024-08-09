import {
	createContext,
	FC,
	JSXElementConstructor,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'
import styles from './Search.module.scss'
import { Algolia, SearchIcon } from 'assets/svg'
import { Link } from 'react-router-dom'
import { ChildrenType, ClassNameType } from 'types/global'
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch'
import algoliasearch from 'algoliasearch'
import { ArrowDownUp, ArrowEnter } from 'assets/svg'
import { createPortal } from 'react-dom'

const APP_ID = 'PTP56G7JFH'
const API_KEY = '39fc4eb8ade00bd498ad5f134c26ac0d'
const INDEX_NAME = 'ChaosCss'
const searchClient = algoliasearch(APP_ID, API_KEY)

const SearchModalCommandsData = [
	{ id: 1, command: <ArrowEnter />, name: 'to select' },
	{ id: 2, command: <ArrowDownUp />, name: 'to navigate' },
	{ id: 3, command: 'esc', name: 'to close' }
]

const Hit:
	| JSXElementConstructor<{ hit: { url: string; label: string } }>
	| undefined = ({ hit }) => {
	return (
		<Link to={hit.url} role="option">
			{hit.label}
		</Link>
	)
}

type SearchContextProps = {
	onOpen: () => void
	onClose: () => void
	onInput: () => void
	isOpen: boolean
}

const SearchContext = createContext<SearchContextProps>({
	onOpen: function (): void {
		throw new Error('Function not implemented.')
	},
	onClose: function (): void {
		throw new Error('Function not implemented.')
	},
	onInput: function (): void {
		throw new Error('Function not implemented.')
	},
	isOpen: false
})

export const SearchProvider: FC<ClassNameType & ChildrenType> = ({
	className,
	children
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const DocsSearchModalRef = useRef<HTMLDivElement>(null)

	const onOpen = useCallback(() => {
		setIsOpen(true)
	}, [setIsOpen])

	const onClose = useCallback(() => {
		setIsOpen(false)
	}, [setIsOpen])

	const onInput = useCallback(() => {
		setIsOpen(true)
	}, [setIsOpen])

	return (
		<>
			<SearchContext.Provider value={{ onOpen, onClose, onInput, isOpen }}>
				{children}
			</SearchContext.Provider>

			{isOpen &&
				createPortal(
					<div
						className={`${styles.DocsSearch} ${className}`}
						role="button"
						ref={DocsSearchModalRef}
						onMouseDown={event => {
							if (event.target === DocsSearchModalRef.current) onClose()
						}}
					>
						<div className={styles.DocsSearchContainer}>
							<InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
								<header className={styles.DocsSearchBar}>
									<SearchBox defaultValue={''} placeholder="Search Docs" />
								</header>
								<div className={styles.DocsSearchContent}>
									<Hits hitComponent={Hit} />
								</div>
							</InstantSearch>
							<footer className={styles.DocsSearchFooter}>
								<ul className={styles.SearchModalCommands}>
									{SearchModalCommandsData.map(item => (
										<li key={item.id}>
											<kbd>{item.command}</kbd>
											<span>{item.name}</span>
										</li>
									))}
								</ul>
								<a
									href="https://www.algolia.com/developers/?utm_source=getbootstrap.com&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"
									target="_blank"
									className={styles.SearchBy}
								>
									Search by <Algolia />
								</a>
							</footer>
						</div>
					</div>,
					document.body
				)}
		</>
	)
}

export const SearchButton: FC = () => {
	const { onOpen, onClose, isOpen } = useContext(SearchContext)

	useEffect(() => {
		function onkeydown(e: {
			preventDefault(): unknown
			ctrlKey: unknown
			metaKey: unknown
			keyCode: number
			key: string
		}) {
			if (e.key === 'Escape') {
				onClose()
			}

			if (
				(e.keyCode === 27 && isOpen) ||
				(e.key?.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) ||
				// The `/` shortcut opens but doesn't close the modal because it's
				// a character.
				(e.key === '/' && !isOpen) ||
				e.key?.toLowerCase() === 'л'
			) {
				e.preventDefault()
				onOpen()
			}
		}
		window.addEventListener('keydown', onkeydown)
		return () => window.removeEventListener('keydown', onkeydown)
	}, [isOpen, onClose, onOpen])

	return (
		<>
			<button
				type="button"
				aria-label="Search"
				className={styles.DocsSearchButton}
				onClick={() => {
					onOpen()
				}}
			>
				<span className={styles.DocsSearchButtonContainer}>
					<SearchIcon />
					<span className={styles.DocsSearchButtonPlaceholder}>
						Search the docs
					</span>
				</span>
				<span className={styles.DocsSearchButtonKeys}>
					<kbd className={styles.DocsSearchButtonKey}>ctrl</kbd>
					<kbd className={styles.DocsSearchButtonKey}>k</kbd>
				</span>
			</button>
		</>
	)
}
