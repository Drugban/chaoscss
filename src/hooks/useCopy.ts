export function useCopy(copyValue: string) {
	if (!copyValue) {
		return
	}
	const addToClipboard = () => navigator.clipboard.writeText(copyValue)
	return addToClipboard
}
