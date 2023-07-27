export async function register(username, clave){
    try {
        const peticion = await fetch("/api/user/createUser", {
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