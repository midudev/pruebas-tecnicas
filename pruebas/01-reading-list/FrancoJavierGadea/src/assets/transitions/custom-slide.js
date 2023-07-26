
// https://github.com/withastro/astro/blob/main/packages/astro/src/transitions/index.ts
// https://github.com/withastro/astro/blob/main/packages/astro/components/viewtransitions.css

const KEY_FRAMES = {

    MOVE_TO_LEFT: 'Slide-To-Left',
    MOVE_TO_RIGHT: 'Slide-To-Right',
    MOVE_FROM_LEFT: 'Slide-From-Left',
    MOVE_FROM_RIGHT: 'Slide-From-Right'
}


export function customSlide({duration = '300ms'} = {}){

    return {

        // Navegar - Hacer click en un enlace
        forwards: {

			old: [
				{
					name: KEY_FRAMES.MOVE_TO_RIGHT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
					fillMode: 'both',
				},
			],

			new: [
				{
					name: KEY_FRAMES.MOVE_FROM_LEFT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    delay: duration ?? '300ms',
					fillMode: 'both',
				},
			],
		},

        // Atras - Regresar a la pagina anterior con el boton del navegador
		backwards: {

			old: [
				{
					name: KEY_FRAMES.MOVE_TO_LEFT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
					fillMode: 'both',
				},
			],

			new: [
				{
					name: KEY_FRAMES.MOVE_FROM_RIGHT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    delay: duration ?? '300ms',
					fillMode: 'both',
				},
			],
		},
    }
}