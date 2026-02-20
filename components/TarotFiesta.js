"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // ← esto faltaba

export default function TarotFiesta() {
  const [carta, setCarta] = useState("");

  const predicciones = [
    "🃏 La Templanza: Decís que tomás poco... y a las 2 AM estás cantando a los gritos.",
    "🃏 El Loco: Sos el primero en llegar y el último en irse. Siempre.",
    "🃏 El Ermitaño: Aparecés, comés tres empanadas y desaparecés sin avisar.",
    "🃏 La Estrella: Vas a salir increíble en todas las fotos. Esta es tu noche.",
    "🃏 La Rueda de la Fortuna: Mezclás todo lo que hay en la mesa. Suerte, campeón.",
    "🃏 El Mago: La bandeja de empanadas desaparece cada vez que estás cerca. Coincidencia.",
  ];

  const sacarCarta = () => {
    setCarta("Mezclando el mazo...");
    setTimeout(() => {
      setCarta(predicciones[Math.floor(Math.random() * predicciones.length)]);
    }, 800);
  };

  return (
    <div
      className="w-full p-8 rounded-2xl text-center flex flex-col gap-6"
      style={{ background: "#0D0D0F", border: "2px solid #F20F62" }}
    >
      <div>
        <h3 className="text-2xl font-black" style={{ color: "#F2C879" }}>
          El Oráculo del Escabio
        </h3>
        <p className="text-base mt-2" style={{ color: "#F2B988" }}>
          ¿Qué te espera la noche del 25? El mazo no miente.
        </p>
      </div>

      <motion.button
        onClick={sacarCarta}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="self-center"
        style={{
          background: "#F20F62",
          color: "#F2C879",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 900,
          fontSize: "13px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "14px 32px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#F2C879";
          e.currentTarget.style.color = "#F20F62";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#F20F62";
          e.currentTarget.style.color = "#F2C879";
        }}
      >
        Tirar las Cartas
      </motion.button>

      {carta && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-xl text-lg font-semibold leading-relaxed"
          style={{
            background: "#1A1A1A",
            border: "1px solid #F2C87950",
            color: "#F2C879",
          }}
        >
          {carta}
        </motion.div>
      )}
    </div>
  );
}