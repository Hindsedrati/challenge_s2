import MiniReact from "../../core/MiniReact.js";

const Text = (props) => {
  return MiniReact.createFunctionalElement("p", { class: props.classes }, {}, [
    {
      type: "TEXT_NODE",
      content: props.title,
    },
  ]);
};

export default Text;
