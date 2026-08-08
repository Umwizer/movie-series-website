import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    "Get the OMNI App",
    "Help",
    "Site Index",
    "OMNI Pro",
    "Advertising",
    "OMNI Developer",
    "Jobs",
    "Privacy Policy",
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: Facebook,
      href: "#",
    },
    {
      label: "Instagram",
      icon: Instagram,
      href: "#",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
    {
      label: "YouTube",
      icon: Youtube,
      href: "#",
    },
    {
      label: "Telegram",
      icon: Send,
      href: "#",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Footer Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              href="#"
              className="footer-link"
              key={link}
            >
              <span>{link}</span>
              <ChevronRight
                className="footer-link-arrow"
                size={22}
                strokeWidth={1.8}
              />
            </a>
          ))}
        </nav>

        {/* Social Media */}
        <div className="footer-socials">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              className="social-link"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="social-icon"
                size={28}
                strokeWidth={2.4}
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;