import MiniReact from "../core/MiniReact.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import navlinks from "../utils/navlinks.js";
import SearchInput from "../components/SearchInput/SearchInput.js";

const HomePage = () => {
    return MiniReact.createElement(
        "div",
        null,
        MiniReact.createElement(Header,
            {
                links: navlinks,
            }),
        MiniReact.createElement("div",
            {
                class: "container mx-auto"
            },
            MiniReact.createElement(SearchInput,
                {
                    class: "flex items-center rounded-full shadow-lg bg-white shadow-lg",
                }),
            MiniReact.createElement(
                "div",
                {
                    class: "h-screen",
                },
                "Hola !"
            ),
        ),
        MiniReact.createElement(Footer)
    );
};

export default HomePage;