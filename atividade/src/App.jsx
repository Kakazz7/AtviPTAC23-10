import { useState } from "react";

// EXERCÍCIO 1 — NOTIFICACAO
function Notificacao({ mensagens }) {
  if (mensagens.length === 0) {
    return <p>Nenhuma notificação nova.</p>;
  }
  return (
    <p>
      Você tem {mensagens.length}{" "}
      {mensagens.length === 1
        ? "notificação"
        : "notificações"}.
    </p>
  );
}

// EXERCÍCIO 2 — ROTULO DO STATUS
const statusTraduzidos = {
  pendente: "Pendente",
  enviado: "Enviado",
  entregue: "Entregue",
  cancelado: "Cancelado"
}
function rotuloDoStatus(status) {
  return statusTraduzidos[status] ?? "Status desconhecido";
}

// EXERCÍCIO 3 — LIFTING STATE UP
function BotoesDeTema({ tema, mudarTema }) {
  return (
    <div>
      <h3>Escolha o tema</h3>

      <button onClick={() => mudarTema("claro")}>
        Tema claro
      </button>

      <button onClick={() => mudarTema("escuro")}>
        Tema escuro
      </button>
    </div>
  )
}

function Previa({tema}) {
  const estilo = {
    backgroundColor: tema === "claro" ? "#ffffff" : "#222222",
    color: tema === "claro" ? "#222222" : "#ffffff",
    padding: "20px",
    marginTop: "10px",
    borderRadius: "8px"
  }
  return(
    <div style={estilo}>
      <h3>Prévia do tema</h3>
      <p>O tema atual é {tema}.</p>
    </div>
  )
}

