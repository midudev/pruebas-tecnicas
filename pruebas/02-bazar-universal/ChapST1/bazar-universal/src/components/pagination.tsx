import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { createPagination } from "@/lib/utils/create-pagination";

export function ProductsPagination({
	currentPage,
	totalPages,
	query,
}: { currentPage: number; totalPages: number; query: string }) {
	const paginationInfo = createPagination(Number(currentPage), totalPages);
	const hrefPrev = currentPage - 1 === 0 ? 1 : currentPage - 1;
	const hrefNext = currentPage + 1 > totalPages ? currentPage : currentPage + 1;

	return (
		<Pagination className="mt-4 fixed bottom-0 left-0 w-full md:bottom-6 md:left-[50%] md:translate-x-[-50%] md:w-[max-content] md:rounded-lg p-2 bg-background/85 backdrop-blur-md">
			<PaginationContent>
				<PaginationPrevious
					href={{ query: { search: query, page: hrefPrev } }}
				/>
				{paginationInfo.map((item) => {
					if (item === 0) {
						return null;
					}
					if (item === "...") {
						return <PaginationEllipsis key={item} />;
					}
					return (
						<>
							{item === currentPage ? (
								<PaginationLink href="#" isActive>
									{item}
								</PaginationLink>
							) : (
								<PaginationLink href={{ query: { search: query, page: item } }}>
									{item}
								</PaginationLink>
							)}
						</>
					);
				})}
				<PaginationNext href={{ query: { search: query, page: hrefNext } }} />
			</PaginationContent>
		</Pagination>
	);
}
