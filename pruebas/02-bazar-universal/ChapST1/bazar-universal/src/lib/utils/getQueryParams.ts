interface Props {
	url: string;
}

export function getQueryParams({ url: currentUrl }: Props) {
	const url = new URL(currentUrl);
	const params = new URLSearchParams(url.searchParams);

	return params;
}
