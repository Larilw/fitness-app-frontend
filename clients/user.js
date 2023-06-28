import axios from "axios";

const baseURL = "http://192.168.1.26:3000/";

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

// Função para obter o usuário pelo email
export const getUserByEmail = (userEmail) => {
  return api
    .get(`usuarioEmail/${userEmail}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(JSON.stringify(error));
      return error;
    });
};

// Função para obter o usuário pelo email e senha
export const getUserByEmailAndPassword = (userEmail, userPassword) => {
  return api
    .get(`login/${userEmail}/${userPassword}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(JSON.stringify(error));
      return error;
    });
};

// Função para salvar usuário
export const postUser = (
  gender,
  userDate,
  userWeight,
  userHeight,
  userName,
  userEmail,
  userPassword
) => {
  const data = {
    //Arrumar o id
    idFirebase: 12345,
    genero: gender,
    dataNascimento: Number(userDate),
    pesoInicial: Number(userWeight),
    altura: Number(userHeight),
    nome: userName,
    email: userEmail,
    senha: userPassword,
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
