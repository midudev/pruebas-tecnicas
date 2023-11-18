export async function login(username, clave) {
    try {
        const peticion = await fetch("/api/user/loginUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, clave }),
        });

        const { data } = await peticion.json();
        return data;
    } catch (error) {
        return null
    }
}