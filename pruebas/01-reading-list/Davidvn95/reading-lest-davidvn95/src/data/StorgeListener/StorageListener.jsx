import { store } from "../../redux/store";
import { syncsTabs } from "../../redux/booksSlice";
import { useEffect } from "react";

export default function StorageListener() {
    const handleStorageChange = (event) => {
        if (event.key === "isReading") {
            const newEstado = JSON.parse(event.newValue);
            store.dispatch(syncsTabs({ key: "isReading", value: newEstado }));
        } else if (event.key === "show") {
            const newEstado = JSON.parse(event.newValue);
            store.dispatch(syncsTabs({ key: "show", value: newEstado }));
        }
    };

    useEffect(() => {
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return null;
}
