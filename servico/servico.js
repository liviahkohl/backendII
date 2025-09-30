import personagens_HP from "../dados/dados.js";

export const buscarPer = () => {
    return personagens_HP
}

export const buscarPerPorNome = (nomePer) => {
    return personagens_HP.filter(per => per.nome.toLowerCase().includes(nomePer.toLowerCase()))
}

export const buscarPerPorId = (id) => {
    const idPer = parseInt(id);
    return personagens_HP.find(per => per.id === idPer);
}