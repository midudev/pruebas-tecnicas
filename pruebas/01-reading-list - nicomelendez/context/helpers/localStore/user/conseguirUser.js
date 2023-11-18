export function conseguirUser() {
    const userDataString = localStorage.getItem("userData");
    const data = JSON.parse(userDataString);
    return data;
}