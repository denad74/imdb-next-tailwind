import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import { NavBar } from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* NavBar */}
          <NavBar />
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
