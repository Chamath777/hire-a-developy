import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
// import AppNavbar from "./src/components/Navbar";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorizationb: token ? `Bearer ${token}` : "",
      },
    });
  },

  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <AppNavbar /> */}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="bg-red">
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
