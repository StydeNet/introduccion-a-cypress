import { rest } from "msw";

import signup from "./signup";

export const handlers = [rest.post("http://localhost:3000/signup", signup)];
