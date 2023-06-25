import axios from "axios";

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
  console.log(dataFinal, dataInicio, titulo, descricao, meta, idUsuario);
  return api
    .post(`criarPesagem`, {
      dataInicio: dataInicio,
      dataFinal: dataFinal,
      titulo: titulo,
      descricao: descricao,
      meta: meta,
      idUsuario: idUsuario,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      return error;
    });
};
