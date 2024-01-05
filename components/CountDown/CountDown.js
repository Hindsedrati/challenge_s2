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
          "flex items-center justify-center text-center bg-[#87A397] md:rounded-full mb-[30px] md:p-8 md:my-[96px]",
      },
      MiniReact.createElement(
        "div",
        {
          class:
            "grid grid-cols-4 md:gap-4 text-xl md:text-5xl font-bold text-white",
        },
        MiniReact.createElement("span", { class: "bloc" }, `${jours} JOURS`),
        MiniReact.createElement("span", { class: "bloc" }, `${heures} HRS`),
        MiniReact.createElement("span", { class: "bloc" }, `${minutes} MIN`),
        MiniReact.createElement("span", { class: "bloc" }, `${secondes} SEC`)
      )
    );
    this._dom = element;
    return element;
  }
}

export default Countdown;
