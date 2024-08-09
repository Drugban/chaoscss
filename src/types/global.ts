import { MouseEventHandler, ReactNode } from 'react'

export type ChildrenType = {
	children: ReactNode
}

export type ClassNameType = {
	className?: string
}

export type OnClickType = {
	onClick?: MouseEventHandler
}
