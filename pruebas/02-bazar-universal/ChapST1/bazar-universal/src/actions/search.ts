"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
	const keyword = formData.get("keyword") || "phone";

	redirect(`/items?search=${keyword}`);
}
