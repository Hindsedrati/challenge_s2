import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Footer from "../components/Footer/Footer.js";
import Button from "../components/button/Button.js";
import Link from "../components/Link/Link.js";
import Image from "../components/Image/Image.js";
import Countdown from "../components/CountDown/CountDown.js";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.childrenKey = this.generateUniqueKey();
  }

  calculateTimeLeft = () => {
    const jo2024 = new Date("2024-07-26");
    const now = new Date();
    const difference = jo2024 - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  render() {
    const element = MiniReact.createElement(
      "div",
      null,
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement(
        "main",
        {
          class: "container mx-auto flex flex-col-reverse md:flex-col",
        },
        MiniReact.createElement(
          "div",
          {
            class: "grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-full mx-auto",
          },
          MiniReact.createElement(
            "div",
            { class: "flex flex-col gap-8 md:gap-14 md:mt-[80px]" },
            MiniReact.createElement(
              "h1",
              {
                class:
                  "uppercase text-[36px] md:text-6xl leading-snug md:leading-tight",
              },
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Accéder aux jeux olympiques de "
              ),
              MiniReact.createElement(
                "span",
                {
                  class:
                    "inline-block text-[46px] md:text-7xl animate-pulse text-transparent bg-clip-text bg-gradient-to-br from-slate-600 via-[#87A397] to-yellow-500 font-semibold",
                },
                "Paris 2024"
              )
            ),
            MiniReact.createElement(
              "div",
              { class: "lg:hidden" },
              MiniReact.createElement(Image, {
                src: "../assets/paris_2024.png",
                alt: "Paris 2024",
              })
            ),
            MiniReact.createElement(
              "h2",
              { class: "text-[24px] font-semibold" },
              "Deux façons de voir les Jeux Olympiques :"
            ),
            MiniReact.createElement(
              "div",
              { class: "flex flex-col md:flex-row gap-6 md:gap-[56px]" },
              MiniReact.createElement(Link, {
                class:
                  "uppercase text-[18px] text-white rounded-[15px] bg-[#87A397] py-[18px] w-full md:w-[212px] text-center hover:bg-[#E9CE6B] hover:text-black transition-all delay-0 duration-150 cursor-pointer",
                href: "http://localhost:3000/map",
                value: "Carte",
              }),
              MiniReact.createElement(Link, {
                class:
                  "uppercase text-[18px] text-white rounded-[15px] bg-[#87A397] py-[18px] w-full md:w-[212px] text-center hover:bg-[#E9CE6B] hover:text-black transition-all delay-0 duration-150 cursor-pointer",
                href: "http://localhost:3000/events",
                value: "Evenement",
              })
            )
          ),
          MiniReact.createElement(
            "div",
            { class: "hidden lg:block" },
            MiniReact.createElement(Image, {
              src: "../assets/paris_2024.png",
              alt: "Paris 2024",
            })
          )
        ),
        MiniReact.createElement(Countdown, {
          key: this.childrenKey,
          timeLeft: this.calculateTimeLeft,
        })
      ),
      MiniReact.createElement(Footer)
    );
    this._dom = element;
    return element;
  }
}

export default HomePage;
