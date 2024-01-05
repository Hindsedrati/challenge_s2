import MiniReactDom from "./MiniReactDom.js";
import Component from "./Component.js";
import { areObjectsEqual } from "../utils/utils.js";

const MiniReact = {
  componentInstancesReference: new Map(),
  componentPropsRefecence: new Map(),
  instanceKeyCounter: 0,

  generateUniqueKey: () => {
    return Symbol(`__uniqueKey_${MiniReact.instanceKeyCounter++}`);
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
        instance = new type({ ...props, key, children: processedChildren });
        MiniReact.componentInstancesReference.set(key, instance);
        MiniReact.componentPropsRefecence.set(key, props);
      } else if (!areObjectsEqual(oldProps, props)) {
        instance.props = { ...props, children: processedChildren };
        MiniReact.componentPropsRefecence.set(key, instance.props);
      }

      if (typeof instance.componentDidMount === "function") {
        instance.componentDidMount();
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

      if (domElement && domContent.contains(domElement)) {
        return;
      } else {
        MiniReact.componentInstancesReference.delete(key);
        MiniReact.componentPropsRefecence.delete(key);
      }
    }
  },
};

export default MiniReact;
