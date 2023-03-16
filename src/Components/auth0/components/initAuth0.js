import { createAuth0Client } from "@auth0/auth0-spa-js";

export const initAuth0 = async () => {
  const auth0 = await createAuth0Client({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: window.location.origin,
    cacheLocation: "localstorage",
    useRefreshTokens: true,
  });

  // Try to silently renew the user's access token on page load
  try {
    await auth0.getTokenSilently();
  } catch (e) {
    console.error(e);
  }

  return auth0;
};
