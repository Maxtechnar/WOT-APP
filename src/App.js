import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Cards from "./components/Body";



const App = () => {
    return (
        <div>
            <Header />
            <Cards />
        </div>
    )
}

export default App;