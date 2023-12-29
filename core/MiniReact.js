import Component from "./Component.js";

const MiniReact = {
  componentInstances: new Map(),
  instanceKeyCounter: 0,

  generateUniqueKey: () => {
    return Symbol(`__uniqueKey_${MiniReact.instanceKeyCounter}`);
  },

  createElement: (type, props = {}, ...children) => {
    MiniReact.counter = 0;
    const processedChildren = children.map((child) =>
      typeof child === "object" ? child : MiniReact.createTextElement(child)
    );

    if (type.prototype instanceof Component) {
      const key = props.key || MiniReact.generateUniqueKey();
      let instance = MiniReact.componentInstances.get(key);
      if (!instance) {
        instance = new type({ ...props, key, children: processedChildren });
        MiniReact.componentInstances.set(key, instance);
      }

      return instance.render();

      // const instance = new type({ ...props, children: processedChildren });
      // return instance.render();
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

  getUrlParameters: function () {
    const search = window.location.search;

    const params = new URLSearchParams(search);
    const result = {};

    for (const [key, value] of params) {
      result[key] = encodeURIComponent(value);
    }
    return result;
  },
};

export default MiniReact;
