import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {Square} from "../features/square/Square.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/square",
        element: <Square />
    },
]);

export default router;
