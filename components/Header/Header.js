import MiniReact from "../../core/MiniReact.js";
import Image from "../Image/Image.js";
import Link from "../Link/Link.js";

const image = MiniReact.createElement(
    Image,
    {
        src: "assets/logo.svg",
        alt: "logo",
        class: "",
    }
)

const Header = (props) => {
    return MiniReact.createElement(
        "header",
        {
            class: "h-[159px] bg-[#FFFFFF] flex items-center justify-center",
            style: {
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)"
            }
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
                        value: image,
                        class: "text-sm font-semibold leading-6 text-gray-900",
                        href: "/page2",
                    },
                ),
                MiniReact.createElement(
                    "div",
                    {
                        class: "hidden w-full md:block md:w-auto",
                    },
                    MiniReact.createElement(
                        "ul",
                        {
                            class: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-black",
                        },
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
                        })
                    )
                )
            )
        ),
    );
};

export default Header;