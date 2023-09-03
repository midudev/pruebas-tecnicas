export function obtainParam(name: string): string {
	return new URL(window.location.href).searchParams.get(name) || '';
}
