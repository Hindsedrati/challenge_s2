import MiniReact from "../../core/MiniReact.js";
import Link from "../Link/Link.js";
import Image from "../Image/Image.js";

const EventContent = ({ event }) => {
  return MiniReact.createElement(
    "div",
    { class: "w-11/12 mx-auto pt-8" },
    MiniReact.createElement(
      "div",
      {
        class: "flex items-start flex-row justify-between border-b",
      },

      MiniReact.createElement(
        "div",
        {
          class: "flex items-start flex-col growspace-between pb-4",
        },
        MiniReact.createElement(
          "p",
          {
            class: "text-gray-600 body-font font-poppins",
          },
          event.title
        ),
        MiniReact.createElement(
          "p",
          {
            class: "text-gray-600 body-font font-poppins",
          },
          "Adresse : " + event.location
        ),
        MiniReact.createElement(
          "p",
          {
            class: "text-gray-600 body-font font-poppins",
          },
          "Date : " + event.date
        ),

        MiniReact.createElement(
          "p",
          {
            class: "text-gray-600 body-font font-poppins",
          },
          "Heure : " + event.start_time + " - " + event.end_time
        )
      ),
      MiniReact.createElement(Image, {
        src: event.media[0].source,
        alt: event.title,
        class: "w-32 h-32 object-cover",
      })
    ),

    MiniReact.createElement(
      "p",
      {
        class: "text-base leading-relaxed text-gray-500 mt-10",
      },
      event.description
    ),
    MiniReact.createElement("h3", { class: "mt-8 mb-4" }, "Les spots"),
    MiniReact.createElement(
      "div",
      { class: "grid grid-cols-1 md:grid-cols-2 gap-4" },
      ...event.spot.map((spot) =>
        MiniReact.createElement(
          "div",
          { class: "relative" },
          MiniReact.createElement("img", {
            src: spot.image,
            class:
              "rounded-xl md:rounded-full w-full h-[150px] md:h-[100px] object-cover",
          }),
          MiniReact.createElement(
            "span",
            {
              class: "flex justify-center items-center",
            },
            spot.name
          )
        )
      )
    ),
    MiniReact.createElement(
      "div",
      {
        class: "py-10",
      },

      MiniReact.createElement(
        "div",
        {
          class: "flex justify-center md:justify-start",
        },

        MiniReact.createElement(Link, {
          href: `${`/event-details?event=` + event.id}`,
          value: "Plus d'info",
          class:
            "text-white bg-[#87A397] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 ",
        })
      )
    )
  );
};

export default EventContent;
