import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Carousel from "../components/Carousel/Carousel.js";
import Loader from "../components/Loader/Loader.js";
import Modal from "../components/Modal/Modal.js";
import SpotContent from "../components/Modal/SpotContent.js";
import Footer from "../components/Footer/Footer.js";
import ErrorPage from "./ErrorPage.js";
import { firstLetterToUpperCase } from "../utils/utils.js";

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
        "main",
        { class: "container w-11/12 mx-auto" },
        MiniReact.createElement(
          "div",
          {
            class: "my-20 py-10 md:rounded-3xl md:bg-white ",
          },
          MiniReact.createElement(
            "div",
            { class: "w-11/12 mx-auto" },
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
              {
                class: "flex justify-between my-4 md:mt-20 md:mb-16 mt-[43px]",
              },
              MiniReact.createElement(
                "div",
                null,
                MiniReact.createElement(
                  "h2",
                  {
                    class: "text-[18] font-semibold md:text-3xl mb-4",
                  },
                  this.state.event?.title
                ),
                MiniReact.createElement(
                  "p",
                  { class: "text-[16px]" },
                  this.state.event?.description
                )
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
                class: "flex flex-col gap-4 mb-16 text-[16] my-[40px]",
              },
              MiniReact.createElement(
                "div",
                { class: "md:text-2xl flex gap-4" },
                MiniReact.createElement(
                  "span",
                  { class: "inline-block uppercase" },
                  "Lieu : "
                ),
                MiniReact.createElement(
                  "span",
                  { class: "inline-block" },
                  firstLetterToUpperCase(this.state.event?.location) || "-"
                )
              ),

              MiniReact.createElement(
                "div",
                { class: "md:text-2xl flex gap-4" },
                MiniReact.createElement(
                  "span",
                  { class: "inline-block uppercase" },
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
                { class: "md:text-2xl flex gap-4" },
                MiniReact.createElement(
                  "span",
                  { class: "inline-block uppercase" },
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
                { class: "md:text-2xl flex gap-4" },
                MiniReact.createElement(
                  "span",
                  { class: "inline-block uppercase" },
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
                { class: "text-[24px] semi-bold mb-[32px] uppercase" },
                "Les meilleurs spots"
              ),
              MiniReact.createElement(
                "div",
                {
                  class:
                    "flex flex-col justify-center items-center gap-4 md:gap-8 text-center",
                },
                MiniReact.createElement(
                  "div",
                  {
                    class: "md:grid grid-cols-4 w-full md:w-5/6 hidden",
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
                    "Nom"
                  ),
                  MiniReact.createElement(
                    "span",
                    { class: "inline-block flex justify-center items-center" },
                    "Détails"
                  )
                ),
                ...this.state.event?.spot.map((spot) =>
                  MiniReact.createElement(
                    "div",
                    {
                      class:
                        "rounded-full w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-4 relative md:bg-[#E9CE6B]",
                    },
                    MiniReact.createElement("img", {
                      src: spot.image,
                      class:
                        "rounded-xl md:rounded-full w-full h-[150px] md:h-[100px] object-cover",
                    }),
                    MiniReact.createElement(
                      "div",
                      {
                        class:
                          "flex flex-col flex-end justify-end md:grid md:grid-cols-3 md:col-span-3 absolute bottom-0 md:static w-full rounded-xl overflow-hidden bg-[#E9CE6B] bg-opacity-70 md:bg-transparent",
                      },
                      MiniReact.createElement(
                        "span",
                        { class: "md:flex justify-center items-center hidden" },
                        spot.typology
                      ),
                      MiniReact.createElement(
                        "span",
                        {
                          class: "flex justify-center items-center",
                        },
                        spot.name
                      ),
                      MiniReact.createElement(
                        "div",
                        { class: "md:flex justify-center items-center" },
                        MiniReact.createElement(Modal, {
                          title: "Voir +",
                          content: MiniReact.createElement(SpotContent, {
                            spot,
                          }),
                        })
                      )
                    )
                  )
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
