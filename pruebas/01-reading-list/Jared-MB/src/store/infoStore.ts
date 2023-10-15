import { create } from 'zustand'

interface Coords {
	x: number,
	y: number
}

interface InfoState {
	showInfo: boolean,
	message: string,
	coords: Coords,
	setCoords: (coords: Coords) => void,
	setShowInfo: (showInfo: boolean) => void,
	setMessage: (msg: string) => void
}

export const useInfoState = create<InfoState>()((set) => ({
	showInfo: false,
	message: '',
	coords: { x: 0, y:0 },
	setCoords: (coords) => set(() => {
		return {
			coords,
			showInfo: true
		}
	}),
	setMessage: (msg) => set(() => ({message:msg })),
	setShowInfo: (showInfo) => set(() => ({ showInfo }))
}))