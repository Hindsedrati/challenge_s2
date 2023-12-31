import MiniReact from "../core/MiniReact.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

const NotFoundPage = () => {
  const element = MiniReact.createElement(
    "div",
    { class: "bg-[D2D0DE] pt-32 flex flex-col justify-between h-screen" },
    MiniReact.createElement(
      "div",
      {
        class: "container mx-auto p-10 rounded-3xl bg-white h-4/6 ",
      },
      MiniReact.createElement(
        "div",
        { class: "w-fit mx-auto" },
        MiniReact.createElement(
          "h1",
          {
            class:
              "text-xl font-semibold mb-8 border-b-2 border-black pb-2 w-fit",
          },
          "Erreur 404"
        ),
        MiniReact.createElement(
          "p",
          { class: "text-6xl mb-10" },
          MiniReact.createElement("span", null, "Le chemin"),
          MiniReact.createElement("br"),
          MiniReact.createElement("span", null, "est incorrect Chef !")
        ),
        MiniReact.createElement(
          "p",
          { class: "text-xl" },
          "Désolé, la page que vous recherchez semble introuvable."
        ),
        MiniReact.createElement(
          "p",
          { class: "text-xl mt-4" },
          "Retournez à la ",
          MiniReact.createElement(
            "a",
            { href: "/", class: "text-blue-500" },
            "page d'accueil"
          )
        )
      )
    ),
    MiniReact.createElement(Footer)
  );

  return element;
};

export default NotFoundPage;
