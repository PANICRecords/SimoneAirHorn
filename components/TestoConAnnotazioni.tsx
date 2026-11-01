
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { annotazioni } from "./annotazioniData";

type Annotazione = {
  frase: string;
  codice: keyof typeof annotazioni;
};

type Props = {
  testo: string;
  annotazioni: Annotazione[];
};

export default function TestoConAnnotazioni({
  testo,
  annotazioni: annotazioniBrano,
}: Props) {
  const [annotazioneAttiva, setAnnotazioneAttiva] =
    useState<keyof typeof annotazioni | null>(null);

  const righe = testo.split("\n");

  function renderRiga(riga: string, indice: number) {
    const elementi: ReactNode[] = [];
    let posizioneCorrente = 0;

    const annotazioniRiga = annotazioniBrano
      .map((item) => ({
        ...item,
        posizione: riga.indexOf(item.frase),
      }))
      .filter((item) => item.posizione !== -1)
      .sort((a, b) => a.posizione - b.posizione);

    annotazioniRiga.forEach((item) => {
      if (item.posizione < posizioneCorrente) return;

      elementi.push(
        riga.slice(posizioneCorrente, item.posizione)
      );

      elementi.push(
        <span key={`${indice}-${item.codice}`}>
          {item.frase}
          <button
            type="button"
            aria-label="Mostra significato"
            title="Mostra significato"
            onClick={() => setAnnotazioneAttiva(item.codice)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              border: "none",
              background: "#cfff04",
              color: "#111",
              fontSize: "12px",
              fontWeight: "bold",
              lineHeight: 1,
              cursor: "pointer",
              marginLeft: "7px",
              verticalAlign: "middle",
              padding: 0,
            }}
          >
            i
          </button>
        </span>
      );

      posizioneCorrente = item.posizione + item.frase.length;
    });

    elementi.push(riga.slice(posizioneCorrente));

    return (
      <span key={indice}>
        {elementi}
        {"\n"}
      </span>
    );
  }

  const significato = annotazioneAttiva
    ? annotazioni[annotazioneAttiva].significato
    : null;

  return (
    <>
      <div
        className="body-medium"
        style={{
          whiteSpace: "pre-line",
          marginBottom: "80px",
        }}
      >
        {righe.map((riga, indice) => renderRiga(riga, indice))}
      </div>

      {annotazioneAttiva && (
        <div
          onClick={() => setAnnotazioneAttiva(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "750px",
              background: "#191919",
              borderRadius: "20px 20px 0 0",
              padding: "28px 24px 35px",
              boxSizing: "border-box",
              color: "#fff",
              boxShadow: "0 -5px 30px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  color: "#cfff04",
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                SIGNIFICATO
              </h3>

              <button
                type="button"
                onClick={() => setAnnotazioneAttiva(null)}
                aria-label="Chiudi annotazione"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#aaa",
                  fontSize: "26px",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                ×
              </button>
            </div>

            <p
              style={{
                color: "#ddd",
                fontSize: "16px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {significato}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
