import { BrowserLink } from "../components/BrowserRouter.js";
import MiniReact from "../core/MiniReact.js";
import Button from "../components/button/Button.js";

const button = MiniReact.createElement(Button, {
  title: "Click me",
  class:
    "border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white my-4",
  onClick: () => console.log("Click me"),
});

export default {
  type: "div",
  children: [
    BrowserLink({
      title: "Page 2",
      to: "/page2",
    }),
    button,
  ],
};
