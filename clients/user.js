import axios from "axios";

const baseURL = "http://10.144.111.200:3000/";

const api = axios.create({
  baseURL,
});
// Função para obter todos o usuário pelo ID de login
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

// Função para salvar usuário
export const postUser = (gender, userDate, userWeight, userHeight) => {
  const data = {
    //Arrumar o id
    idFirebase: 12345,
    genero: gender,
    dataNascimento: Number(userDate),
    pesoInicial: Number(userWeight),
    altura: Number(userHeight),
  };
  return api
    .post(`criarUsuario/`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
