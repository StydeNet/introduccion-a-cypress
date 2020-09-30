import { rest } from "msw";

import signup from "./signup";

export const handlers = [rest.post("/signup", signup)];
