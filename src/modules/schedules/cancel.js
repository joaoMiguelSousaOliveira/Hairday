const periods = document.querySelectorAll(".period");
import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load.js";
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      // Pega o id do agendamento para remover
      const { id } = item.dataset;

      if (id) {
        // Confirma se usário quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar este agendamento?",
        );
        if (isConfirm) {
          // Envia requisição para API para cancelar
          await scheduleCancel({ id });
          // Recarrega a lista
          schedulesDay();
        }
      }
    }
  });
});
