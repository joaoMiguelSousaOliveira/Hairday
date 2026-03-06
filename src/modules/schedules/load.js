import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Busca na API os agendamentos para carregar do lado direito da tela
  // Busca na API os horários disponiveis (horário futuro + horário não agendado) para carregar do lado esquerdo da tela

  const date = selectedDate.value;

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  // Exibe os agendamentos do dia
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules });
}
