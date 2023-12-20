import MiniReact from "../../core/MiniReact.js";
import Button from "../button/Button.js";
import Image from "../Image/Image.js";

const image = MiniReact.createElement(
    Image,
    {
        src: "assets/search.svg",
        alt: "search",
        class: "",
    }
)

const SearchInput = (props) => {
    return MiniReact.createElement(
        "form",
        {},
        MiniReact.createElement(
            "label",
            {
                class: "mb-2 text-sm font-medium text-gray-900 sr-only",
                for: "default-search",
            }
        ),
        MiniReact.createElement(
            "div",
            {
                class: "relative",
            },
            MiniReact.createElement(
                "div",
                {
                    class: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
                },
                MiniReact.createElement(
                    "i",
                    {
                        alt: "search",
                        class: "fa-solid fa-magnifying-glass",
                    },
                )
            ),
            MiniReact.createElement(
                "input",
                {
                    type: "search",
                    id: "default-search",
                    class: "block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500",
                    placeholder: "Recherche un événement, une adresse, un spot ...",
                    required: true,
                }
            ),
            MiniReact.createElement(
                Button,
                {
                    type: "submit",
                    class: "text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2",
                    title: "Rechercher",
                }
            )
        )
    )
}
export default SearchInput;