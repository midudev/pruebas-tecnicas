export const storage = {
	persist,
	obtain
};

function persist(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value));
}

function obtain<T>(key: string): T | undefined {
	const rawValue = localStorage.getItem(key);

	if (rawValue === null) {
		return undefined;
	}

	try {
		const value: T = JSON.parse(rawValue);
		return value;
	} catch (e) {
		return undefined;
	}
}
