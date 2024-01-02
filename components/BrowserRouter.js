import MiniReactDom from "../core/MiniReactDom.js";
import MiniReact from "../core/MiniReact.js";

class BrowserRouter {
  constructor(routes, rootElement) {
    this.routes = routes;
    this.rootElement = rootElement;
    this.currentRoute = null;
    this.init();
  }

  init() {
    window.addEventListener("popstate", this.handlePopState.bind(this));
    this.handlePopState();
  }

  handlePopState() {
    const { pathname } = window.location;
    this.navigate(pathname);
  }

  navigate(path) {
    const route = this.findRoute(path);

    if (route) {
      this.currentRoute = route;
      this.render();
    } else {
      console.error(`Error: No route found for ${path}`);
    }
  }

  render() {
    const component = MiniReact.createElement(this.currentRoute.component);
    const domContent = MiniReactDom.renderStructure(
      component,
      this.rootElement
    );
    this.rootElement.innerHTML = "";
    this.rootElement.appendChild(domContent);
    MiniReact.cleanupUnusedInstances(domContent);
  }

  findRoute(path) {
    return (
      this.routes.find((r) => this.matchRoute(r.path, path)) ||
      this.routes.find((r) => r.path === "*")
    );
  }

  matchRoute(pattern, path) {
    const regex = this.pathToRegex(pattern);
    const match = path.match(regex);

    const isFullMatch = match ? match[0] === path : false;
    return isFullMatch;
  }

  pathToRegex(pattern) {
    const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regexPattern = escapedPattern.replace(/:([^/]+)/g, "([^/]+)");
    return new RegExp(`^${regexPattern}$`);
  }
}

export default BrowserRouter;
