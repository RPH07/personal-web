import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoute from "./Routes/HomeRoute";

function App() {
    return (
        <BrowserRouter>
            <div className="App dark:bg-gray-800">
                    <HomeRoute />
            </div>
        </BrowserRouter>
    );
}

export default App;
