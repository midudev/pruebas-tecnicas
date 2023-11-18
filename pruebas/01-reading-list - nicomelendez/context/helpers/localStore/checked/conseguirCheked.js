export function conseguirCheked() {
    const chekedString = localStorage.getItem("cheked");
    const cheked = JSON.parse(chekedString);
    return cheked;
}