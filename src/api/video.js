import axios from "axios";

//http://localhost:8080/api/            <- 얘를 base url 지정 가능
const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getCategories = async () => {
  return await instance.get("category");
};
