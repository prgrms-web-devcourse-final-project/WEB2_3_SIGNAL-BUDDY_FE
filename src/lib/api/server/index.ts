import axios from "axios";

const server = axios.create();
server.defaults.baseURL = process.env.API_BASE_URL || "localhost:3000";

export default server;
