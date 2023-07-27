export function guardarUser(user) {
    localStorage.setItem("userData", JSON.stringify(user));
}