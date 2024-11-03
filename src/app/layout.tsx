import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
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
        <NavbarWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}
