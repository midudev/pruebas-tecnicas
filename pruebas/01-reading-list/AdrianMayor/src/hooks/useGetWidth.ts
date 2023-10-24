"use client";

import { useEffect, useState } from "react";

const useGetWidth = () => {
	const [width, setWidth] = useState<number | null>(null);

	const updateDimensions = () => {
		setWidth([window.innerWidth][0]);
	};

	useEffect(() => {
		setWidth([window.innerWidth][0]);
		window.addEventListener("resize", updateDimensions);

		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return { width };
};

export default useGetWidth;
