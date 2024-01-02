import MiniReact from "../../core/MiniReact.js";
import Image from "../Image/Image.js";

const Footer = () => {
  return MiniReact.createElement(
    "footer",
    {
      class: `h-[100px] md:h-[100px] bg-[#87A397] flex items-center justify-center mt-20`,
    },
    MiniReact.createElement(
      "div",
      {
        class:
          "flex justify-between items-center gap-4 container mx-auto px-4 py-2",
      },

      MiniReact.createElement(
        "a",
        {
          href: "/",
          class: "flex items-center",
        },
        MiniReact.createElement(Image, {
          src: "../../assets/logo.svg",
          alt: "logo",
          class: "h-12 w-12",
        })
      ),

      MiniReact.createElement(
        "span",
        {
          class: "text-white text-xs font-medium",
        },
        "Copyright - Tous droits réservés"
      )
    )
  );
};
export default Footer;
