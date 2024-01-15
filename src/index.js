import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeContainer from "./components/ThemeContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeContainer />
    </StyledEngineProvider>
  </React.StrictMode>
);

reportWebVitals();
