import MiniReact from "../../core/MiniReact.js";
import Component from "../../core/Component.js";

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  filterEvents = (filter, discipline) => {
    let filteredEvents = props.events;

    if (filter !== "all") {
      filteredEvents = filteredEvents.filter((event) => event.type === filter);
    }

    if (discipline !== "all") {
      filteredEvents = filteredEvents.filter(
        (event) => event.discipline === discipline
      );
    }

    props.handleFilter(filteredEvents);

    this.setState({
      filter: filter,
      discipline: discipline,
    });
  };

  render() {
    const element = MiniReact.createElement(
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
    );

    this._dom = element;
    return element;
  }
}

export default Filters;
