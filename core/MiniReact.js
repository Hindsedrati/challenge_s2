import Component from "../components/Component.js";

const MiniReact = {
  createElement: (MyComponent, props) => {
    if (MyComponent.prototype instanceof Component) {
      return new MyComponent(props).render();
    } else {
      return MyComponent(props);
    }
  },
  createFunctionalElement: (type, props = {}, events = {}, children = []) => ({
    type,
    events,
    children,
    props: { ...props },
  }),
};

export default MiniReact;
