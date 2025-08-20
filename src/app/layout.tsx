import "@/styles/globals.css";
import { Metadata } from "next";
import { AppProvider } from "../data/context/AppContext";

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
    <html lang="pt-br" suppressHydrationWarning>
      <AppProvider>
        <body>
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
