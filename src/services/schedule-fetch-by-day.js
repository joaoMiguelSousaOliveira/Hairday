import dayjs from "dayjs";
import { apiConfig } from "./api-config";

// Método que busca os agendamentos na API
export async function scheduleFetchByDay({ day }) {
  try {
    // Faz requsição de Busca na API
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // converte requisição para json
    const data = await response.json();

    // Filtra os agendamento do dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(schedule.when).isSame(day, "day"),
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os agendamento do dia selecionado");
  }
}
