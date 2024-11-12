import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "NN Visualizer",
  description: "A visualization tool for fully connected deep neural networks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased w-screen h-screen overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <Header />
        {/* Body */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
