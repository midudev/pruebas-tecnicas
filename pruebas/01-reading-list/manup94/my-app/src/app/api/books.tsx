async function fetchBooks() {
    try {
        const response = await fetch("/books.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export { fetchBooks }