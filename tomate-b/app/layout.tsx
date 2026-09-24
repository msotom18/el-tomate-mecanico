import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Tomate Mecánico · Escuela de Fútbol Formativo",
  description: "Formación deportiva de alto nivel para cadetes de 12 a 17 años en Santiago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
