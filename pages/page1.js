import { BrowserLink } from "../components/BrowserRouter.js";
import MiniReact from "../core/MiniReact.js";
// import Card from "../components/Card.js";
import Link from "../components/Link/Link.js"
import Button from "../components/button/Button.js";
import Loader from "../components/Loader/Loader.js";

const data = JSON.parse(localStorage.getItem("data") || "{}");

// const accueil = MiniReact.createElement(Link, {
//   title: "Accueil",
//   classes: "text-sm font-semibold leading-6 text-gray-900",
//   href: "/page2",
// });

// const cardData = [
//   {
//     date: "10/07/2024",
//     title: "Natation",
//     description:
//       "Assistez à l'éblouissante compétition de natation aux Jeux Olympiques...",
//     link: "http://www.google.com",
//     classes: "border border-black w-fit p-4 rounded-xl flex flex-col gap-2",
//     etiquetteProps: {
//       title: "20:00",
//       class: "rounded-full px-3 bg-[#D6C278] flex justify-center items-center",
//     },
//   },
//   {
//     date: "22/07/2024",
//     title: "Football",
//     description:
//       "Assistez à l'éblouissante compétition de football aux Jeux Olympiques...",
//     link: "http://www.google.com",
//     classes: "border border-black w-fit p-4 rounded-xl flex flex-col gap-2",
//     etiquetteProps: {
//       title: "20:00",
//       class: "rounded-full px-3 bg-[#D6C278] flex justify-center items-center",
//     },
//   },
//   {
//     date: "22/07/2024",
//     title: "Basket",
//     description:
//       "Assistez à l'éblouissante compétition de basket aux Jeux Olympiques...",
//     link: "http://www.google.com",
//     classes: "border border-black w-fit p-4 rounded-xl flex flex-col gap-2",
//     etiquetteProps: {
//       title: "20:00",
//       class: "rounded-full px-3 bg-[#D6C278] flex justify-center items-center",
//     },
//   },
// ];

// const allCard = cardData.map((data) => MiniReact.createElement(Card, data));
// console.log(allCard);


const button = MiniReact.createElement(Button, {
  title: "Click me",
  class:
    "text-grey border border-black rounded-full px-4 py-2 hover:text-custom-blue hover:text-white my-4",
  onClick: () => console.log("Click me"),
});

const loader = MiniReact.createElement(Loader, {});

export default {
  type: "div",
  children: [
    BrowserLink({
      title: "Page 2",
      to: "/page2",
    }),
    button,
    loader,
    // accueil,
    // {
    //   type: "div",
    //   props: {
    //     class: "container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10",
    //   },
    //   events: {},
    //   children: cardData.map((data) => MiniReact.createElement(Card, data)),
    // },
  ],
};
