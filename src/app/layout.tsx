import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Fredson Luiz",
  description: "Portfolio de Fredson Luiz, desenvolvedor de software fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
