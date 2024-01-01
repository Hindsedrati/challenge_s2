import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Carousel from "../components/Carousel/Carousel.js";
import Loader from "../components/Loader/Loader.js";
import Footer from "../components/Footer/Footer.js";
import ErrorPage from "./ErrorPage.js";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null,
    };
    this.event_id = MiniReact.getUrlParameters().event;

    const getEvent = async (event_id) => {
      try {
        const response = await fetch(
          `https://4dg6ej7a77reu6kwpchq3qe75u0wwndm.lambda-url.eu-north-1.on.aws/events/${event_id}`
        );
        const data = await response.json();
        if (data.data) {
          this.setState({ event: data.data[0] });
          console.log(data.data[0]);
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
        MiniReact.createElement(
          "h1",
          { class: "w-fit mx-auto text-2xl font-semibold uppercase mb-10" },
          "Détails de l'évènement"
        ),
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
              "h2",
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
            this.state.event?.start_time
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
              { class: "inline-block font-semibold uppercase" },
              "Lieu : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block text-md" },
              this.state.event?.location || "-"
            )
          ),

          MiniReact.createElement(
            "div",
            { class: "text-xl md:text-2xl flex gap-4" },
            MiniReact.createElement(
              "span",
              { class: "inline-block font-semibold uppercase" },
              "Date : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block text-md" },
              this.state.event?.date || "-"
            )
          ),
          MiniReact.createElement(
            "div",
            { class: "text-xl md:text-2xl flex gap-4" },
            MiniReact.createElement(
              "span",
              { class: "inline-block font-semibold uppercase" },
              "Type : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block text-md" },
              this.state.event?.type || "-"
            )
          ),
          MiniReact.createElement(
            "div",
            { class: "text-xl md:text-2xl flex gap-4" },
            MiniReact.createElement(
              "span",
              { class: "inline-block font-semibold uppercase" },
              "Discipline : "
            ),
            MiniReact.createElement(
              "span",
              { class: "inline-block text-md" },
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
              MiniReact.createElement("div"),
              MiniReact.createElement(
                "span",
                { class: "inline-block flex justify-center items-center" },
                "Type"
              ),
              MiniReact.createElement(
                "span",
                { class: "inline-block flex justify-center items-center" },
                "Adresse"
              ),
              MiniReact.createElement(
                "span",
                { class: "inline-block flex justify-center items-center" },
                "Détails"
              )
            ),
            ...this.state.event?.spot.map((event) =>
              MiniReact.createElement(
                "div",
                {
                  class: "bg-red-100 rounded-full px-4 py-2 grid grid-cols-4",
                },
                MiniReact.createElement("img", {
                  src: event.image,
                  class: "rounded-full w-[350px] h-[100px] object-cover",
                }),
                MiniReact.createElement(
                  "span",
                  { class: "inline-block flex justify-center items-center" },
                  event.typology
                ),
                MiniReact.createElement(
                  "span",
                  { class: "inline-block flex justify-center items-center" },
                  event.address.toLowerCase() + ", " + event.district
                ),
                MiniReact.createElement(
                  "button",
                  { class: "flex justify-center items-center" },
                  "+ Voir"
                )
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
