import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Snowfall from "react-snowfall";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

interface SnowfallProps {
  speed: [number, number];
  count: number;
  radius: [number, number];
}
root.render(
  <BrowserRouter>
    <App />

    <Snowfall
      {...({
        speed: [0, 0.1],
        count: 45,
        radius: [0, 2],
      } as SnowfallProps)}
    />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
