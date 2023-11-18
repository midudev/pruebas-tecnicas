export async function addReview(id, user, rating, description, ISBN) {
    try {
        const peticion = await fetch("/api/review/createReview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, user, rating, description, ISBN }),
        });

        const { data } = await peticion.json();
     
        return data;
    } catch (error) {
        return null
    }
}