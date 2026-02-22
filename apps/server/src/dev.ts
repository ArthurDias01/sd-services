/**
 * Local development entry: starts the Elysia server on port 3000.
 * On Vercel, the app is used as a serverless handler (see index.ts default export).
 */
import app from "./index";

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
