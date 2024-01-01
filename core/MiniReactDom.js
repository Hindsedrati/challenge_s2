import BrowserRouter from "../components/BrowserRouter.js";

const MiniReactDom = {
  parentReferences: new Map(),
  elementReferences: new Map(),
  scheduledUpdates: [],

  render: function (rootElement, routes) {
    const router = new BrowserRouter(routes, rootElement);

    const oldPushState = history.pushState;
    history.pushState = function (state, title, url) {
      oldPushState.call(history, state, title, url);
      window.dispatchEvent(new Event("popstate"));
    };

    window.onpopstate = this;
  },

  renderStructure: function generateDom(structure, parent) {
    let element;

    if (typeof structure.type === "string") {
      if (structure.type === "TEXT_NODE") {
        return document.createTextNode(structure.content);
      }
      element = document.createElement(structure.type);
    }
    if (structure.props) {
      for (const propName in structure.props) {
        if (propName === "style") {
          Object.assign(element.style, structure.props[propName]);
          // } else if (propName.startsWith("data-")) {
          //   element.dataset[propName.replace("data-", "")] =
          //     structure.props[propName];
        } else if (propName === "events") {
          for (const eventName in structure.props[propName]) {
            element.addEventListener(
              eventName,
              structure.props[propName][eventName]
            );
          }
        } else {
          element.setAttribute(propName, structure.props[propName]);
        }
      }
    }

    if (structure.children) {
      for (const child of structure.children) {
        if (child !== null) {
          const childDOM = this.renderStructure(child, element);
          MiniReactDom.elementReferences.set(child, childDOM);
          element.appendChild(childDOM);
        }
      }
    }
    MiniReactDom.elementReferences.set(structure, element);
    MiniReactDom.parentReferences.set(structure, parent);

    return element;
  },

  constructClassInstance: function (ComponentClass, props) {
    const instance = new ComponentClass(props);
    return instance;
  },

  diff: function (oldTree, newTree) {
    if (oldTree === null || newTree === null) {
      return;
    }

    if (oldTree.type !== newTree.type) {
      return true;
    }

    if (oldTree.props && newTree.props) {
      const oldProps = Object.keys(oldTree.props);
      const newProps = Object.keys(newTree.props);

      if (oldProps.length !== newProps.length) {
        return true;
      }

      for (let i = 0; i < oldProps.length; i++) {
        const propName = oldProps[i];
        if (oldTree.props[propName] !== newTree.props[propName]) {
          return true;
        }
      }
    }

    if (oldTree.children && newTree.children) {
      if (oldTree.children.length !== newTree.children.length) {
        return true;
      }

      for (let i = 0; i < oldTree.children.length; i++) {
        if (MiniReactDom.diff(oldTree.children[i], newTree.children[i])) {
          return true;
        }
      }
    }

    return false;
  },

  flushScheduledUpdates: function () {
    MiniReactDom.scheduledUpdates.forEach((component) => {
      component._update();
    });
    MiniReactDom.scheduledUpdates = [];
  },

  scheduleUpdate: function (component) {
    MiniReactDom.scheduledUpdates.push(component);
    setTimeout(MiniReactDom.flushScheduledUpdates, 0);
  },

  updateElement: function (oldElement, newElement) {
    const hasChanges = MiniReactDom.diff(oldElement, newElement);

    let parent = MiniReactDom.parentReferences.get(oldElement);
    let oldElementDom = MiniReactDom.elementReferences.get(oldElement);
    let newElementDom = MiniReactDom.renderStructure(newElement, parent);
    const isChild = parent.contains(oldElementDom);

    console.log(hasChanges, newElementDom, isChild);
    if (hasChanges) {
      if (isChild) {
        parent.replaceChild(newElementDom, oldElementDom);
        MiniReactDom.parentReferences.set(newElement, parent);
        MiniReactDom.elementReferences.set(newElement, newElementDom);
      }
    }
  },
};

export default MiniReactDom;
