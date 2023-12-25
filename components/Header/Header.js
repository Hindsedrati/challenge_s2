import MiniReact from "../../core/MiniReact.js";
import Image from "../Image/Image.js";
import Link from "../Link/Link.js";


const Header = (props) => {
    return MiniReact.createElement(
        "header",
        {
            class: "h-[159px] bg-[#FFFFFF] flex items-center justify-center mb-4 shadow-md",

        }, 
        MiniReact.createElement(
            "nav",
            { 
                class: "container border-gray-200"
            },
            MiniReact.createElement(
                "div",
                {
                    class: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
                },
                MiniReact.createElement(
                    Link,
                    {
                        value: MiniReact.createElement(
                            Image,
                            {
                                src: "assets/logo.svg",
                                alt: "logo",
                                class: "",
                            }
                        ),
                        class: "text-sm font-semibold leading-6 text-gray-900",
                        href: "/page2",
                    },
                ),
                MiniReact.createElement(
                    "div",
                    {
                        class: "w-full md:block md:w-auto bg-white absolute md:static transition-all ease-in-out duration-300 top-0  w-full h-full left-full",
                        id: "menu",
                    },
                    MiniReact.createElement(
                        "ul",
                        {
                            class: "font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 text-black",
                        },
                        MiniReact.createElement("li",{
                            class:"md:hidden flex justify-end",
                            },
                            MiniReact.createElement("i",{
                                class: "fa-solid fa-times text-2xl",
                                id: "close-menu",
                            })
                        ),
                        ...props.links.map((link) => {
                            return MiniReact.createElement(
                                "li",
                                {},
                                MiniReact.createElement(Link,
                                    {
                                        class: "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0",
                                        href: link.href,
                                        value: link.title,
                                    }
                                )
                            )
                        }),
                    )
                ),
                MiniReact.createElement("i",{
                    class: "fa-solid fa-bars text-2xl md:hidden",
                    id: "open-menu",
                })
            )
        ),
        MiniReact.createElement('script',{
            src:"../../utils/header-logic.js",
            },
            )
    );
};

export default Header;