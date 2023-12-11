import MiniReact from "../../core/MiniReact.js";

const EventCard = (props) => {
    const children = [
        MiniReact.createElement(
            "section",
            { class: "flex" },
            [
                MiniReact.createElement(
                    "div",
                    { class: "flex-1" },
                    [
                        MiniReact.createElement(
                            "span",
                            { class: "font-semibold" },
                            [props.date]
                        ),
                        MiniReact.createElement(
                            "h1",
                            { class: "font-bold text-lg uppercase" },
                            [props.title]
                        ),
                    ]
                ),
                MiniReact.createElement(
                    "span",
                    { class: "bg-yellow-500 block flex items-center font-bold rounded-3xl px-4" },
                    [props.time]
                ),
            ]
        ),
        MiniReact.createElement(
            "section",
            { class: "my-4" },
            [props.description]
        ),
        MiniReact.createElement(
            "aside",
            { class: "font-semibold flex items-center space-x-2" },
            [
                MiniReact.createElement(
                    "i",
                    { class: "fa-solid fa-map-location-dot" },
                    []
                ),
                MiniReact.createElement("span", {class: "uppercase"}, [props.location]),
            ]
        ),
    ];

    return MiniReact.createElement(
        "a",
        {
            href: props.link,
        },
        children
    );
};

export default EventCard;
