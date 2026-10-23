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