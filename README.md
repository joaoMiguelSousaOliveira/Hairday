# HairDay

Aplicação Web com fins didáticos - Agendamento de Barbearia

## 🚀 Estrutura do projeto

```
├─ index.html
├─ package.json
├─ server.json           # banco de dados falso utilizado pelo json-server
├─ webpack.config.js
└─ src/
   ├─ main.js
   ├─ assets/
   ├─ libs/
   │   └─ dayjs.js
   ├─ modules/           # lógica da interface dividida em partes
   │   ├─ page-load.js
   │   ├─ form/
   │   │   ├─ date-change.js
   │   │   ├─ hours-click.js
   │   │   ├─ hours-load.js
   │   │   └─ submit.js
   │   ├─ schedules/
   │   │   ├─ cancel.js
   │   │   ├─ load.js
   │   │   └─ show.js
   ├─ services/          # chamadas à "API"
   │   ├─ api-config.js
   │   ├─ schedule-cancel.js
   │   ├─ schedule-fetch-by-day.js
   │   └─ schedule-new.js
   ├─ styles/            # CSS separados por funcionalidade
   │   ├─ form.css
   │   ├─ global.css
   │   └─ schedule.css
   └─ utils/
       └─ opening-hours.js
```

## ⚙️ Dependências

- dayjs
- json-server (API fake)

Dev‑dependencies para compilação e bundling:

- webpack, babel, loaders, plugins, etc.

## 🛠 Scripts úteis

| Comando          | O que faz                                        |
| ---------------- | ------------------------------------------------ |
| `npm run build`  | Gera o bundle para produção                      |
| `npm run dev`    | Inicia o servidor de desenvolvimento do Webpack  |
| `npm run server` | Levanta o json-server em `http://localhost:3333` |

## 🧩 Configuração rápida

1. Clone/baixe o repositório.
2. Execute `npm install` para baixar dependências.
3. Use `npm run dev` para trabalhar localmente.
4. Em outra aba, rode `npm run server` para a API fake.
5. Acesse `http://localhost:3000` (ou porta configurada pelo dev‑server) para ver a aplicação.

## 📚 Notas

- O banco de dados de exemplo está em `server.json`.
- A arquitetura modular visa facilitar manutenção e testes.
- Para produção, adapte o backend real substituindo o `json-server`.

> 💡 **Dica**: edite `webpack.config.js` ou os estilos conforme necessário para expandir funcionalidades.

---

**Autor:** João Miguel
**Projeto:** Aplicação Web de agendamento para corte de cabelo
**Data:** 6 de março de 2026
