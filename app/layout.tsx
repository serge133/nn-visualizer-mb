import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NN Visualizer",
  description: "A visualization tool for fully connected neural networks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen h-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
