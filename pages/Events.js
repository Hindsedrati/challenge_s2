import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Card from "../components/Event/Card.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Paginate from "../components/Paginate/Paginate.js";
import Footer from "../components/Footer/Footer.js";
import Loader from "../components/Loader/Loader.js";
import NoData from "../components/NoData/NoData.js";
import ErrorPage from "./ErrorPage.js";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      filteredEvents: null,
      currentPage: 1,
      eventsPerPage: 6,
      filter: "all",
      discipline: "all",
      types: [
        "Sport de raquette",
        "Art martial",
        "Sport de précision",
        "Haltérophilie",
        "Force",
        "Sport collectif",
        "Athlétisme",
      ],
      disciplines: [
        "Golf",
        "Beach-volley",
        "Tir à l'arc",
        "Badminton",
        "Saut à la perche",
        "Haltérophilie",
        "Taekwondo",
        "Tennis de table",
      ],
    };
    this.childrenKey = this.generateUniqueKey();
    this.getEvents();
  }

  getEvents = async () => {
    try {
      const response = await fetch(
        "https://4dg6ej7a77reu6kwpchq3qe75u0wwndm.lambda-url.eu-north-1.on.aws/events"
      );
      const data = await response.json();
      if (data.data) {
        this.setState({
          events: data.data,
          filteredEvents: data.data,
        });
      } else {
        this.setState({ events: "NO_DATA" });
      }
    } catch (error) {
      console.error("Error fetching event:", error);
      this.setState({ event: "REQUEST_FAILED" });
    }
  };

  filterEvents = (filter, discipline) => {
    let filteredEvents = this.state.events;

    if (filter !== "all") {
      filteredEvents = filteredEvents.filter((event) => event.type === filter);
    }

    if (discipline !== "all") {
      filteredEvents = filteredEvents.filter(
        (event) => event.discipline === discipline
      );
    }

    const totalPages = Math.ceil(
      filteredEvents.length / this.state.eventsPerPage
    );
    const newCurrentPage =
      this.state.currentPage > totalPages ? totalPages : this.state.currentPage;

    this.setState({
      filteredEvents: filteredEvents,
      filter: filter,
      discipline: discipline,
      currentPage: newCurrentPage,
    });
  };

  handlePagination = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

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

    let indexOfLastEvent =
      this.state.currentPage !== 0
        ? this.state.currentPage * this.state.eventsPerPage
        : this.state.filteredEvents.length;
    let indexOfFirstEvent = indexOfLastEvent - this.state.eventsPerPage;

    indexOfFirstEvent = Math.max(0, indexOfFirstEvent);

    const currentEvents = this.state.filteredEvents.slice(
      indexOfFirstEvent,
      indexOfLastEvent
    );

    const content =
      currentEvents.length > 0
        ? MiniReact.createElement(
            "div",
            {
              class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
            },
            ...currentEvents.map((event) => {
              return MiniReact.createElement(Card, event);
            })
          )
        : MiniReact.createElement(NoData);

    element = MiniReact.createElement(
      "div",
      { class: "min-h-screen h-fit" },
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement(
        "main",
        { class: "p-3 container mx-auto h-2/3" },
        MiniReact.createElement(
          "h1",
          { class: "w-fit mx-auto my-20 uppercase text-3xl" },
          "Liste des évènements"
        ),
        MiniReact.createElement(
          "div",
          {
            class: "flex items-center  space-x-2 my-10",
          },
          MiniReact.createElement(
            "select",
            {
              class:
                "py-3 px-4 bg-white focus:outline-none block w-48 border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none",
              events: {
                change: (e) => {
                  this.filterEvents(e.target.value, this.state.discipline);
                },
              },
            },
            MiniReact.createElement(
              "option",
              this.state.filter === "all"
                ? {
                    value: "all",
                    selected: true,
                  }
                : { value: "all" },
              "Type de sport"
            ),
            ...this.state.types.map((type) => {
              return MiniReact.createElement(
                "option",
                this.state.filter === type
                  ? {
                      value: type,
                      selected: true,
                    }
                  : {
                      value: type,
                    },
                type
              );
            })
          ),
          MiniReact.createElement(
            "select",
            {
              class:
                "py-3 px-4 bg-white focus:outline-none block w-48 border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none",
              events: {
                change: (e) => {
                  this.filterEvents(this.state.filter, e.target.value);
                },
              },
            },
            MiniReact.createElement(
              "option",
              this.state.discipline === "all"
                ? {
                    value: "all",
                    selected: true,
                  }
                : { value: "all" },
              "Discipline"
            ),
            ...this.state.disciplines.map((discipline) => {
              return MiniReact.createElement(
                "option",
                this.state.discipline === discipline
                  ? {
                      value: discipline,
                      selected: true,
                    }
                  : {
                      value: discipline,
                    },
                discipline
              );
            })
          )
        ),
        content
      ),
      this.state.filteredEvents.length > this.state.eventsPerPage &&
        this.state.currentPage <=
          Math.ceil(this.state.filteredEvents.length / this.state.eventsPerPage)
        ? MiniReact.createElement(Paginate, {
            key: this.childrenKey,
            eventsPerPage: this.state.eventsPerPage,
            totalEvents: this.state.filteredEvents.length,
            handlePagination: this.handlePagination,
          })
        : null,
      MiniReact.createElement(Footer)
    );

    this._dom = element;
    return element;
  }
}

export default Events;
