import React from "react";
import "./App.css";
import DisplayHook from "./DisplayHook";

const BASE_URL = "http://localhost:7070/";

function App() {
    return (
        <div className="App">
            <DisplayHook header={"Удачный запрос"} url={BASE_URL + "data"} />
            <DisplayHook header={"Ошибка запроса"} url={BASE_URL + "error"} />
            <DisplayHook header={"Загрузка"} url={BASE_URL + "loading"} />
        </div>
    );
}

export default App;
