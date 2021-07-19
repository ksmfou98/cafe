import axios from "axios";

const client = axios.create({
  withCredentials: true,
});
client.defaults.baseURL = "http://localhost:4000/api/v1";

export default client;