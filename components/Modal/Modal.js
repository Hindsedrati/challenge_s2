import Component from "../../core/Component.js";
import MiniReact from "../../core/MiniReact.js";
import Button from "../../components/button/Button.js";
import Image from "../Image/Image.js";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            modalOpacity: 0,
        };


        this.data = props.data;
        this.content = props.content;

        console.log(this.state.show);
    }

    render() {
        // Main modal
        let element = MiniReact.createElement(
            "div",
            null,
            !this.state.show ? MiniReact.createElement(
                Button,
                {
                    type: "submit",
                    title: "Open modal",
                    // class: "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
                    onClick: () => {
                        console.log("click modal")
                        this.setState({
                            show: !this.state.show,
                            modalOpacity: 100, // je voulais mettre une variation d'opacité en state pour la récupéré dans la classe (un des commentaire de la div id=default-modal")
                        })
                    }

                }
            )


                : MiniReact.createElement(
                    // return MiniReact.createElement(
                    "div",
                    {
                        id: "default-modal",
                        class: "transition-opacity duration-1000 ease-in opacity-0 opacity-100 flex items-center justify-center bg-black/40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
                    },
                    // console.log("opacity: " + this.state.modalOpacity),

                    MiniReact.createElement(
                        "div",
                        {
                            class: "relative p-4 w-full max-w-2xl max-h-full"
                        },

                        // Main content
                        MiniReact.createElement(
                            "div",
                            {
                                class: "relative bg-white rounded-lg shadow-xl"
                            },

                            // ABSOLUTE VERSION
                            MiniReact.createElement(
                                Button,
                                {
                                    type: "button",
                                    title: MiniReact.createElement(
                                        "i",
                                        {
                                            class: "fa-solid fa-xmark",
                                        },
                                    ),
                                    class: "absolute top-0 right-0 m-6 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",
                                    onClick: () => {
                                        console.log("click close")
                                        this.setState({
                                            show: !this.state.show
                                        })
                                    }
                                },
                            ),

                            // Content injection
                            this.content

                        )
                    )
                )
        )

        this._dom = element;
        return element;
    }
}


export default Modal;