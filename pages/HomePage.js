import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Footer from "../components/Footer/Footer.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = MiniReact.createElement(
      "div",
      null,
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement("main", null, "Hello world"),
      MiniReact.createElement(Footer)
    );
    this._dom = element;
    return element;
  }
}

export default HomePage;
