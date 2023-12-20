import MiniReact from "../../core/MiniReact.js";
import Link from "../Link/Link.js";

const previous = MiniReact.createElement(
    "i",
    {
        class: "fa-solid fa-chevron-left",
    }
)

const next = MiniReact.createElement(
    "i",
    {
        class: "fa-solid fa-chevron-right",
    }
)

const Pagination = () => {
    return MiniReact.createElement(
        "nav",
        {},
        MiniReact.createElement(
            "ul",
            {
                class: "flex items-center -space-x-px h-8 text-sm",
            },
            MiniReact.createElement(
                "li",
                {},
                MiniReact.createElement(
                    Link,
                    {
                        class: "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700",
                        href: "#",
                        value: previous,
                    },
                    MiniReact.createElement(
                        "span",
                        {
                            class: "sr-only",
                            title: "Previous"
                        }
                    ),
                    MiniReact.createElement(
                        "i",
                        {
                            class: "fa-solid fa-chevron-left",
                        }
                    )
                )
            ),
            MiniReact.createElement(
                "li",
                {},
                MiniReact.createElement(
                    Link,
                    {
                        href: "#",
                        class: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
                        value: "1",
                    },
                ),
            ),
            MiniReact.createElement(
                "li",
                {},
                MiniReact.createElement(
                    Link,
                    {
                        href: "#",
                        class: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
                        value: "2"
                    },
                ),
            ),
            MiniReact.createElement(
                "li",
                {},
                MiniReact.createElement(
                    Link,
                    {
                        href: "#",
                        "aria-current": "page",
                        class: "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700",
                        value: "3"
                    },
                ),
            ),
            MiniReact.createElement(
                "li",
                {},
                MiniReact.createElement(
                    Link,
                    {
                        href: "#",
                        class: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
                        value: "4"
                    },
                ),
            ),
            MiniReact.createElement(
                "li",
                {},
                MiniReact.createElement(
                    Link,
                    {
                        href: "#",
                        class: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
                        value: "5"
                    },
                ),
            ),
            MiniReact.createElement(
                "li",
                {},
                MiniReact.createElement(
                    Link,
                    {
                        href: "#",
                        class: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700",
                        value: next,
                    },
                    MiniReact.createElement(
                        "span",
                        {
                            class: "sr-only",
                            title: "Next"
                        }
                    ),
                    MiniReact.createElement(
                        "i",
                        {
                            class: "fa-solid fa-chevron-right",
                        }
                    )
                )
            ),
        )
    )
}

export default Pagination;