import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-7z3n.onrender.com"
});