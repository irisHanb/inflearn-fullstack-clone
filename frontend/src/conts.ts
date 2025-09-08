export const AUTH_COOKIE_NAME =
  process.env.NODE_ENV === "production"
    ? "__Seccure-authjs.session-token"
    : "authjs.session-token";

export const API_URL = process.env.API_URL || "http://localhost:8000";
