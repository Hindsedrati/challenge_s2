import MiniReact from "../../core/MiniReact.js";

const Link = (props) => {
  return MiniReact.createElement(
    "a",
    { class: props.classes, href: props.href },
    props.title
  );
};

export default Link;
