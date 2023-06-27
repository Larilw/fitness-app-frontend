import axios from "axios";

const baseURL = "http://10.144.111.200:3000/";

const api = axios.create({
  baseURL,
});
// Função para salvar pesagem
export const postWeighing = (peso, idUsuario) => {
  let date = new Date().getTime();

  const data = {
    dataPesagem: date,
    peso: Number(peso),
  };
  return api
    .post(`criarPesagem/${idUsuario}/`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

// Função para obter todas as pesagens pelo ID do usuário
export const getWeighingsByUserId = (userId) => {
  return api
    .get(`pesagens/usuario/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

// Função para obter todas as pesagens pelo ID do desafio
export const getWeighingsByChallengeId = (challengeId) => {
  return api
    .get(`pesagens/desafio/${challengeId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
