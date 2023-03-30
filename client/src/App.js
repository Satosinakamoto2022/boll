import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter'

function App() {
  return (
    <BrowserRouter>
        <AppRouter />
        <div>bdeh</div>
    </BrowserRouter>
  );
}

export default App;
