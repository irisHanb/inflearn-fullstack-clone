"use server";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next/server";
import { API_URL, AUTH_COOKIE_NAME } from "@/src/conts";

async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {},
  token?: string
) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  } as Record<string, string>;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers,
    cache: "no-store",
  };

  if (options.body && typeof options.body !== "string") {
    config.body = JSON.stringify(options.body);
  }

  const tgUrl = `${API_URL}${endpoint}`;
  console.log(tgUrl);
  const response = await fetch(`${tgUrl}`, config);
  console.log("//", response);

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }
  if (response.status === 204) {
    return {} as T;
  }

  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    return response.json() as Promise<T>;
  } else {
    return response.text() as Promise<T>;
  }
}

export async function getUserTest(token?: string) {
  if (!token && typeof window === "undefined") {
    token = await getCookie(AUTH_COOKIE_NAME, { cookies });
  }

  return fetchApi<string>("/user-test", {}, token);
}
