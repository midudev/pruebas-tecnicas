export async function getRating(ISBN) {
    try {
        const peticion = await fetch("/api/book/rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ISBN }),
        });

        const { averageRating } = await peticion.json();

        return averageRating;
    } catch (error) {
        return null
    }
}