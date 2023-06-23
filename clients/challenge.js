import axios from "axios";

const baseUrl = "http://192.168.0.120:3000/";

const api = axios.create({
  baseUrl,
});

// Função para obter todos os desafios pelo ID
export const getChallengesByUserId = (userId) => {
  return api
    .get(`desafios/usuario/${userId}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      return error;
    });
};
