import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";
const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários
  hours.innerHTML = "";

  // Obtém a lista de horários ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm"),
  );

  console.log(unavailableHours);

  // Intera sobre todos os horários disponíveis
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    // Adicona a hora na data e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    // Verifica se o horário está na lista de horários ocupados
    const available = !unavailableHours.includes(hour) && !isHourPast;
    return {
      hour,
      available,
    };
  });

  // Renzederiza os horários disponíveis
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;

    // Quando hour for 9:00, insere manhã
    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    }
    // Quando for 13:00, insere tarde
    else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    }
    // Quando for 18:00, insere noite
    else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    // Adiciona o horário na lista
    hours.append(li);
  });

  // Adiciona o evento de clique nos horarios disponiveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
