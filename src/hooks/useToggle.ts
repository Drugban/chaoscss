import { useState } from 'react'

export function useToggle(initialValue: boolean) {
	const [useToggle, setUseToggle] = useState<boolean>(initialValue)
	const toggleUseToggle = () => {
		setUseToggle(!useToggle)
	}
	return [useToggle, toggleUseToggle]
}
