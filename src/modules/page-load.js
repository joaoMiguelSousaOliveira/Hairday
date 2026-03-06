import { schedulesDay } from "./schedules/load.js";

// Assim que carrega a página, aciona o evento
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM está pronto");
  schedulesDay();
});
