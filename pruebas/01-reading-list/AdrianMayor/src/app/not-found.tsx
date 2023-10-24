import { Cases } from "@/components/PrimaryButton/PrimaryButton";
import DefaultHeaderLayout from "@/layouts/DefaultHeaderLayout/DefaultLayout";
import EventPageLayout from "@/layouts/EventPageLayout/EventPageLayout";

const NotFound = () => {
	return (
		<DefaultHeaderLayout>
			<EventPageLayout type={Cases.NOT_FOUND} />
		</DefaultHeaderLayout>
	);
};
export default NotFound;
