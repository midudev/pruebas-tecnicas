"use client";

import { Cases } from "@/components/PrimaryButton/PrimaryButton";
import DefaultHeaderLayout from "@/layouts/DefaultHeaderLayout/DefaultLayout";
import EventPageLayout from "@/layouts/EventPageLayout/EventPageLayout";

interface ErrorPageProps {
	error: Error;
	reset: () => void;
}

const errorPage = ({ error }: ErrorPageProps) => {
	console.error(error);
	return (
		<DefaultHeaderLayout>
			<EventPageLayout type={Cases.ERROR} />
		</DefaultHeaderLayout>
	);
};

export default errorPage;
