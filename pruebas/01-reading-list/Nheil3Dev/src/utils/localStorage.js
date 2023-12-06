export const modifyLocalStorage = (newState, tokenLS) => {
	window.localStorage.setItem(tokenLS, JSON.stringify(newState))
}

export const readLocalStorage = tokenLS => {
	return JSON.parse(window.localStorage.getItem(tokenLS))
}
