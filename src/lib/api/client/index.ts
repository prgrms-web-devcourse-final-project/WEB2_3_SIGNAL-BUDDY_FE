import axios from "axios";

const client = axios.create();
client.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "localhost:3000";

export default client;
