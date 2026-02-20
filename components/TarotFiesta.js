// components/TarotFiesta.jsx
"use client";
import { useState } from "react";

export default function TarotFiesta() {
  const [carta, setCarta] = useState("");

  const predicciones = [
    "🃏 La Templanza: Hoy no tomás tanto porque manejás... (o eso decís ahora).",
    "🃏 El Loco: Terminás cantando cumbia a las 5 AM con un vaso de fernet vacío.",
    "🃏 El Ermitaño: A las 2 AM tirás la bomba de humo y te vas a dormir sin saludar.",
    "🃏 La Estrella: Sos el alma de la fiesta. Vas a salir increíble en todas las fotos.",
    "🃏 La Rueda de la Fortuna: Vas a mezclar vino, pernil y pizza... que la suerte te acompañe.",
    "🃏 El Mago: Vas a hacer desaparecer la bandeja de empanadas vos solo/a."
  ];

  const sacarCarta = () => {
    // Hace un pequeño efecto de "cargando" antes de tirar la carta
    setCarta("Mezclando el mazo...");
    setTimeout(() => {
      const random = Math.floor(Math.random() * predicciones.length);
      setCarta(predicciones[random]);
    }, 800);
  };

  return (
    <div className="bg-[#0a0a0a] border-2 border-[#FF00FF] p-6 rounded-none text-center shadow-[8px_8px_0px_#FF69B4] transition-all">
      <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-2">El Oráculo del Escabio</h3>
      <p className="text-slate-400 mb-6 font-[Montserrat]">¿Qué te depara el destino para la noche del 25?</p>
      
      <button 
        onClick={sacarCarta}
        className="bg-[#FF00FF] hover:bg-[#FF69B4] text-black font-[Montserrat] font-bold uppercase tracking-widest py-3 px-6 transition-colors border-2 border-transparent hover:border-white"
      >
        Tirar las Cartas
      </button>

      {carta && (
        <div className="mt-6 p-4 border border-[#FF69B4] bg-black text-[#FF69B4] font-[Space_Mono] text-lg font-bold min-h-[80px] flex items-center justify-center">
          {carta}
        </div>
      )}
    </div>
  );
}