import axios from "axios";
import useChallengeContext from "../hooks/useChallengeContext";

const baseURL = "http://192.168.1.26:3000/";

const api = axios.create({
  baseURL,
});
// Função para obter todos os desafios pelo ID
export const getChallengesByUserId = (userId) => {
  return api
    .get(`desafios/usuario/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

// Função para criar desafio
export const postChallenge = (
  dataInicio,
  dataFinal,
  titulo,
  descricao,
  meta,
  idUsuario
) => {
  const data = {
    dataInicio: dataInicio,
    dataFinal: dataFinal,
    titulo: titulo,
    descricao: descricao,
    meta: meta,
    idUsuario: idUsuario,
  };
  return api
    .post(`criarDesafio/`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

// Função para obter todos os desafios pelo ID
export const deleteChallengeById = (challengeId) => {
  return api
    .delete(`deletarDesafio/` + challengeId)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
