"use client";

import Link from "next/link";

import { useId } from "react";
import { useReadingList } from "../hooks/useReadingList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "./Tooltip";

export default function ReadingListBundler() {
	const { readingList } = useReadingList();
	const readingListBundlerId = useId();

	return (
		<div id={readingListBundlerId}>
			<Link
				id={readingListBundlerId}
				data-tooltip-target="tooltip-default"
				href="/reading-list"
				className="flex flex-row items-center"
				title="Lista de lectura"
				>
				<span className="relative inline-block hover:scale-105">
					<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-indigo-800 rounded-full">
						{readingList.length}
					</span>
					<FontAwesomeIcon
						className="mr-2"
						icon={faBookOpenReader}
						size="xl"
					/>
				</span>
			</Link>
		</div>
	);
}
