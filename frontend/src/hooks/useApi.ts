"use client";

import { getCookie } from "cookies-next/client";
import * as api from "@/src/lib/api";
import { AUTH_COOKIE_NAME } from "../conts";

export function useApi() {
  const token = getCookie(AUTH_COOKIE_NAME) as string;
  console.log("token> ", token);

  return {
    getUserTest: () => api.getUserTest(token),
  };
}
