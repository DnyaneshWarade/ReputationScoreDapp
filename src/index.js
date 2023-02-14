import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import {
	LivepeerConfig,
	createReactClient,
	studioProvider,
} from "@livepeer/react";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://api.studio.thegraph.com/query/41978/aave/v0.0.1",
});

const livepeerClient = createReactClient({
	provider: studioProvider({
		apiKey: process.env.REACT_APP_STUDIO_API_KEY,
	}),
});

const theme = {
	colors: {
		accent: "rgb(0, 145, 255)",
		containerBorderColor: "rgba(0, 145, 255, 0.9)",
	},
	fonts: {
		display: "Inter",
	},
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<LivepeerConfig client={livepeerClient} theme={theme}>
				<App />
			</LivepeerConfig>
		</ApolloProvider>
	</React.StrictMode>
);
