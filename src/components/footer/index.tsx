// import styled from "styled-components";
// // import {
// //   ChevronRight,
// //   Facebook,
// //   Instagram,
// //   Linkedin,
// //   Youtube,
// //   Send,
// // } from "lucide-react";

// export const Footer = () => {
//   const footerLinks = [
//     "Get the OMNI App",
//     "Help",
//     "Site Index",
//     "OMNI Pro",
//     "Advertising",
//     "OMNI Developer",
//     "Jobs",
//     "Privacy Policy",
//   ];

//   // const socialLinks = [
//   //   { icon: Facebook, label: "Facebook" },
//   //   { icon: Instagram, label: "Instagram" },
//   //   { icon: Linkedin, label: "LinkedIn" },
//   //   { icon: Youtube, label: "YouTube" },
//   //   { icon: Send, label: "Telegram" },
//   // ];

//   return (
//     <FooterContainer>
//       <div className="footer-content">

//         <nav className="footer-links" aria-label="Footer navigation">
//           {footerLinks.map((link) => (
//             <a href="#" key={link}>
//               <span>{link}</span>
//               <ChevronRight size={22} strokeWidth={1.8} />
//             </a>
//           ))}
//         </nav>

//         <div className="social-links">
//           {socialLinks.map(({ icon: Icon, label }) => (
//             <a href="#" aria-label={label} key={label}>
//               <Icon size={32} strokeWidth={2.2} />
//             </a>
//           ))}
//         </div>

//       </div>
//     </FooterContainer>
//   );
// };

// const FooterContainer = styled.footer`
//   width: 100%;
//   min-height: 300px;

//   background:
//     radial-gradient(
//       circle at 0% 100%,
//       rgba(75, 45, 150, 0.35),
//       transparent 35%
//     ),
//     #020817;

//   color: #eaf6ff;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   box-sizing: border-box;

//   .footer-content {
//     width: min(900px, 90%);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   .footer-links {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//     column-gap: 45px;
//     row-gap: 28px;

//     max-width: 900px;
//   }

//   .footer-links a {
//     display: flex;
//     align-items: center;
//     gap: 7px;

//     color: #eaf6ff;
//     text-decoration: none;

//     font-size: 20px;
//     font-weight: 600;

//     transition: opacity 0.2s ease;
//   }

//   .footer-links a:hover {
//     opacity: 0.7;
//   }

//   .footer-links svg {
//     flex-shrink: 0;
//   }

//   .social-links {
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     gap: 50px;

//     margin-top: 85px;
//   }

//   .social-links a {
//     width: 48px;
//     height: 48px;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     border-radius: 9px;

//     background: #eaf6ff;
//     color: #020817;

//     text-decoration: none;

//     transition:
//       transform 0.2s ease,
//       opacity 0.2s ease;
//   }

//   .social-links a:hover {
//     transform: translateY(-3px);
//     opacity: 0.85;
//   }

//   @media (max-width: 768px) {
//     min-height: 350px;

//     .footer-links {
//       column-gap: 25px;
//       row-gap: 20px;
//     }

//     .footer-links a {
//       font-size: 16px;
//     }

//     .social-links {
//       gap: 25px;
//       margin-top: 60px;
//     }

//     .social-links a {
//       width: 42px;
//       height: 42px;
//     }
//   }

//   @media (max-width: 480px) {
//     .footer-links {
//       flex-direction: column;
//       gap: 18px;
//     }

//     .social-links {
//       gap: 15px;
//       margin-top: 45px;
//     }
//   }
// `;