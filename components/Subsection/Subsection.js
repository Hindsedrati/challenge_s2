import Component from "../../core/Component.js";
import MiniReact from "../../core/MiniReact.js";
import Link from "../Link/Link.js";

class Subsection extends Component {

    render() {
        let element = MiniReact.createElement(
            "div",
            {
                class: "text-sm font-medium text-center text-black-500 border-b border-black-200",
                style: { background: "#EEE0B1" }
            },
            MiniReact.createElement(
                "ul",
                {
                    class: "flex flex-wrap -mb-px justify-center"
                },
                MiniReact.createElement(
                    "li",
                    {
                        class: "me-2"
                    },
                    MiniReact.createElement(
                        Link,
                        {
                            class: "inline-block p-4 text-black-600 border-b-2 border-black-600 rounded-t-lg active dark:text-black-500 dark:border-black-500",
                            style: { borderBottomColor: "#669D4B" },
                            href: "#",
                            value: "Evènements",
                            "aria-current": "page"
                        }
                    )
                ),
                MiniReact.createElement(
                    "span",
                    {
                        class: "inline-block border-r border-gray-300 h-13 mx-2",
                    }
                ),
                MiniReact.createElement(
                    "li",
                    {
                        class: "me-2"
                    },
                    MiniReact.createElement(
                        Link,
                        {
                            class: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-black-600 hover:border-[#669D4B]",
                            style: { borderBottomColor: "#669D4B" },
                            href: "#",
                            value: "Spots"
                        }
                    )
                )
            )
        )
        this._dom = element;
        return element;
    }
}

export default Subsection