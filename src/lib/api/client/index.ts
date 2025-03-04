import axios from "axios";
import { getSession } from "next-auth/react";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "localhost:3000",
  withCredentials: true,
});

client.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers["Authorization"] = session.user.token;
  }
  return config;
});

export default client;
