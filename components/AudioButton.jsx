"use client";
import { useRef, useState, useEffect } from "react";

export default function AudioButton({ show }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!show && playing && audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, [show]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  if (!show) return null;

  return (
    <>
      <audio ref={audioRef} src="/recibo.mp3" preload="auto" />
      <button
        onClick={toggle}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          background: "#F20F62",
          color: "#F2C879",
          border: "none",
          borderRadius: "50%",
          width: "52px",
          height: "52px",
          fontSize: "22px",
          cursor: "pointer",
          boxShadow: "0 4px 20px #F20F6260",
        }}
      >
        {playing ? "⏸" : "🎵"}
      </button>
    </>
  );
}