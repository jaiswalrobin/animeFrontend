// components/Footer.tsx
type FooterProps = {
    notice?: string;
  };
  
  export default function Footer({ notice }: FooterProps) {
    return (
      <footer className="footer">
        <p>&copy; 2024 AnimePix. All rights reserved.</p>
        {notice && <p className="footer-notice">{notice}</p>}
      </footer>
    );
  }
  