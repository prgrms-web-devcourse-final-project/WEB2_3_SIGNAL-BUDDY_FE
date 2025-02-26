import client from "../lib/api/client";
import server from "../lib/api/server";

export const login = async (body: { id: string; password: string }) => {
  return await server.post("/api/auth/login", body);
};

export const join = async (body: FormData) => {
  return await client.post("/api/members/join", body, {});
};

export const refresh = async () => {
  return await client.post(
    "/api/auth/reissue",
    {},
    {
      headers: {
        Cookie:
          "refresh-token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzQwNTQxNTA2LCJleHAiOjE3NDExNDYzMDZ9.QYblAp9WGtKHz1DXrqJ2soGl611OZ-ICMaNkuWQJd2uGiPqC1IKldoIGr-qhMKCWl8FlQy3Iqg93h2ZVFX0gOw; Path=/; Max-Age=604800; Expires=Wed, 05 Mar 2025 03:45:06 GMT; Secure; HttpOnly; SameSite=Strict",
      },
    },
  );
};
