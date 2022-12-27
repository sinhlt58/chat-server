import axios from "axios";
import { API_BASE_URL } from "../configs";

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/openai`,
});

export const getOpenAIResponse = (text: string) => {
  return axiosInstance.post("/chat", { text });
};
