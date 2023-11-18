export async function getReviews(ISBN, pageNumber) {
    try {
        const peticion = await fetch("/api/review/getReviewOfBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ISBN, pageNumber }),
        });

        const { data } = await peticion.json();

        return data;
    } catch (error) {
        return null
    }
}