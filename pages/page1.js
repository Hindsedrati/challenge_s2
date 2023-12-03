import { BrowserLink } from "../components/BrowserRouter.js";
import Button from "../components/Button/Button.js";
import MiniReact from "../core/MiniReact.js";
// import Card from "../components/Card.js";

const data = JSON.parse(localStorage.getItem("data") || "{}");

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
    "border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white my-4",
  onClick: () => console.log("Click me"),
});

// const card = MiniReact.createElement(Card, {
//   date: "22/07/2024",
//   title: "Natation",
//   description:
//     "Assistez à l'éblouissante compétition de natation aux Jeux Olympiques...",
//   link: "http://www.google.com",
//   classes: "border border-black w-fit p-4 rounded-xl flex flex-col gap-2",
//   etiquetteProps: {
//     title: "20:00",
//     class: "rounded-full px-3 bg-[#D6C278] flex justify-center items-center",
//   },
// });

function textToInput(event) {
  const contentNode = event.currentTarget.childNodes[0];
  const content = contentNode.textContent;
  const input = document.createElement("input");
  input.value = content;
  event.currentTarget.removeChild(contentNode);
  event.currentTarget.appendChild(input);
  input.focus();
  input.addEventListener("blur", function (event) {
    const content = event.currentTarget.value;
    const td = event.currentTarget.parentNode;
    // start backend
    data[td.dataset.position] = content;
    localStorage.setItem("data", JSON.stringify(data));
    // end backend
    const contentNode = document.createTextNode(content);
    td.replaceChild(contentNode, event.currentTarget);
    td.addEventListener("click", textToInput);
  });
  event.currentTarget.removeEventListener("click", textToInput);
}

export default {
  type: "div",
  children: [
    BrowserLink({
      title: "Page 2",
      to: "/page2",
    }),
    {
      type: "table",
      props: {},
      events: {},
      children: [
        {
          type: "tbody",
          props: {
            style: {
              "background-color": "pink",
            },
          },
          events: {},
          children: Array.from({ length: 12 }, (_, indexTr) => ({
            type: "tr",
            props: {},
            events: {},
            children: Array.from({ length: 12 }, (_, indexTd) => ({
              type: "td",
              props: {
                toto: "test",
                "data-position": indexTr + "-" + indexTd,
              },
              events: {
                click: [textToInput],
              },
              children: [
                {
                  type: "TEXT_NODE",
                  content:
                    data[indexTr + "-" + indexTd] ??
                    `Default ${indexTr} ${indexTd}`,
                },
              ],
            })),
          })),
        },
      ],
    },
    button,
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
