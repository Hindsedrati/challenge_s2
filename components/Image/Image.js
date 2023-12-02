import MiniReact from "../../core/MiniReact.js";

const Image = (props) => {
  return MiniReact.createFunctionalElement(
    "img",
    { src: props.src, alt: props.alt, class: props.classes },
    {},
    []
  );
};
export default Image;
