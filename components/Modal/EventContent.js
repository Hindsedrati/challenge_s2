import MiniReact from "../../core/MiniReact.js";
import Link from "../Link/Link.js";
import Image from "../Image/Image.js";

const EventContent = ({ event }) => {
  return MiniReact.createElement(
    "div",
    null,
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

    // Modal Body
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
        event.description
      ),

      MiniReact.createElement(
        "p",
        {
          class: "text-base leading-relaxed text-gray-500 ",
        },
        event.content
      )
    ),
    MiniReact.createElement(
      "div",
      {
        class: "p-4 md:p-5 space-y-4",
      },

      MiniReact.createElement(
        "div",
        {
          class:
            "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ",
        },

        MiniReact.createElement(Link, {
          href: `${`http://localhost:3000/event-details?event=` + event.id}`,
          value: "Plus d'info",
          class:
            "ms-3 text-white bg-[#87A397] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",
        })
      )
    )
  );
};

export default EventContent;
