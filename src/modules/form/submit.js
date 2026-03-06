import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual no campo de data
selectedDate.value = inputToday;
// Define a data mínima como a data atual para evitar seleção de datas passadas
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // Previe o compotamento padrão de carregar a página
  event.preventDefault();

  try {
    // Recupera nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      // Return para encerrar a função
      return alert("Por favor, insira o nome do cliente.");
    }

    // Recupera o horário
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Por favor, selecione um horário de atendimento");
    }
    // Recupera somente a hora selecionada - Divide a string do horário selcionado em antes e depois do :
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gere um ID
    const id = new Date().getTime();
    await scheduleNew({
      id,
      name,
      when,
    });
    // Recarregar os agendamentos
    await schedulesDay();

    // Limpa o input de nome do cliente
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  } finally {
    // Limpa o formulário
    clientName.value = "";
    selectedDate.value = inputToday;
  }
};
