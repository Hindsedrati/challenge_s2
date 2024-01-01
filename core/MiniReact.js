import MiniReactDom from "./MiniReactDom.js";
import Component from "./Component.js";
import { areObjectsEqual } from "../utils/utils.js";

const MiniReact = {
  componentInstancesReference: new Map(),
  componentPropsRefecence: new Map(),
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
      let instance = MiniReact.componentInstancesReference.get(key);
      let oldProps = MiniReact.componentPropsRefecence.get(key);

      if (!instance) {
        console.log(type, "new");
        instance = new type({ ...props, key, children: processedChildren });
        MiniReact.componentInstancesReference.set(key, instance);
        MiniReact.componentPropsRefecence.set(key, props);
      } else if (!areObjectsEqual(oldProps, props)) {
        instance.props = { ...props, children: processedChildren };
        MiniReact.componentPropsRefecence.set(key, instance.props);
      }
      return instance.render();
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

  cleanupUnusedInstances: (domContent) => {
    for (const [key, instance] of MiniReact.componentInstancesReference) {
      const elementStructure = instance._dom;
      const domElement = MiniReactDom.elementReferences.get(elementStructure);

      // Vérifiez si la référence d'élément dom est présente sur la nouvelle page
      if (domElement && domContent.contains(domElement)) {
        console.log("Element is still in use:", domElement);
      } else {
        // L'élément dom n'est pas présent sur la nouvelle page, supprimez l'instance
        console.log("Removing unused instance:", instance);
        MiniReact.componentInstancesReference.delete(key);
        MiniReact.componentPropsRefecence.delete(key);
      }
    }
  },
};

export default MiniReact;
