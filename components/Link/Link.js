import MiniReact from "../../core/MiniReact.js";

const Link = (props) => {
    return MiniReact.createFunctionalElement("a", { class: props.classes, href: props.href }, {}, [
        {
            type: "TEXT_NODE",
            content: props.title,
        },
    ]);
};

export default Link;