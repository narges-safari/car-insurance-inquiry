import axios from "axios";
import * as apiServer from "./apiConfig.js";

export const server = () =>
  axios.create({
    baseURL: `${apiServer.PROTOCOL}://${apiServer.BASE}/core/data`,
    headers: { Accept: "application/json" },
  });

export default server;
