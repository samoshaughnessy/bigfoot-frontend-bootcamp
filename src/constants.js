/*
 * Store BACKEND_URL as a constant so we can define it in 1 place.
 * We will need to dynamically set BACKEND_URL based on the value
 * of process.env.NODE_ENV when we wish to deploy to production.
 */
export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://powerful-caverns-02560.herokuapp.com"
    : "http://localhost:3000";
