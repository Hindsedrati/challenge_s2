import MiniReact from "../../core/MiniReact.js";
import Link from "../Link/Link.js";

const Card = (props) => {
  const CardContent = MiniReact.createElement(
    "div",
    {
      class: "h-full  flex flex-col justify-between",
    },
    MiniReact.createElement(
      "div",
      { class: "flex " },
      MiniReact.createElement(
        "div",
        null,
        MiniReact.createElement("span", { class: "font-semibold" }, props.date),
        MiniReact.createElement(
          "h1",
          { class: "font-bold text-md uppercase" },
          props.title
        )
      ),
      MiniReact.createElement(
        "span",
        {
          class:
            "bg-yellow-500 block flex items-center font-bold rounded-3xl px-4 py-2 self-start",
        },
        props.start_time
      )
    ),
    MiniReact.createElement(
      "div",
      {
        class: "my-4 rounded-3xl h-full flex flex-col",
      },
      MiniReact.createElement(
        "span",
        {
          class: "line-clamp-3 px-2",
        },
        props.description
      )
    ),
    MiniReact.createElement(
      "div",
      { class: "font-semibold flex items-center space-x-2" },
      MiniReact.createElement("i", { class: "fa-solid fa-map-location-dot" }),
      MiniReact.createElement(
        "span",
        { class: "uppercase mt-auto" },
        props.location
      )
    )
  );

  return MiniReact.createElement(Link, {
    href: `${`http://localhost:3000/event-details?event=` + props.id}`,
    value: CardContent,
    class:
      "inline-block bg-white rounded-3xl w-full md:max-w-sm p-4 md:p-8 h-80",
  });
};

export default Card;
