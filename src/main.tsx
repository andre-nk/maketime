import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./pages/App";
import { Helmet } from "react-helmet";
import { Auth0Provider } from "@auth0/auth0-react";
import { ListDialogProvider } from "./context/ListDialogContext";

//? Main Helmet and can be altered by each child down the root
ReactDOM.render(
  <Auth0Provider
    domain="dev-hy6kclet.us.auth0.com"
    clientId="epQsIMv5fMxbhm7HM165Qc49UIt4PtUe"
    //? For redirect after login or logout
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <ListDialogProvider>
        <Helmet>
          <title>MakeTime Toolbox</title>
          <meta name="description" content="test on react-helmet" />
          <link
            rel="make-time favicon"
            href="../assets/favicon.ico"
            type="image/x-icon"
          />
        </Helmet>
        <App />
      </ListDialogProvider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);
