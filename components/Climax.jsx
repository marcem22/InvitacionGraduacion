"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AudioButton from "./AudioButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Climax() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "0px" });

  return (
    <>
      <AudioButton show={isInView} />
      <section
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
        style={{ background: "#F2B988" }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl w-full flex flex-col md:flex-row items-center gap-14"
        >
          {/* DOS POLAROIDS */}
          <div className="flex flex-row gap-4 mx-auto md:mx-0 shrink-0">

            {/* Polaroid 1 — partyBitch */}
            <motion.div
              variants={scaleIn}
              animate={{ y: [-8, 8, -8] }}
              transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
              style={{
                background: "#fff",
                padding: "10px 10px 44px 10px",
                boxShadow: "0 0 0 3px #F20F62, 10px 10px 0px #A64D2D",
                width: "140px",
                rotate: "-4deg",
              }}
            >
              <div style={{ width: "100%", height: "160px", overflow: "hidden" }}>
                <img
                  src="/partyBitch.jpeg"
                  alt="Graduada"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </motion.div>

            {/* Polaroid 2 — tu foto */}
            <motion.div
              variants={scaleIn}
              animate={{ y: [8, -8, 8] }}
              transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
              style={{
                background: "#fff",
                padding: "10px 10px 44px 10px",
                boxShadow: "0 0 0 3px #F20F62, 10px 10px 0px #A64D2D",
                width: "140px",
                rotate: "4deg",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "100%", height: "160px", overflow: "hidden" }}>
                <img
                  src="/yo.jpg"
                  alt="Yo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
              <p className="text-center text-[10px] font-bold tracking-widest uppercase mt-3" style={{ color: "#A64D2D" }}>
                ¡Lo logré!
              </p>
            </motion.div>

          </div>

          <div className="flex flex-col gap-5">
            <motion.span variants={fadeUp} className="text-sm font-black tracking-widest" style={{ color: "#A64D2D" }}>
              03 — El desenlace
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-black leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(4rem, 10vw, 7rem)", color: "#0D0D0F" }}
            >
              ¡ME
              <br />
              <span style={{ color: "#F20F62" }}>RECIBO!</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center self-start py-2 px-5 rounded-full"
              style={{ background: "#F20F62" }}
            >
              <span className="text-sm font-black uppercase tracking-widest" style={{ color: "#F2C879" }}>
                Técnica  Universitaria en Programación Web
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg leading-relaxed max-w-sm" style={{ color: "#000000" }}>
              Después de demasiado tiempo, planteos existenciales, horas pegada a la silla y más errores de los que quisiera admitir — lo logré.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
}