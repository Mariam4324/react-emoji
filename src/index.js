//главный файл js//
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

//тот самый див в котороый все будет рендерится//
const root = ReactDOM.createRoot(document.getElementById("root"));
//компонент эпп, паскаль кейс, возвращают разметку//
root.render(<App />);
