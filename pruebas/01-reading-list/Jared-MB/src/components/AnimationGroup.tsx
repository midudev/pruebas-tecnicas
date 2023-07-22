import { AnimatePresence, LayoutGroup } from "framer-motion"

export default function AnimationGroup({ children }: { children: React.ReactNode[] | React.ReactNode }) {
	return (
		<LayoutGroup>
			<AnimatePresence>
				{children}
			</AnimatePresence>
		</LayoutGroup>
	)
}