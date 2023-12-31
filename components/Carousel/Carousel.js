import MiniReact from "../../core/MiniReact.js";
import Component from "../../core/Component.js";
import Button from "../button/Button.js";
import Image from "../Image/Image.js";

const previous = MiniReact.createElement("i", {
  class: "fa-solid fa-chevron-left text-black",
});

const next = MiniReact.createElement("i", {
  class: "fa-solid fa-chevron-right text-black",
});

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.images = props.images;
    this.state = {
      count: 0,
      current: 0,
    };

    this.handleNextClick = () => {
      this.state.current < this.images.length - 1
        ? this.setState({ current: this.state.current + 1 })
        : this.setState({ current: 0 });
    };

    this.handlePreviousClick = () => {
      this.state.current > 0
        ? this.setState({ current: this.state.current - 1 })
        : this.setState({ current: this.images.length - 1 });
    };
  }

  render() {
    let element = MiniReact.createElement(
      "div",
      { class: "w-11/12 mx-auto overflow-x-auto relative" },
      MiniReact.createElement(
        "div",
        {
          class: "flex justify-center items-center w-full h-[300px]",
        },
        ...this.images.map((image, index) =>
          index === this.state.current
            ? MiniReact.createElement(Image, {
                src: image,
                alt: "mon_image",
                class: "max-w-full max-h-full object-contain",
              })
            : null
        ),
        MiniReact.createElement(Button, {
          title: previous,
          class:
            "absolute left-[10px] bg-white rounded-full p-2 cursor-pointer",
          onClick: this.handlePreviousClick,
        }),
        MiniReact.createElement(Button, {
          title: next,
          class:
            "absolute right-[10px] bg-white rounded-full p-2 cursor-pointer",
          onClick: this.handleNextClick,
        })
      )
    );

    this._dom = element;
    return element;
  }
}

export default Carousel;
