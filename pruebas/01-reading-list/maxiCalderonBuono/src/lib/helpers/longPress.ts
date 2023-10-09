export function longpress(node: HTMLElement) {
	const TIME_MS = 500;
	let timeoutPtr: number;

	function handleMouseDown(e: MouseEvent) {
		window.addEventListener('mousemove', handleMoveBeforeLong);
		timeoutPtr = window.setTimeout(() => {
			window.removeEventListener('mousemove', handleMoveBeforeLong);
			node.dispatchEvent(new CustomEvent('long'));

			window.setTimeout(() => node.dispatchEvent(e), 0);
		}, TIME_MS);
	}
	function handleMoveBeforeLong(e: MouseEvent) {
		window.clearTimeout(timeoutPtr);
		window.removeEventListener('mousemove', handleMoveBeforeLong);
	}
	function handleMouseUp(e: MouseEvent) {
		window.clearTimeout(timeoutPtr);
		window.removeEventListener('mousemove', handleMoveBeforeLong);
	}
	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mouseup', handleMouseUp);
	return {
		destroy: () => {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
}
