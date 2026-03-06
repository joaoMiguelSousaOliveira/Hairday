import { apiConfig } from "./api-config";
export async function scheduleNew({ id, name, when }) {
  try {
    // Faz requisição para a API para criar um novo agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    alert("Agendamento realizado");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente novamente mais tarde");
  }
}
