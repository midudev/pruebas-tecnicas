export function conseguirEfecto() {
    const efectoString = localStorage.getItem("efecto");
    const efecto = JSON.parse(efectoString);
    return efecto;
}