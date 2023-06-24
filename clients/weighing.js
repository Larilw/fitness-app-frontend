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
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      return error;
    });
};
