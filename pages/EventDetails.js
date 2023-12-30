import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Carousel from "../components/Carousel/Carousel.js";
import Footer from "../components/Footer/Footer.js";
import ErrorPage from "./ErrorPage.js";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null,
    };
    this.event_id = MiniReact.getUrlParameters().id;

    const getEvent = async (event_id) => {
      try {
        const response = await fetch(
          `https://4dg6ej7a77reu6kwpchq3qe75u0wwndm.lambda-url.eu-north-1.on.aws/events/${event_id}`
        );
        const data = await response.json();
        if (data.data) {
          this.setState({ event: data.data[0] });
        } else {
          this.setState({ event: "NO_DATA" });
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        this.setState({ event: "REQUEST_FAILED" });
      }
    };

    getEvent(this.event_id);
  }

  render() {
    let element;

    if (!this.state.event) {
      element = MiniReact.createElement("p", null, "Chargement en cours...");
      this._dom = element;
      return element;
    }

    if (this.state.event === "NO_DATA") {
      element = MiniReact.createElement(ErrorPage);
      this._dom = element;
      return element;
    }

    element = MiniReact.createElement(
      "div",
      { class: "bg-[D2D0DE]" },
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement(
        "div",
        {
          class: "container mx-auto my-20 p-10 rounded-3xl bg-white ",
        },
        MiniReact.createElement(Carousel, {
          images: this.state.event.media?.map((image) => image.source),
        }),
        MiniReact.createElement(
          "div",
          { class: "flex justify-between my-4 md:mt-20 md:mb-16" },
          MiniReact.createElement(
            "div",
            null,
            MiniReact.createElement(
              "h1",
              {
                class: "text-2xl font-semibold md:text-3xl mb-4",
              },
              this.state.event?.title
            ),
            MiniReact.createElement("p", {}, this.state.event?.description)
          ),
          MiniReact.createElement(
            "span",
            {
              class:
                "bg-yellow-500 block flex items-center font-bold rounded-3xl py-2 px-4 self-start",
            },
            this.state.event?.time
          )
        ),
        MiniReact.createElement(
          "div",
          {
            class: "flex flex-col gap-4 mb-16",
          },
          MiniReact.createElement(
            "div",
            { class: "text-xl md:text-2xl flex gap-4" },
            MiniReact.createElement(
              "span",
              { class: "inline-block font-semibold" },
              "Lieu : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block" },
              this.state.event?.location || "-"
            )
          ),

          MiniReact.createElement(
            "div",
            { class: "text-xl md:text-2xl flex gap-4" },
            MiniReact.createElement(
              "span",
              { class: "inline-block font-semibold" },
              "Date : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block" },
              this.state.event?.date || "-"
            )
          ),
          MiniReact.createElement(
            "div",
            { class: "text-xl md:text-2xl flex gap-4" },
            MiniReact.createElement(
              "span",
              { class: "inline-block font-semibold" },
              "Type : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block" },
              this.state.event?.type || "-"
            )
          ),
          MiniReact.createElement(
            "div",
            { class: "text-xl md:text-2xl flex gap-4" },
            MiniReact.createElement(
              "span",
              { class: "inline-block font-semibold" },
              "Discipline : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block" },
              this.state.event?.discipline || "-"
            )
          )
        ),
        MiniReact.createElement("div", null, this.state.event?.content),
        MiniReact.createElement(
          "div",
          { class: "my-10" },
          MiniReact.createElement(
            "h2",
            { class: "text-2xl semi-bold mb-4" },
            "Les meilleurs spots"
          ),
          MiniReact.createElement(
            "div",
            { class: "flex flex-col gap-4 text-center" },
            MiniReact.createElement(
              "div",
              {
                class: "grid grid-cols-4",
              },
              MiniReact.createElement("div", null),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Type"
              ),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Adresse"
              ),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Detail"
              )
            ),
            MiniReact.createElement(
              "div",
              {
                class: "bg-red-100 rounded-full px-4 py-2 grid grid-cols-4",
              },
              MiniReact.createElement("img", {
                src: "../assets/concert.png",
                class: "rounded-full w-[300px]",
              }),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Breakfast in America"
              ),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "1 rue de la merde, Balleck 99999"
              ),
              MiniReact.createElement(
                "button",
                { class: "inline-block" },
                "+ Voir"
              )
            ),
            MiniReact.createElement(
              "div",
              {
                class: "bg-red-100 rounded-full px-4 py-2 grid grid-cols-4",
              },
              MiniReact.createElement("img", {
                src: "../assets/concert.png",
                class: "rounded-full w-[300px]",
              }),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Breakfast in America"
              ),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "1 rue de la merde, Balleck 99999"
              ),
              MiniReact.createElement(
                "button",
                { class: "inline-block" },
                "+ Voir"
              )
            ),
            MiniReact.createElement(
              "div",
              {
                class: "bg-red-100 rounded-full px-4 py-2 grid grid-cols-4",
              },
              MiniReact.createElement("img", {
                src: "../assets/concert.png",
                class: "rounded-full w-[300px]",
              }),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "Breakfast in America"
              ),
              MiniReact.createElement(
                "span",
                { class: "inline-block" },
                "1 rue de la merde, Balleck 99999"
              ),
              MiniReact.createElement(
                "button",
                { class: "inline-block" },
                "+ Voir"
              )
            )
          )
        )
      ),
      MiniReact.createElement(Footer)
    );

    this._dom = element;
    return element;
  }
}

export default EventDetails;
