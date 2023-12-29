import MiniReact from "../core/MiniReact.js";

const AboutPage = () => {
  const parameters = MiniReact.getUrlParameters();
  console.log(parameters);
  return MiniReact.createElement(
    "div",
    { class: "flex justify-center align-center gap-10" },
    MiniReact.createElement("p", null, "About page"),
    parameters.page
  );
};

export default AboutPage;
