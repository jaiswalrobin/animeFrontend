import "./globals.css";
import Navbar from "../components/Navbar";  // Assuming you have a Navbar component
import Footer from "../components/Footer";  // Assuming you have a Footer component

interface LayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

export default function RootLayout({
  children,
  showNavbar = true,
  showFooter = true,
}: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {showNavbar && <Navbar />}
        <main>{children}</main>
        {showFooter && <Footer />}
      </body>
    </html>
  );
}
