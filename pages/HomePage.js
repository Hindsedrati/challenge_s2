import MiniReact from "../core/MiniReact.js";
import EventCard from "../components/Event/Card.js";
import Footer from "../components/Footer/Footer.js";
import Button from "../components/button/Button.js";
import Link from "../components/Link/Link.js";
import Image from "../components/Image/Image.js";
import Carousel from "../components/Carousel/Carousel.js";

const accueil = MiniReact.createElement(Link, {
  value: "Accueil",
  classes: "text-sm font-semibold leading-6 text-gray-900",
  href: "/page2",
});

const button = MiniReact.createElement(Button, {
  title: "Click me",
  class:
    "border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white my-4",
  onClick: () => console.log("Click me"),
});

const image = MiniReact.createElement(Image, {
  src: "../ceo.png",
  alt: "Mon image",
  class: "rounded-full",
});

const eventCard = MiniReact.createElement(EventCard, {
  link: "https://google.com",
  target: "_blank",
  date: "22/07/2024",
  title: "NATATION",
  time: "20:00",
  description:
    "Assistez à l'éblouissante compétition de natation aux Jeux Olympiques, où les meilleurs nageurs mondiaux se mesurent dans des courses à couper le souffle. Vivez chaque virage et chaque sprint dans une ambiance électrisante !",
  location: "STADE DE FRANCE, FRANCE",
  image: "img/path", // Remplacez par le chemin de votre image.
});

const carousel = MiniReact.createElement(Carousel, {
  images: [
    "../ceo.png",
    "../assets/logo.svg",
    "../ceo.png",
    "../assets/logo.svg",
    "../assets/concert.png",
  ],
});

const footer = MiniReact.createElement(Footer);

const HomePage = () => {
  return MiniReact.createElement(
    "div",
    null,
    MiniReact.createElement(Link, {
      value: "Accueil",
      classes: "text-sm font-semibold leading-6 text-gray-900",
      href: "/page2",
    }),
    button,
    accueil,
    image,
    eventCard,
    carousel,
    footer
  );
};

export default HomePage;