import MiniReact from "../../core/MiniReact.js";

const Button = (props) => {
  return MiniReact.createFunctionalElement(
    "button",
    {
      class: props.class,
    },
    { click: [props.onClick] },
    [
      {
        type: "TEXT_NODE",
        content: props.title,
      },
    ]
  );
};
export default Button;