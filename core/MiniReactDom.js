import BrowserRouter from "../components/BrowserRouter.js";

const MiniReactDom = {
  parentReferences: new Map(),
  elementReferences: new Map(),
  scheduledUpdates: [],

  render: function (rootElement, routes) {
    MiniReactDom.parent = rootElement;
    BrowserRouter.bind(this)(routes, rootElement);
  },

  renderStructure: function generateDom(structure) {
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
        } else if (propName.startsWith("data-")) {
          element.dataset[propName.replace("data-", "")] =
            structure.props[propName];
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
          const childDOM = this.renderStructure(child);
          MiniReactDom.elementReferences.set(child, childDOM);
          MiniReactDom.parentReferences.set(child, element);
          element.appendChild(childDOM);
        }
      }
    }

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

    const parent = MiniReactDom.parentReferences.get(oldElement);
    let oldElementDom = MiniReactDom.elementReferences.get(oldElement);
    let newElementDom = MiniReactDom.renderStructure(newElement);
    const isChild = parent.contains(oldElementDom);

    if (hasChanges) {
      if (isChild) {
        parent.replaceChild(newElementDom, oldElementDom);
        MiniReactDom.parentReferences.set(newElement, parent);
        MiniReactDom.elementReferences.set(newElement, newElementDom);
      }
    }
  },
  // updateElement: function (oldElement, newElement) {
  //   const hasChanges = MiniReactDom.diff(oldElement, newElement);

  //   let parent = MiniReactDom.parentReferences.get(oldElement);
  //   let oldElementDom = MiniReactDom.elementReferences.get(oldElement);
  //   let newElementDom = MiniReactDom.renderStructure(newElement);
  //   const isChild = parent ? parent.contains(oldElementDom) : false;

  //   if (hasChanges) {
  //     if (isChild) {
  //       if (!newElement.children) {
  //         parent.replaceChild(newElementDom, oldElementDom);
  //         MiniReactDom.elementReferences.set(newElement, newElementDom);
  //         MiniReactDom.parentReferences.set(newElement, parent);
  //       } else {
  //         if (newElement.children && newElement.children.length) {
  //           for (let i = 0; i < newElement.children.length; i++) {
  //             const oldChild = oldElement.children[i];
  //             const newChild = newElement.children[i];

  //             // Vérifiez si la référence existe avant de mettre à jour
  //             if (MiniReactDom.elementReferences.has(oldChild)) {
  //               // Récursive pour les enfants
  //               MiniReactDom.updateElement(oldChild, newChild);
  //               console.log("Oiuoi");
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // },
  updateFragment: function () {},
  udpdateHostComponent: function () {},
  updateFunctionComponent: function () {},
  updateClassComponent: function () {},
};

export default MiniReactDom;
