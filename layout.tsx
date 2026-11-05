import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity Transcribe",
  description: "Your Voice. Any Language. Clear Transcription.",
  // The favicon comes from app/icon.svg (and app/apple-icon.png for iPhones)
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
