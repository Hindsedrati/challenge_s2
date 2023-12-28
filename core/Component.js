import MiniReactDom from "./MiniReactDom.js";

export default class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this._pendingState = {};
    this._dom = null;
    this._instance;
  }

  /**
   * This method is called to set the new state of the component
   *
   * @param {Object} newState - the new state
   */
  setState(newState) {
    this._pendingState = { ...this.state, ...newState };
    MiniReactDom.scheduleUpdate(this);
  }

  /**
   * This method is called to apply the updates to the component
   */
  _update() {
    const oldElement = this._dom;

    this.state = this._pendingState;
    this._pendingState = null;

    let newElement = this.render();
    MiniReactDom.updateElement(oldElement, newElement);
  }

  render() {}
}