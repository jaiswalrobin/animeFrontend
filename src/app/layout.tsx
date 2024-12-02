import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { NotificationProvider } from '@/context/NotificationContext';
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
         <NotificationProvider>
          {showNavbar && <Navbar />}
          <main>{children}</main>
          {showFooter && <Footer />}
          </NotificationProvider>
        </body>
      </html>
  );
}
