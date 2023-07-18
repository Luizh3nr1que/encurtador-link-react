import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Error from "./pages/error";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;