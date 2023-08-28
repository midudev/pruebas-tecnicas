
// https://github.com/withastro/astro/blob/main/packages/astro/src/transitions/index.ts
// https://github.com/withastro/astro/blob/main/packages/astro/components/viewtransitions.css

const KEY_FRAMES = {

    MOVE_TO_LEFT: 'Slide-To-Left',
    MOVE_TO_RIGHT: 'Slide-To-Right',
    MOVE_FROM_LEFT: 'Slide-From-Left',
    MOVE_FROM_RIGHT: 'Slide-From-Right',
	FADE_IN: 'Fade-In',
	FADE_OUT: 'Fade-Out'
}


export function customSlide({duration = 300} = {}){

	const defaultDelay = 300;

    return {

        // Navegar - Hacer click en un enlace
        forwards: {

			old: [
				{
					name: KEY_FRAMES.MOVE_TO_RIGHT,
					duration: `${duration}ms`,
					delay: `${defaultDelay}ms`,
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
					fillMode: 'both',
				},
			],

			new: [
				{
					name: KEY_FRAMES.FADE_IN,
					duration: '100ms',
					easing: 'cubic-bezier(0, 0, 0.2, 1)',
					fillMode: 'both',
				},
				{
					name: KEY_FRAMES.MOVE_FROM_LEFT,
					duration: `${duration}ms`,
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    delay: `${defaultDelay + duration}ms`,
					fillMode: 'both',
				},
			],
		},

        // Atras - Regresar a la pagina anterior con el boton del navegador
		backwards: {

			old: [
				{
					name: KEY_FRAMES.MOVE_TO_LEFT,
					duration: `${duration}ms`,
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
					delay: `${defaultDelay}ms`,
					fillMode: 'both',
				},
			],

			new: [
				{
					name: KEY_FRAMES.FADE_IN,
					duration: '100ms',
					easing: 'cubic-bezier(0, 0, 0.2, 1)',
					fillMode: 'both',
				},
				{
					name: KEY_FRAMES.MOVE_FROM_RIGHT,
					duration: `${duration}ms`,
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    delay: `${defaultDelay + duration}ms`,
					fillMode: 'both',
				},
			],
		},
    }
}