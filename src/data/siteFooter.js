import logo from "@/images/resources/logosky.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText: "Ciencia al servicio de la lubricación",
  socials: [
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/skylubricantes.ve/?hl=es-la",
    },
  ],
  links: [
    {
      id: 1,
      text: "About",
      href: "/about",
    },
    {
      id: 2,
      text: "Meet our team",
      href: "/team",
    },
    {
      id: 3,
      text: "Case stories",
      href: "/case",
    },
    {
      id: 4,
      text: "Latest news",
      href: "/blog",
    },
    {
      id: 5,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      text: "Support",
      href: "/about",
    },
    {
      id: 7,
      text: "Terms of use",
      href: "/about",
    },
    {
      id: 8,
      text: "Privacy policy",
      href: "/about",
    },
    {
      id: 9,
      text: "Help",
      href: "/about",
    },
  ],
  newsletterText: "Subsrcibe for our upcoming latest articles and resources",
  address: "Zona industrial III, carrera 2 esquina calle 4. Barquisimeto, estado Lara.",
  phone: "(0251) 269 1364 - (0251) 269 1028",
  phoneHref: "12463330079",
  email: "info@skylubricantes.com",
  author: "Sky Lubricantes C.A",
  year: new Date().getFullYear(),
};

export default footerData;
