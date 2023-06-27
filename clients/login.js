import { authorize, refresh, revoke } from "react-native-app-auth";

const config = {
  issuer: "https://accounts.google.com",
  clientId:
    "751146957624-b0m659l5gpf9m257v0qg2234slj90ovk.apps.googleusercontent.com",
  redirectUrl: "com.larilw.fitnessapp/oauth2redirect&",
  scopes: ["openid", "profile", "email"],
  serviceConfiguration: {
    authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    tokenEndpoint: "https://oauth2.googleapis.com/token",
    revocationEndpoint: "https://oauth2.googleapis.com/revoke",
  },
};

export const authenticate = async () => {
  try {
    const result = await authorize(config);

    // O resultado conterá o token de acesso e outras informações do usuário

    console.log("Token de acesso:", result.accessToken);
    console.log("ID do usuário:", result.user.id);
    console.log("Email do usuário:", result.user.email);
  } catch (error) {
    console.log("Erro de autenticação:", error);
  }
};
