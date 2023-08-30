'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

const genres = [
	{
		value: 'Ciencia ficción',
		label: 'Ciencia ficción'
	},
	{
		value: 'zombies',
		label: 'Zombies'
	},
	{
		value: 'fantasía',
		label: 'Fantasía'
	},
	{
		value: 'terror',
		label: 'Terror'
	}
]

export function Combobox({
	setValue,
	value
}: {
	setValue: (value: string) => void
	value: string
}) {
	const [open, setOpen] = React.useState(false)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-[200px] justify-between'
				>
					{value
						? genres.find(genre => genre.value === value)?.label
						: 'Select genre...'}
					<ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandInput placeholder='Search genre...' />
					<CommandEmpty>No genre found.</CommandEmpty>
					<CommandGroup>
						{genres.map(genre => (
							<CommandItem
								key={genre.value}
								onSelect={currentValue => {
									setValue(currentValue === value ? '' : currentValue)
									setOpen(false)
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === genre.value ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{genre.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
