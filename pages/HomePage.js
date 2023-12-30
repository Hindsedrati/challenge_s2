import MiniReact from "../core/MiniReact.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import navlinks from "../utils/navlinks.js";
import Loader from "../components/Loader/Loader.js";

const HomePage = () => {
  return MiniReact.createElement(
    "div",
    null,
    MiniReact.createElement(Header, {
      links: navlinks,
    }),
    MiniReact.createElement(
      "div",
      {
        class: "h-screen",
      },
      "Hola !"
    ),
    MiniReact.createElement(Footer)
  );
};

export default HomePage;
