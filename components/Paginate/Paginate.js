import MiniReact from "../../core/MiniReact.js";
import Component from "../../core/Component.js";

class Paginate extends Component {
  constructor(props) {
    super(props);
    this.eventsPerPage = props.eventsPerPage;
    this.totalEvents = props.totalEvents;
    this.handlePagination = props.handlePagination;
    this.state = {
      currentPage: 1,
    };

    this.pageNumber = [];

    for (
      let i = 1;
      i <= Math.ceil(this.totalEvents / this.eventsPerPage);
      i++
    ) {
      this.pageNumber.push(i);
    }

    this.paginate = this.paginate.bind(this);
  }

  paginate(number) {
    this.setState({ currentPage: number });
    this.handlePagination(number);
  }

  render() {
    const Previous = MiniReact.createElement("i", {
      class: "fa-solid fa-chevron-left",
    });

    const Next = MiniReact.createElement("i", {
      class: "fa-solid fa-chevron-right",
    });

    const element = MiniReact.createElement(
      "div",
      { class: "w-fit mx-auto my-10" },
      MiniReact.createElement(
        "ul",
        { class: "flex gap-2" },
        MiniReact.createElement(
          "li",
          {
            class: `px-4 py-3 border-2 bg-white rounded-md cursor-pointer ${
              this.state.currentPage <= 1
                ? "border-slate-300 text-slate-300"
                : "border-black text-black"
            }`,
            events: {
              click: () =>
                this.paginate(
                  this.state.currentPage > 1
                    ? this.state.currentPage - 1
                    : this.state.currentPage
                ),
            },
          },
          Previous
        ),

        ...this.pageNumber.map((number, index) =>
          MiniReact.createElement(
            "li",
            {
              class: `${
                number === this.state.currentPage
                  ? "border-blue-600"
                  : "border-slate-300"
              } px-4 py-3 border-2 bg-white rounded-md cursor-pointer`,
              events: { click: () => this.paginate(number) },
            },
            number
          )
        ),
        MiniReact.createElement(
          "li",
          {
            class: `px-4 py-3 border-2 bg-white rounded-md cursor-pointer ${
              this.state.currentPage >= this.pageNumber.length
                ? "border-slate-300 text-slate-300"
                : "border-black text-black"
            }`,
            events: {
              click: () =>
                this.paginate(
                  this.state.currentPage < this.pageNumber.length
                    ? this.state.currentPage + 1
                    : this.state.currentPage
                ),
            },
          },
          Next
        )
      )
    );
    this._dom = element;
    return element;
  }
}

export default Paginate;