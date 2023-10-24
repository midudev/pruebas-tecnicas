import AboutPageLayout from "@/layouts/AboutPageLayout/AboutPageLayout";
import DefaultHeaderLayout from "@/layouts/DefaultHeaderLayout/DefaultLayout";

const booksPage = async () => {
	return (
		<DefaultHeaderLayout>
			<AboutPageLayout />
		</DefaultHeaderLayout>
	);
};

export default booksPage;
