import MiniReact from "../core/MiniReact.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import navlinks from "../utils/navlinks.js";
import SearchInput from "../components/SearchInput/SearchInput.js";
import Loader from "../components/Loader/Loader.js";

const HomePage = () => {
  return MiniReact.createElement(
    "div",
    null,
    MiniReact.createElement(Header, {
      links: navlinks,
    }),
    MiniReact.createElement(SearchInput, {
      class: "flex items-center rounded-full shadow-lg mx-4 sm:mx-6 md:mx-8 lg:mx-10 bg-gradient-to-r from-[#87A397] to-[#D9C26C] p-1 shadow-lg",
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
