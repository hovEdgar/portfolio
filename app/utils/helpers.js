export function placeZerosAtStart(number) {
	if (!number || number < 10) {
		return '00';
	} else if (number < 100) {
		return '0';
	}

	return '';
}