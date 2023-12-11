import MiniReact from "../../core/MiniReact.js";

const Text = (props) => {
  return MiniReact.createElement("p", { class: props.classes }, props.title);
};

export default Text;
