import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "404: Vida Social Not Found · Marcela 🎉",
  description: "Cuatro años de carrera. Cero vida social. Una PC que nunca apagué. El 25 de Febrero hay que festejar.",
  icons: {
    icon: "/favicon.ico",
    apple: "/loguis.jpeg",
  },
  openGraph: {
    title: "404: Vida Social Not Found · Marcela 🎉",
    description: "Cuatro años de carrera. Cero vida social. Una PC que nunca apagué. El 25 de Febrero hay que festejar.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}