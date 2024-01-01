import MiniReact from "../../core/MiniReact.js";
import Image from "../Image/Image.js";
import Link from "../Link/Link.js";

const Footer = () => {

    return MiniReact.createElement("footer", {
            class: `h-[100px] bg-[#87A397] mt-4 mb-[100px] md:mb-0`,
        },
        MiniReact.createElement('div', {
                class: "flex justify-between items-center gap-4 container mx-auto px-4 py-2",
            },

            MiniReact.createElement(Link, {
                value: MiniReact.createElement(Image, {
                    src: "assets/logo.svg",
                    alt: "logo",
                    class: "",
                }),
                class: "text-sm font-semibold leading-6 text-gray-900",
                href: "/",
            }),

            MiniReact.createElement("span", {
                    class: "text-white text-xs font-medium",
                },
                "Copyright - Tous droits réservés")
        )
    );
}
export default Footer;