import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Footer from "../components/Footer/Footer.js";
import Button from "../components/button/Button.js";
import Link from "../components/Link/Link.js";
import Image from "../components/Image/Image.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = MiniReact.createElement(
      "div",
      null,
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement(
        "main",
        { class: "container mx-auto" },
        MiniReact.createElement(
          "div",
          {
            class: "grid grid-cols-1 md:grid-cols-2",
          },
          MiniReact.createElement(
            "div",
            { class: "flex flex-col gap-14 md:mt-[80px]" },
            MiniReact.createElement(
              "h1",
              { class: "uppercase text-6xl leading-tight" },
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Accéder aux jeux olympiques de "
              ),
              MiniReact.createElement(
                "span",
                {
                  class:
                    "inline-block text-7xl animate-pulse text-transparent bg-clip-text bg-gradient-to-br from-slate-600 via-[#87A397] to-yellow-500 font-semibold",
                },
                "Paris 2024"
              )
            ),
            MiniReact.createElement(
              "h2",
              { class: "text-[24px] text-2xl font-semibold" },
              "Deux façons de voir les Jeux Olympiques"
            ),
            MiniReact.createElement(
              "div",
              { class: "flex gap-[56px]" },
              MiniReact.createElement(Link, {
                class:
                  "uppercase text-[18px] text-white rounded-[15px] bg-[#87A397] py-[18px] w-[212px] text-center",
                href: "http://localhost:3000/map",
                value: "Carte",
              }),
              MiniReact.createElement(Link, {
                class:
                  "uppercase text-[18px] text-white rounded-[15px] bg-[#87A397] py-[18px] w-[212px] text-center",
                href: "http://localhost:3000/evenements",
                value: "Evenement",
              })
            )
          ),
          MiniReact.createElement(
            "div",
            null,
            MiniReact.createElement(Image, {
              src: "../assets/paris_2024.png",
              alt: "Paris 2024",
            })
          )
        )
      ),
      MiniReact.createElement(Footer)
    );
    this._dom = element;
    return element;
  }
}

export default HomePage;
