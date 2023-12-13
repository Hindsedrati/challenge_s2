import MiniReact from "../../core/MiniReact.js";

const EventCard = (props) => {
    return MiniReact.createElement(
        "a",
        {
            href: props.link,
            target: props.target,
        },
        MiniReact.createElement(
            "div",
            {
                class: "bg-white rounded-3xl w-full md:max-w-sm p-4 md:p-8 h-82",
            },
            MiniReact.createElement(
                "div",
                {class: "flex"},
                MiniReact.createElement(
                    "div",
                    {class: "flex-1"},
                    MiniReact.createElement(
                        "span",
                        {class: "font-semibold"},
                        props.date
                    ),
                    MiniReact.createElement(
                        "h1",
                        {class: "font-bold text-lg uppercase"},
                        props.title
                    ),
                ),
                MiniReact.createElement(
                    "span",
                    {class: "bg-yellow-500 block flex items-center font-bold rounded-3xl px-4"},
                    props.time
                ),
            ),
            MiniReact.createElement(
                "div",
                {class: "my-4"},
                props.description
            ),
            MiniReact.createElement(
                "div",
                {class: "font-semibold flex items-center space-x-2"},
                MiniReact.createElement(
                    "i",
                    {class: "fa-solid fa-map-location-dot"},
                ),
                MiniReact.createElement("span", {class: "uppercase"},
                    props.location
                ),
            )
        ),
    );
};

export default EventCard;