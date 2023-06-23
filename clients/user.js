const axios = require("axios");

const baseUrl = "https://localhost:3000";

// Função para obter um usuário pelo ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/usuario/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o usuário:", error);
    throw error;
  }
};

// Função para criar um novo usuário
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o usuário:", error);
    throw error;
  }
};

// Função para atualizar um usuário existente
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar o usuário:", error);
    throw error;
  }
};

// Função para excluir um usuário
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir o usuário:", error);
    throw error;
  }
};
