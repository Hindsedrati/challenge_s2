import MiniReact from "../../core/MiniReact.js";
import Component from "../../core/Component.js";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.timeLeft(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ timeLeft: this.props.timeLeft() });
    }, 1000);
  }

  render() {
    const { jours, heures, minutes, secondes } = this.state.timeLeft;
    const element = MiniReact.createElement(
      "div",
      {
        class:
          "flex items-center justify-center text-center bg-[#87A397] md:rounded-full mb-[30px] py-4 md:p-8 md:my-[96px]",
      },
      MiniReact.createElement(
        "div",
        {
          class:
            "grid grid-cols-4 gap-8 text-lg md:text-2xl lg:text-5xl font-semibold text-white",
        },
        MiniReact.createElement(
          "span",
          { class: "block" },
          `${jours} `,
          MiniReact.createElement("span", { class: "block" }, "JOURS")
        ),
        MiniReact.createElement(
          "span",
          { class: "block" },
          `${heures} `,
          MiniReact.createElement("span", { class: "block" }, "HRS")
        ),
        MiniReact.createElement(
          "span",
          { class: "block" },
          `${minutes} `,
          MiniReact.createElement("span", { class: "block" }, "MIN")
        ),
        MiniReact.createElement(
          "span",
          { class: "block" },
          `${secondes} `,
          MiniReact.createElement("span", { class: "block" }, "SEC")
        )
      )
    );
    this._dom = element;
    return element;
  }
}

export default Countdown;
