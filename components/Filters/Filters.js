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
    let filteredEvents = this.props.events;
    let filteredDisciplines;
    let filteredTypes;

    if (filter !== "all") {
      filteredEvents = filteredEvents.filter((event) => event.type === filter);
    }

    if (discipline !== "all") {
      filteredEvents = filteredEvents.filter(
        (event) => event.discipline === discipline
      );
    }

    switch (filter) {
      case "Sport de raquette":
        filteredDisciplines = ["Badminton", "Tennis de table"];
        break;
      case "Art martial":
        filteredDisciplines = ["Taekwondo"];
        break;
      case "Sport de précision":
        filteredDisciplines = ["Tir à l'arc", "Golf"];
        break;
      case "Sport collectif":
        filteredDisciplines = ["Beach-volley"];
        break;
      case "Athlétisme":
        filteredDisciplines = ["Saut à la perche"];
        break;
      case "Force":
        filteredDisciplines = ["Haltérophilie"];
        break;
      default:
        filteredDisciplines = [
          "Golf",
          "Beach-volley",
          "Tir à l'arc",
          "Badminton",
          "Saut à la perche",
          "Haltérophilie",
          "Taekwondo",
          "Tennis de table",
        ];
        break;
    }

    switch (discipline) {
      case "Golf":
        filteredTypes = ["Sport de précision"];
        break;
      case "Tir à l'arc":
        filteredTypes = ["Sport de précision"];
        break;
      case "Beach-volley":
        filteredTypes = ["Sport collectif"];
        break;
      case "Badminton":
        filteredTypes = ["Sport de raquette"];
        break;
      case "Tennis de table":
        filteredTypes = ["Sport de raquette"];
        break;
      case "Haltérophilie":
        filteredTypes = ["Force"];
        break;
      case "Saut à la perche":
        filteredTypes = ["Athlétisme"];
        break;
      case "Taekwondo":
        filteredTypes = ["Art martial"];
        break;

      default:
        filteredTypes = [
          "Sport de raquette",
          "Art martial",
          "Sport de précision",
          "Force",
          "Sport collectif",
          "Athlétisme",
        ];
        break;
    }

    this.props.handleFilter(filteredEvents);

    this.setState({
      filter: filter,
      discipline: discipline,
      disciplines: filteredDisciplines,
      types: filteredTypes,
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
            "p-2 md:py-3 md:px-4 bg-white focus:outline-none block w-36 md:w-48 border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none",
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
            "p-2 md:py-3 md:px-4 bg-white focus:outline-none block w-36 md:w-48 border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none",
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
