"use client";

import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string): [T | null, (value: T) => void] => {
	const [state, setState] = useState<T | null>(null);

	useEffect(() => {
		const savedSortBy = localStorage.getItem(key);
		if (savedSortBy) {
			setState(JSON.parse(savedSortBy));
		}
	}, [key]);

	const setter = (value: T) => {
		if (value) {
			const valueStr = JSON.stringify(value);
			localStorage.setItem(key, valueStr);
			setState(value);
		}
	};

	return [state, setter];
};

export default useLocalStorage;
