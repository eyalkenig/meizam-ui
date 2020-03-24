export default (position: number): string => {
	if (position >= 10 && position <= 20) {
		return `th`;
	}
	if (position % 10 === 1) {
		return `st`;
	} 
	if (position % 10 === 2) {
		return `nd`;
	}
	if (position % 10 === 3) {
		return `rd`
	}
	
	return `th`;
}
