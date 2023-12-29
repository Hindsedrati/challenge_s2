import MiniReact from "../../core/MiniReact.js";

const EventCard = (props) => {
  return MiniReact.createElement(
    "a",
    {
      href: props.link,
      target: props.target,
      class:
        "inline-block bg-white rounded-3xl w-full md:max-w-sm p-4 md:p-8 h-80",
    },
    MiniReact.createElement(
      "div",
      {
        class: "h-full  flex flex-col justify-between",
      },
      MiniReact.createElement(
        "div",
        { class: "flex " },
        MiniReact.createElement(
          "div",
          { class: "flex-1" },
          MiniReact.createElement(
            "span",
            { class: "font-semibold" },
            props.date
          ),
          MiniReact.createElement(
            "h1",
            { class: "font-bold text-lg uppercase" },
            props.title
          )
        ),
        MiniReact.createElement(
          "span",
          {
            class:
              "bg-yellow-500 block flex items-center font-bold rounded-3xl px-4",
          },
          props.time
        )
      ),
      MiniReact.createElement(
        "div",
        {
          class: "my-4 rounded-3xl h-full flex flex-col",
          style: {
            background: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(255, 255, 255, 1)),url(${props.image}) no-repeat center center`,
            backgroundSize: "cover",
          },
        },
        MiniReact.createElement(
          "span",
          {
            class: "mt-auto line-clamp-3 px-2",
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
    )
  );
};

export default EventCard;
