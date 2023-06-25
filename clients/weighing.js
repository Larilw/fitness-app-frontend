import axios from "axios";

const baseURL = "http://192.168.1.26:3000/";

const api = axios.create({
  baseURL,
});
// Função para salvar pesagem
//Arrumar no back
export const postWeighing = (peso) => {
  let day = new Date().getDate(); //Current Day
  let month = new Date().getMonth() + 1; //Current Month
  let year = new Date().getFullYear(); //Current Year

  let dataPesagem = month + "-" + day + "-" + year;
  console.log(dataPesagem);
  return api
    .post(`criarPesagem`, { dataPesagem: dataPesagem, peso: peso })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
