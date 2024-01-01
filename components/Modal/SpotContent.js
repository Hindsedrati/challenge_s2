import MiniReact from "../../core/MiniReact.js";
import Image from "../Image/Image.js";

import { toPascalCase } from "../../utils/utils.js";

const SpotContent = ({ spot }) => {
  return MiniReact.createElement(
    "div",
    { class: "flex flex-col justify-between mt-10" },
    MiniReact.createElement(Image, {
      src: spot.image,
      alt: spot.name,
      class: "max-w-full object-cover",
    }),
    MiniReact.createElement(
      "div",
      {
        class: "flex items-center justify-between p-4 md:p-5 rounded-t",
      },

      MiniReact.createElement(
        "h3",
        {
          class: "text-gray-600 body-font font-poppins",
        },
        toPascalCase(spot.name)
      )
    ),
    MiniReact.createElement(
      "div",
      {
        class: "flex items-start flex-row justify-between p-4 pr-8 border-b",
      },

      MiniReact.createElement(
        "div",
        {
          class: "flex items-start flex-col growspace-between p-4 space-y-4",
        },

        MiniReact.createElement(
          "p",
          {
            class: "text-gray-600 body-font font-poppins",
          },
          spot.typology
        ),

        MiniReact.createElement(
          "p",
          {
            class: "text-gray-600 body-font font-poppins",
          },
          spot.address
        ),

        MiniReact.createElement(
          "p",
          {
            class: "text-gray-600 body-font font-poppins",
          },
          spot.period
        )
      )
    ),
    MiniReact.createElement(
      "div",
      {
        class: "p-4 md:p-5 space-y-4",
      },

      MiniReact.createElement(
        "p",
        {
          class: "text-base leading-relaxed text-gray-500 ",
        },
        spot.description
      )
    ),
    MiniReact.createElement(
      "div",
      {
        class: "p-4 md:p-5 space-y-4",
      },

      MiniReact.createElement("div", {
        class:
          "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ",
      })
    )
  );
};

export default SpotContent;
