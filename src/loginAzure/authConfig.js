export const msalConfig = {
    auth: {
      clientId: "2ae0b435-c388-4c55-ab59-5c007b67d0c1",
      authority: "https://login.microsoftonline.com/a787267c-0ab8-4ad0-8190-d91f813b330e", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "",
      loginRedirect: "https://ubiquitous-swan-9f89af.netlify.app/home",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };