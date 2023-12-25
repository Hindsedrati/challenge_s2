import Component from "./Component.js";

const MiniReact = {
  componentInstances: new WeakMap(),

  createElement: (type, props = {}, ...children) => {
    const processedChildren = children.map((child) =>
      typeof child === "object" ? child : MiniReact.createTextElement(child)
    );

    if (type.prototype instanceof Component) {
      return new type({ ...props, children: processedChildren }).render();
    } else if (typeof type === "function") {
      return type({ ...props, children: processedChildren });
    } else {
      return {
        type,
        children: processedChildren,
        props: { ...props },
      };
    }
  },
  createTextElement: (text) => {
    return {
      type: "TEXT_NODE",
      content: text,
    };
  },
};

export default MiniReact;
