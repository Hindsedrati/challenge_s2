import MiniReact from "../../core/MiniReact.js";

/**
 *
 * @param {src, alt, classes} props
 * @returns {MiniReact.Component}
 */
const Image = (props) => {
  return MiniReact.createFunctionalElement(
    "img",
    { src: props.src, alt: props.alt, class: props.classes },
    {},
    []
  );
};
export default Image;
