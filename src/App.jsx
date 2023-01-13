import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div>
            <div><Toaster/></div>
            <Home />
        </div>
    );
};

export default App;
