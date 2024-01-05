import Component from "../../core/Component.js";
import MiniReact from "../../core/MiniReact.js";
import Button from "../../components/button/Button.js";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modalOpacity: 0,
    };
  }

  handleBlur = () => {
    this.closeModal();
  };

  openModal = () => {
    this.setState({
      show: true,
      modalOpacity: 100,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    if (this.props?.show) {
      this.setState({ show: this.props?.show });
    }

    let element = MiniReact.createElement(
      "div",
      {
        events: { blur: this.handleBlur },
      },
      MiniReact.createElement(Button, {
        type: "submit",
        title: this.props.title,
        onClick: this.openModal,
        class: this.props.titleClass,
      }),
      this.state.show
        ? MiniReact.createElement(
            "div",
            {
              class:
                "transition-opacity duration-1000 ease-in opacity-0 opacity-100 flex items-center justify-center bg-black/40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
            },
            MiniReact.createElement(
              "div",
              {
                class: "relative p-4 w-full max-w-2xl max-h-full",
              },
              MiniReact.createElement(
                "div",
                {
                  class: "relative bg-white rounded-lg shadow-xl",
                },
                MiniReact.createElement(Button, {
                  type: "button",
                  title: MiniReact.createElement("i", {
                    class: "fa-solid fa-xmark",
                  }),
                  class:
                    "absolute top-0 right-0 m-1 text-gray-400 bg-slate-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",
                  onClick: this.closeModal,
                }),
                this.props.content
              )
            )
          )
        : null
    );

    this._dom = element;
    return element;
  }
}

export default Modal;
