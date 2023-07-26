export default class LocalStorageService<T> {
	constructor(key: string) {
		this.key = key;
	}

	getItem(): T | null {
		const data = window.localStorage.getItem(this.key);
		if (!data) return null;

		return JSON.parse(data);
	}

	setItem(data: T): T {
		if (!data) throw new Error('Error: Data param is required');
		window.localStorage.setItem(this.key, JSON.stringify(data));
		return data;
	}
}
