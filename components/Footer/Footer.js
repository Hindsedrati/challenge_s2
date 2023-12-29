import MiniReact from "../../core/MiniReact.js";
import Image from "../Image/Image.js";

const Footer = () => {
    return MiniReact.createElement("footer", {
            class: "h-[233px] bg-[#87A397] flex items-center justify-center",
        },
        MiniReact.createElement('div', {
                class: "flex justify-between items-center gap-4 container w-full flex-col md:flex-row",
            },
            MiniReact.createElement("a", {
                    href: "/"
                },
                MiniReact.createElement(Image, {
                    src: "../../assets/logo.svg",
                    alt: "logo",
                    class: ""
                }),
            ),

            MiniReact.createElement("span", {
                    class: "text-white text-sm font-medium",
                },
                "© 2023 Tous droits réservés")
        )
    );
}


export default Footer;