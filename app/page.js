// app/page.js
"use client";
import { motion } from "framer-motion";
import RsvpForm from '../components/RsvpForm';
import TarotFiesta from '../components/TarotFiesta';

const Section = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`min-h-screen flex flex-col items-center justify-center p-6 md:p-12 text-center ${className}`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="bg-black text-slate-200 overflow-x-hidden font-[Montserrat]">
      
      {/* 1. HERO - Sólido y pro */}
      <Section className="bg-black relative border-b-4 border-[#FF00FF]">
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-white uppercase">
          404: Vida Social <br/>
          <span className="text-[#FF00FF] bg-black">Not Found</span>
        </h1>
        {/* Imagen 1: Flork quemado */}
        <img src="/notFound.jpeg" alt="Flork estudiando" className="w-56 h-56 object-contain my-6" />
        <p className="text-xl md:text-2xl text-[#FF69B4] font-bold tracking-widest uppercase mt-4">
          La historia de cómo sobreviví
        </p>
        <div className="mt-16 text-white font-[Space_Mono] uppercase text-sm animate-bounce">
          [ Scroll para ejecutar ]
        </div>
      </Section>

      {/* 2. EL NUDO - Más imágenes de Flork */}
      <Section className="bg-[#050505]">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 uppercase">
          El <span className="text-[#FF69B4]">Último</span> Boss
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl items-center">
          <div className="text-left space-y-6 text-lg">
            <p className="border-l-4 border-[#FF00FF] pl-4">Fueron litros de café y frustraciones severas.</p>
            <p className="border-l-4 border-[#FF69B4] pl-4">Fueron errores de sintaxis a las 3 AM que me hacían cuestionar mi existencia.</p>
            <p className="border-l-4 border-white pl-4 font-bold">Pero el <span className="text-[#FF00FF]">25 de Febrero</span>, el código compila por fin.</p>
          </div>
          {/* Imagen 2: Flork llorando en la PC o rompiendo teclado */}
          <img src="/crisis.jpeg" alt="Flork PC" className="w-64 mx-auto drop-shadow-[5px_5px_0px_#FF69B4]" />
        </div>
      </Section>

      {/* 3. CLÍMAX - La Graduación */}
      <Section className="bg-black border-y-4 border-[#FF69B4]">
        {/* Imagen 3: Flork Graduado */}
        <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <img src="/partyBitch.jpeg" alt="Flork graduado" className="w-80 drop-shadow-[8px_8px_0px_#FF00FF]" />
        </motion.div>
        <h2 className="text-6xl font-black mt-8 text-white tracking-tight uppercase">
          ¡ME RECIBO!
        </h2>
        <p className="text-2xl mt-6 bg-[#FF00FF] text-black font-bold py-2 px-6 uppercase tracking-widest">
          Técnica en Programación Web
        </p>
      </Section>

      {/* 4. TAROT INTERACTIVO (NUEVO) */}
      <Section className="bg-[#050505]">
        <div className="max-w-3xl w-full">
          {/* Imagen 4 (Opcional): Flork con cartas o místico */}
          <img src="/tarot.jpeg" alt="Flork Mago" className="w-40 mx-auto mb-8" />
          <TarotFiesta />
        </div>
      </Section>

      {/* 5. LA FIESTA - Info & Mapa */}
      <Section className="bg-black">
        <div className="border-4 border-[#FF00FF] bg-[#050505] p-0 rounded-none max-w-5xl w-full grid md:grid-cols-2 shadow-[12px_12px_0px_#FF69B4]">
          
          {/* Info */}
          <div className="p-8 space-y-8 text-left">
            <h3 className="text-3xl font-black text-white uppercase border-b-2 border-zinc-800 pb-4">
              Parámetros del Evento
            </h3>
            
            <div className="space-y-6 font-[Space_Mono]">
              <div>
                <p className="font-bold text-[#FF69B4] uppercase tracking-widest text-sm">📅 Fecha de Deploy</p>
                <p className="text-xl text-white">Miércoles 25 de Febrero, 21:00 hs</p>
              </div>
              
              <div>
                <p className="font-bold text-[#FF69B4] uppercase tracking-widest text-sm">🍖 Menú v1.0</p>
                <p className="text-white">Pernil con salsas, empanadas y pizza a la parrilla de madrugada.</p>
              </div>

              <div>
                <p className="font-bold text-[#FF69B4] uppercase tracking-widest text-sm">🧊 Protocolo Hielerita</p>
                <p className="text-white">La comida y el hielo corren por mi cuenta. Vos traé lo que quieras tomar.</p>
              </div>
            </div>
          </div>

          {/* Mapa Incrustado */}
          <div className="bg-zinc-900 h-64 md:h-full relative border-l-4 border-zinc-800">
            {/* AQUÍ VA TU MAPA EXACTO */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1246.9965090143623!2d-68.52639175916694!3d-31.484532462090254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1771556542287!5m2!1ses-419!2sar"
              className="absolute inset-0 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </Section>

      {/* 6. RSVP FORM */}
      <Section className="bg-[#050505] border-t-4 border-[#FF00FF] pb-20">
        <h2 className="text-4xl font-black mb-12 text-white uppercase tracking-wider">
          <span className="text-[#FF69B4]">/</span> Confirmar <span className="text-[#FF00FF]">Asistencia</span>
        </h2>
        
        <div className="w-full max-w-xl">
          <RsvpForm />
        </div>
      </Section>

      <footer className="p-8 bg-[#FF00FF] text-black text-center font-bold text-sm uppercase tracking-widest">
        <p>© 2026 Marcela Mancini | Web Developer | Prohibido deployar los viernes</p>
      </footer>
    </main>
  );
}