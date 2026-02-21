"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import RsvpForm from '../components/RsvpForm';
import TarotFiesta from '../components/TarotFiesta';
import Climax from '../components/Climax';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="font-[Montserrat]" style={{ background: "#F2B988", color: "#0D0D0F" }}>

      {/* 1. HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden" style={{ background: "#F2B988" }}>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 0.07, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -right-4 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "28vw", color: "#F20F62" }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-pink"
        />

        <div className="max-w-2xl w-full flex flex-col-reverse md:grid md:grid-cols-[1fr_210px] gap-10 items-center relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#A64D2D" }}>
              Una historia de supervivencia
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-black leading-[0.88] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#0D0D0F" }}
            >
              <span style={{ color: "#F20F62" }}>404:</span>
              <br />
              <span>Vida Social</span>
              <br />
              <span style={{ WebkitTextStroke: "2.5px #0D0D0F", color: "transparent" }}>
                Not Found
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-px w-10" style={{ background: "#F20F62" }} />
              <p className="text-base font-bold uppercase tracking-widest" style={{ color: "#F20F62" }}>
                25 · Feb · 2026
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg leading-relaxed max-w-xs" style={{ color: "#000000" }}>
              Cuatro años de carrera. Cero vida social. Una PC que nunca apagué.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" animate="show" className="flex justify-center">
            <motion.div
              initial={{ rotate: -4 }}
              animate={{ rotate: 4 }}
              transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "easeInOut" }}
              style={{
                background: "#fff",
                padding: "10px 10px 44px 10px",
                boxShadow: "6px 6px 0px #F20F62, 0 20px 40px #00000025",
                width: "160px",
              }}
            >
              <img src="/notFound.jpeg" alt="Flork" className="w-full block" />
              <p className="text-center text-[10px] font-bold tracking-widest uppercase mt-3" style={{ color: "#A64D2D" }}>
                Help
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#A64D2D" }}>
            La historia de cómo sobreviví
          </p>
          <motion.p
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="text-base font-black"
            style={{ color: "#F20F62" }}
          >
            ↓
          </motion.p>
        </motion.div>
      </section>

      {/* 2. EL NUDO */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden" style={{ background: "#F2C879" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none uppercase"
          style={{ fontSize: "22vw", color: "#F20F62" }}
        >
          BUG
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl w-full flex flex-col gap-10 relative z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-sm font-black tracking-widest" style={{ color: "#F20F62" }}>02 —</span>
            <h2 className="font-black leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0D0D0F" }}>
              Casi <span style={{ color: "#F20F62" }}>me</span> Rindo
            </h2>
          </motion.div>

          <div className="flex flex-col md:grid md:grid-cols-[170px_1fr] gap-8 items-start">
            <motion.div
              variants={fadeLeft}
              whileHover={{ rotate: 0 }}
              initial={{ rotate: -3 }}
              transition={{ duration: 0.4 }}
              className="mx-auto md:mx-0"
              style={{
                background: "#fff",
                padding: "8px 8px 36px 8px",
                boxShadow: "5px 5px 0px #F20F62",
                width: "160px",
              }}
            >
              <img src="/crisis.jpeg" alt="Crisis" className="w-full block" />
            </motion.div>

            <motion.div variants={stagger} className="space-y-5">
              {[
                { color: "#F20F62", text: "Fueron noches sin dormir y fechas límite imposibles." },
                { color: "#A64D2D", text: "Bueno... a veces también cerveza." },
                { color: "#0D0D0F", text: "Y el", highlight: "25 de Febrero", end: "... hay que festejar algo importante. 👇", bold: true },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 items-start">
                  <div className="w-1 rounded-full shrink-0 mt-2 self-stretch" style={{ background: item.color, minHeight: "16px" }} />
                  <p className="text-lg leading-relaxed" style={{ color: "#0D0D0F", fontWeight: item.bold ? 800 : 400 }}>
                    {item.text}{" "}
                    {item.highlight && <span style={{ color: "#F20F62" }}>{item.highlight}</span>}
                    {item.end}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ background: "#F20F6220" }}
          >
            {[
              { n: "∞", label: "Noches sin dormir" },
              { n: "3AM", label: "Hora favorita" },
              { n: "1", label: "Que salió bien" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="text-center py-6 px-4"
                style={{ background: "#F2C879" }}
              >
                <p className="text-4xl font-black" style={{ color: "#F20F62" }}>{s.n}</p>
                <p className="text-xs uppercase tracking-wider mt-2 font-bold" style={{ color: "#A64D2D" }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3. CLÍMAX */}
      <Climax />

      {/* 5. TAROT */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24" style={{ background: "#F2C879" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl w-full flex flex-col gap-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-sm font-black tracking-widest" style={{ color: "#F20F62" }}>05 —</span>
            <div>
              <h2 className="font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#0D0D0F" }}>
                El Oráculo del Escabio
              </h2>
              <p className="text-base mt-1" style={{ color: "#000000" }}>
                Antes de venir, consultá tu destino para la noche.
              </p>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col items-center gap-6">
            <motion.img
              src="/tarot.jpeg"
              alt="Tarot"
              className="w-36"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <TarotFiesta />
          </motion.div>
        </motion.div>
      </section>

      {/* 6. LA FIESTA */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24" style={{ background: "#F2B988" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl w-full flex flex-col gap-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-sm font-black tracking-widest" style={{ color: "#F20F62" }}>06 —</span>
            <div>
              <h2 className="font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#0D0D0F" }}>
                La <span style={{ color: "#F20F62" }}>Fiesta</span>
              </h2>
              <p className="text-base mt-1" style={{ color: "#000000" }}>
                Te cuento cómo va a ser la noche.
              </p>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-3">
            {[
              { icon: "📅", label: "Cuándo", value: "Miércoles 25 de Febrero, 21:00 hs", accent: "#F20F62" },
              { icon: "🧊", label: "¿Qué llevás?", value: "Solo tu bebida favorita. El hielo y la comida corren por mi cuenta.", accent: "#0D0D0F" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex gap-5 items-start p-6 rounded-xl"
                style={{ background: "#fff", borderLeft: `4px solid ${item.accent}` }}
              >
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-black uppercase tracking-wider mb-1" style={{ color: item.accent }}>
                    {item.label}
                  </p>
                  <p className="text-lg" style={{ color: "#0D0D0F" }}>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* MAPA */}
     <motion.div
  variants={scaleIn}
  className="w-full rounded-2xl overflow-hidden"
  style={{ height: "260px", border: "3px solid #F20F62" }}
>
  <a
    href="https://maps.app.goo.gl/nDfSfU18DLQuBZCY8"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full h-full flex flex-col items-center justify-center gap-4"
    style={{ background: "#1A1A1A", display: "flex", textDecoration: "none", height: "100%" }}
  >
    <span style={{ fontSize: "48px" }}>📍</span>
    <p className="font-black uppercase tracking-widest text-sm" style={{ color: "#F2C879" }}>
      Ver ubicación en Google Maps
    </p>
    <p className="text-xs font-bold" style={{ color: "#F2B98880" }}>
      Tocá para abrir el mapa
    </p>
  </a>
</motion.div>
        </motion.div>
      </section>

      {/* 7. RSVP */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24" style={{ background: "#0D0D0F" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl w-full flex flex-col gap-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-sm font-black tracking-widest" style={{ color: "#F20F62" }}>07 —</span>
            <div>
              <h2 className="font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F2B988" }}>
                ¿Venís o no <span style={{ color: "#F20F62" }}>venís?</span>
              </h2>
              <p className="text-base mt-1" style={{ color: "#F2C879" }}>
                Avisame así sé cuántas empanadas pedir. Es lo más importante.
              </p>
            </div>
          </motion.div>

          <motion.div variants={scaleIn}>
            <RsvpForm />
          </motion.div>
        </motion.div>
      </section>

      <footer
        className="py-8 text-center text-sm font-black uppercase tracking-widest"
        style={{ borderTop: "2px solid #F20F62", background: "#0D0D0F", color: "#F2C879" }}
      >
        Con amor y sin dormir desde 2022 😄 · Marce
      </footer>
    </main>
  );
}