const DEFAULT_API_BASE_URL = "http://localhost:5000/api";

const getBaseUrl = () => {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
  return configuredBaseUrl || DEFAULT_API_BASE_URL;
};

const buildUrl = (path: string) => {
  const baseUrl = getBaseUrl().replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
};

export class ApiError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = buildUrl(path);

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
  });

  const responseText = await response.text();
  let responseBody: unknown;
  try {
    responseBody = responseText ? JSON.parse(responseText) : undefined;
  } catch {
    responseBody = undefined;
  }

  if (!response.ok) {
    const errorBody = responseBody && typeof responseBody === "object"
      ? responseBody as { error?: unknown; message?: unknown }
      : undefined;
    const errorMessage =
      (typeof errorBody?.error === "string" && errorBody.error) ||
      (typeof errorBody?.message === "string" && errorBody.message) ||
      `Request failed with status ${response.status}`;

    throw new ApiError(errorMessage, response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  if (!responseText) {
    return undefined as T;
  }

  if (responseBody === undefined) {
    throw new Error("The server returned an invalid response.");
  }

  return responseBody as T;
}

export const api = {
  get: <T>(path: string, init?: RequestInit) => request<T>(path, { ...init, method: "GET" }),
  post: <T>(path: string, body: unknown, init?: RequestInit) =>
    request<T>(path, {
      ...init,
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: <T>(path: string, body: unknown, init?: RequestInit) =>
    request<T>(path, {
      ...init,
      method: "PUT",
      body: JSON.stringify(body),
    }),
  patch: <T>(path: string, body: unknown, init?: RequestInit) =>
    request<T>(path, {
      ...init,
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  del: <T>(path: string, init?: RequestInit) => request<T>(path, { ...init, method: "DELETE" }),
};

export const API_BASE_URL = getBaseUrl();
