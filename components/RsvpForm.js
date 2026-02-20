// components/RsvpForm.jsx
"use client";
import { useState } from "react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({ nombre: "", asistencia: true, mensaje: "" });
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) setStatus("success");
      else setStatus("error");
    } catch (error) { setStatus("error"); }
  };

  if (status === "success") {
    return (
      <div className="text-center p-8 bg-[#0a0a0a] border-2 border-[#FF00FF] shadow-[8px_8px_0px_#FF00FF]">
        <p className="text-4xl mb-4">🥂</p>
        <p className="text-[#FF69B4] font-[Montserrat] font-bold text-xl uppercase tracking-widest">¡Confirmación Exitosa!</p>
        <p className="text-white mt-2 font-[Space_Mono]">Nos vemos en la fiesta. No te olvides el hielo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left font-[Montserrat]">
      <div>
        <label className="block text-sm font-bold mb-2 text-[#FF69B4] uppercase tracking-wider">Tu Nombre / Apodo</label>
        <input
          type="text"
          required
          className="w-full bg-black border-2 border-zinc-800 p-3 text-white focus:border-[#FF00FF] focus:outline-none transition-colors rounded-none font-[Space_Mono]"
          placeholder="Ej: Mati"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-2 text-[#FF69B4] uppercase tracking-wider">¿Venís a festejar?</label>
        <select
          className="w-full bg-black border-2 border-zinc-800 p-3 text-white focus:border-[#FF00FF] focus:outline-none transition-colors rounded-none font-[Space_Mono]"
          value={formData.asistencia ? "si" : "no"}
          onChange={(e) => setFormData({ ...formData, asistencia: e.target.value === "si" })}
        >
          <option value="si">¡Obvio que sí! Llevo sed.</option>
          <option value="no">No puedo, lloro en código.</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2 text-[#FF69B4] uppercase tracking-wider">Mensaje (Opcional)</label>
        <textarea
          className="w-full bg-black border-2 border-zinc-800 p-3 text-white focus:border-[#FF00FF] focus:outline-none transition-colors rounded-none font-[Space_Mono]"
          placeholder="Prometo llevar..."
          rows={2}
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 bg-[#FF00FF] hover:bg-[#FF69B4] text-black font-[Montserrat] font-bold uppercase tracking-widest py-4 px-4 transition-colors disabled:opacity-50 border-2 border-transparent hover:border-white shadow-[6px_6px_0px_#FF69B4]"
      >
        {status === "loading" ? "Procesando..." : "Confirmar Asistencia"}
      </button>
    </form>
  );
}