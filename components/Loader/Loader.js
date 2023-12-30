import MiniReact from "../../core/MiniReact.js";

const Loader = () => {
  return MiniReact.createElement("div", {
    class:
      "animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full",
  });
};

export default Loader;
