import MiniReact from "../core/MiniReact.js";

const ErrorPage = () => {
  return MiniReact.createElement(
    "div",
    { class: "flex justify-center align-center" },
    "Page Not Found"
  );
};

export default ErrorPage;
