import { BrowserLink } from "../components/BrowserRouter.js";
import EventCard from "../components/EventCard/EventCard.js";
import Footer from "../components/Footer/Footer.js";
import MiniReact from "../core/MiniReact.js";
import Button from "../components/button/Button.js";
import Link from "../components/Link/Link.js";
import Image from "../components/Image/Image.js";
import Header from "../components/Header/Header.js";
import SearchInput from "../components/SearchInput/SearchInput.js";
import Carousel from "../components/Carousel/Carousel.js";

const data = JSON.parse(localStorage.getItem("data") || "{}");

const accueil = MiniReact.createElement(Link, {
  value: "Accueil",
  class: "text-sm font-semibold leading-6 text-gray-900",
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
    image: "img/path" // Remplacez par le chemin de votre image.
});

const footer = MiniReact.createElement(Footer);

const searchInput = MiniReact.createElement(SearchInput);

const carousel = MiniReact.createElement(Carousel);

const navLinks = [
  {
    title: "Accueil",
    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
    href: "/",
  },
  {
    title: "Evenements",
    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
    href: "#",
  }
]

const header = MiniReact.createElement(Header, {
    links: navLinks,
  },
);

export default {
  type: "div",
  children: [
    // BrowserLink({
    //   title: "Page 2",
    //   to: "/page2",
    // }),
    header,
    button,
    accueil,
    image,
    eventCard,
    searchInput,
    carousel,
    footer
  ],
};