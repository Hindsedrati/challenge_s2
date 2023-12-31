import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Card from "../components/Event/Card.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Footer from "../components/Footer/Footer.js";
import Loader from "../components/Loader/Loader.js";
import ErrorPage from "./ErrorPage.js";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
    };

    const getEvents = async () => {
      try {
        const response = await fetch(
          "https://4dg6ej7a77reu6kwpchq3qe75u0wwndm.lambda-url.eu-north-1.on.aws/events"
        );
        const data = await response.json();
        if (data.data) {
          this.setState({ events: data.data });
        } else {
          this.setState({ events: "NO_DATA" });
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        this.setState({ event: "REQUEST_FAILED" });
      }
    };

    getEvents();
  }

  render() {
    let element;

    if (!this.state.events) {
      element = MiniReact.createElement(
        "div",
        { class: "h-screen" },
        MiniReact.createElement(Header, {
          links: navlinks,
        }),
        MiniReact.createElement(
          "div",
          {
            class:
              "container h-screen mx-auto my-20 p-10 rounded-3xl bg-white flex justify-center items-center ",
          },
          MiniReact.createElement(Loader)
        ),
        MiniReact.createElement(Footer)
      );
      this._dom = element;
      return element;
    }

    if (this.state.events === "NO_DATA") {
      element = MiniReact.createElement(ErrorPage);
      this._dom = element;
      return element;
    }

    element = MiniReact.createElement(
      "div",
      null,
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement(
        "main",
        { class: "container mx-auto" },
        MiniReact.createElement(
          "h1",
          { class: "w-fit mx-auto my-20 uppercase text-3xl" },
          "Liste des évènements"
        ),
        MiniReact.createElement(
          "div",
          {
            class:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center px-2 md:px-0",
          },
          ...this.state.events.map((event) => {
            return MiniReact.createElement(Card, event);
          })
        )
      ),
      MiniReact.createElement(Footer)
    );

    this._dom = element;
    return element;
  }
}

export default Events;
