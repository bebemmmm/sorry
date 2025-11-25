import { createContext } from "react";

// Mock AuthContext for preview
export const AuthContext = createContext({
  account: { username: "Sarah" },
  token: "mock-token-12345"
});
