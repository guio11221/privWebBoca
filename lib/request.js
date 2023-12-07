import axios from "axios";

const baseUrl = "https://www.bocaweb.com.br/apibocaweb";

export function requestArtes() {
  return fetchData("Artes");
}

export function requestAnimais() {
  return fetchData("Animais");
}

export function requestBandeiras() {
  return fetchData("Bandeiras");
}

export function requestCapasDeLivros() {
  return fetchData("Capas de livros");
}

export function requestEdificacoes() {
  return fetchData("Edificações");
}

export function requestFutebol() {
  return fetchData("Futebol");
}

export function requestInfantil() {
  return fetchData("Infantil");
}

export function requestLogotipos() {
  return fetchData("Logotipos");
}

export function requestPersonagens() {
  return fetchData("Personagens");
}

export function requestPersonagensAnime() {
  return fetchData("Personagens-Anime");
}

export function requestPersonagensFolcloreBrasileiro() {
  return fetchData("Personagens-Folclore Brasileiro");
}

export function requestPersonagensTurmaDaMonica() {
  return fetchData("Personagens-Turma da Mônica");
}

export function requestPersonagensDisney() {
  return fetchData("Personagens-Disney");
}

export async function fetchData(parametro) {
  try {
    const response = await axios.get(`${baseUrl}?nome=${parametro}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter dados para ${parametro}:`, error);
    return [];
  }
}
