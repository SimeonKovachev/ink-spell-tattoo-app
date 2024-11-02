import "./globals.css";
import Navbar from "@/components/Navbar";
import { metadata } from "@/config/seo.config";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
