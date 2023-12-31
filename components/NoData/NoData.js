import MiniReact from "../../core/MiniReact.js";

const NoData = () => {
  return MiniReact.createElement(
    "div",
    {
      class: "mx-auto my-20 p-10 flex justify-center items-center ",
    },
    MiniReact.createElement(
      "p",
      { class: "text-gray-500 text-xl" },
      "Aucun événement trouvé pour les filtres appliqués"
    )
  );
};

export default NoData;
