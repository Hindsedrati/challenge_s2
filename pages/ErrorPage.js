import MiniReact from "../core/MiniReact.js";
import Link from "../components/Link/Link.js";
import Image from "../components/Image/Image.js";
import Footer from "../components/Footer/Footer.js";

const NotFoundPage = () => {
  const element = MiniReact.createElement(
    "div",
    null,
    MiniReact.createElement(
      "div",
      {
        class:
          "bg-[D2D0DE] pt-32 flex flex-col justify-center items-center min-h-screen w-11/12 mx-auto",
      },
      MiniReact.createElement(
        "div",
        {
          class:
            "container mx-auto p-10 rounded-3xl bg-white h-4/6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8",
        },
        MiniReact.createElement(Image, {
          src: "../assets/error.png",
          alt: "Error",
          class: "h-[400px] flex-1 object-cover",
        }),
        MiniReact.createElement(
          "div",
          { class: "mx-auto flex-1" },
          MiniReact.createElement(
            "h1",
            {
              class:
                "text-xl font-semibold mb-8 border-b-2 border-black pb-2 w-fit",
            },
            "Erreur olympique 404"
          ),
          MiniReact.createElement(
            "p",
            { class: "text-6xl mb-10 tracking-wider" },
            MiniReact.createElement("span", null, "Aïe, pas de médaille "),
            MiniReact.createElement("br"),
            MiniReact.createElement("span", null, "pour cette page !")
          ),
          MiniReact.createElement(
            "p",
            { class: "text-xl" },
            "Sprintez vers la page d'",
            MiniReact.createElement(Link, {
              href: "/",
              class: " text-blue-500",
              value: "accueil",
            }),
            "!"
          )
        )
      )
    ),
    MiniReact.createElement(Footer)
  );

  return element;
};

export default NotFoundPage;
