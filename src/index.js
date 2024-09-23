import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme(); // Create a default theme or customize it as needed

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>,
//   document.getElementById("root")
// );
