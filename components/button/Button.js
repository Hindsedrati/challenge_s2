import MiniReact from "../../core/MiniReact.js";

const Button = (props) => {
  return MiniReact.createElement(
    "button",
    {
      class: props.class,
      events: { click: props.onClick },
    },
    props.title
  );
};
export default Button;
