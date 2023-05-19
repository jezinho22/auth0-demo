import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-761gasysbckmcq82.us.auth0.com"
			clientId="KvMVcs0Nf07vtRaKUhxy8vfZ8I2pcr5K"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);
