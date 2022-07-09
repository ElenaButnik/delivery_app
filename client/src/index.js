import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PersistGate persistor={persistor} loading={null}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </PersistGate>
);

reportWebVitals();
