import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import useThemeDetector from '@/hooks/useThemeDetector'

export default function ModeToggle() {
	const isDarkTheme = useThemeDetector()

	const [isUsingDeviceMode, setIsUsingDeviceMode] = useState(
		() => !('theme' in localStorage)
	)

	function setDarkMode() {
		localStorage.theme = 'dark'
		document.documentElement.classList.add('dark')
		setIsUsingDeviceMode(false)
	}

	function setLightMode() {
		localStorage.theme = 'light'
		document.documentElement.classList.remove('dark')
		setIsUsingDeviceMode(false)
	}

	function setModeByDevice() {
		localStorage.removeItem('theme')
		setIsUsingDeviceMode(true)
	}

	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])

	useEffect(() => {
		if (!isUsingDeviceMode) return

		if (isDarkTheme) {
			document.documentElement.classList.add('dark')
			return
		}

		if (!isDarkTheme) {
			document.documentElement.classList.remove('dark')
		}
	}, [isUsingDeviceMode, isDarkTheme])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setLightMode()}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setDarkMode()}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setModeByDevice()}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
