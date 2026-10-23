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


