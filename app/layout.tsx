import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "404: Vida Social Not Found · Marcela",
  description: "La fiesta de recibida de Marcela",
  icons: {
    icon: "/loguis.jpeg",
    apple: "/loguis.jpeg",
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