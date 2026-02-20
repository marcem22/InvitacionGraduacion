"use client";
import { useState, useRef } from "react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({ nombre: "", asistencia: true, mensaje: "" });
  const [status, setStatus] = useState("idle");
  const audioRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        if (audioRef.current) {
          audioRef.current.volume = 0.7;
          audioRef.current.play().catch(e => console.log(e));
        }
      } else setStatus("error");
    } catch (error) { setStatus("error"); }
  };

  const inputStyle = {
    background: "#1A1A1A",
    border: "2px solid #F2B98850",
    color: "#F2E8DF",
    width: "100%",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.2s",
    fontFamily: "Montserrat, sans-serif",
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = "#F20F62";
    e.target.style.boxShadow = "0 0 0 3px #F20F6230";
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = "#F2B98850";
    e.target.style.boxShadow = "none";
  };

  if (status === "success") {
    return (
      <div
        className="text-center p-10 rounded-2xl"
        style={{ background: "#1A1A1A", border: "2px solid #F20F62" }}
      >
        <audio ref={audioRef} src="/musica.mp3" preload="auto" />
        <p className="text-5xl mb-4">🎶🥂</p>
        <p className="font-black text-2xl uppercase tracking-widest" style={{ color: "#F20F62" }}>
          ¡Nos vemos ahí!
        </p>
        <p className="mt-2 font-medium" style={{ color: "#F2C879" }}>
          Subí el volumen de la música.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      style={{
        background: "#1A1A1A",
        border: "1px solid #F2B98830",
        borderRadius: "16px",
        padding: "32px",
      }}
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest" style={{ color: "#F2C879" }}>
          Tu Nombre / Apodo
        </label>
        <input
          type="text"
          required
          style={inputStyle}
          onFocus={focusStyle}
          onBlur={blurStyle}
          placeholder="Ej: Mati"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest" style={{ color: "#F2C879" }}>
          ¿Venís a festejar?
        </label>
        <select
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={focusStyle}
          onBlur={blurStyle}
          value={formData.asistencia ? "si" : "no"}
          onChange={(e) => setFormData({ ...formData, asistencia: e.target.value === "si" })}
        >
          <option value="si">¡Obvio que sí! Llevo sed.</option>
          <option value="no">No puedo, me pierdo la fiesta.</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest" style={{ color: "#F2C879" }}>
          Mensaje (Opcional)
        </label>
        <textarea
          style={{ ...inputStyle, resize: "none" }}
          onFocus={focusStyle}
          onBlur={blurStyle}
          placeholder="Prometo llevar..."
          rows={3}
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: "#F20F62",
          color: "#F2C879",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 900,
          fontSize: "14px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "16px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          marginTop: "8px",
          transition: "all 0.2s",
          opacity: status === "loading" ? 0.6 : 1,
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
        {status === "loading" ? "Procesando..." : "Confirmar Asistencia"}
      </button>
    </form>
  );
}