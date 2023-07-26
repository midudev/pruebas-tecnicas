import { createRoot } from "react-dom/client";
import { App } from "./src/app";
import { Provider } from 'react-redux';
import { store } from "./src/store";

const root = createRoot(document.getElementById("app") as HTMLElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)