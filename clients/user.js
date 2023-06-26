import axios from "axios";

const baseURL = "http://192.168.1.26:3000/";

const api = axios.create({
  baseURL,
});
// Função para obter todos os desafios pelo ID
export const getUserByLoginId = (userId) => {
  return api
    .get(`usuarioAuth/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
