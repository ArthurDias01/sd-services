import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Same-origin: auth runs at /api/auth in this app
});
