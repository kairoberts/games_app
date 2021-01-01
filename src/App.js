import React from "react";
import "./style.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route to={["/game/:id", "/"]}>
        <Home />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
