import Component from "../../core/Component.js";
import MiniReact from "../../core/MiniReact.js";
import Button from "../../components/button/Button.js"

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            modalOpacity: 0,
        };

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
                            modalOpacity: 100,
                        })
                    }

                }
            )

                /* remove dark, aria hidden, id pas bons, tab index - fini
                Fondu - en cours
                Ombre portée - en cours
                Au milieu du parent - fini
                Fond grisé autour - fini mais blanchâtre
                éventuellement fermer la modale si on appuie autour 
                croix font awesome
                contenu dynamique?
                */

                : MiniReact.createElement(
                    // return MiniReact.createElement(
                    "div",
                    {
                        id: "default-modal",
                        class: "transition-opacity duration-1000 ease-in opacity-0 opacity-100 flex items-center justify-center backdrop-blur-none bg-white/30 bg-grey:800 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
                        // class: "drop-shadow-x overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
                        // class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-opacity transition-property:opacity transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms",
                        // class: `transition-opacity opacity-${this.state.modalOpacity}`, // Ajoutez les classes de transition et d'opacité
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

                            // Modal Header
                            MiniReact.createElement(
                                "div",
                                {
                                    class: "flex items-center justify-between p-4 md:p-5 border-b rounded-t"
                                },

                                MiniReact.createElement(
                                    "h3",
                                    {
                                        class: "text-xl font-semibold text-gray-900"
                                    },

                                    MiniReact.createElement(
                                        "h3",
                                        {
                                            class: "text-xl font-semibold text-gray-900"
                                        },
                                        "Text Header"
                                    ),

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
                                            class: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",
                                            onClick: () => {
                                                console.log("click close")
                                                this.setState({
                                                    show: !this.state.show
                                                })
                                            }
                                        },

                                        // MiniReact.createElement(
                                        //     "svg",
                                        //     {
                                        //         class: "w-3 h-3",
                                        //         xmlns: "http://www.w3.org/2000/svg",
                                        //         fill: "none",
                                        //         viewBox: "0 0 14 14"
                                        //     },

                                        //     MiniReact.createElement(
                                        //         "path",
                                        //         {
                                        //             stroke: "button",
                                        //             'stroke-linecap': "round",
                                        //             'stroke-linejoin': "round",
                                        //             'stroke-width': "2",
                                        //             d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        //         },
                                        //     ),

                                        //     MiniReact.createElement(
                                        //         "path",
                                        //         {
                                        //             class: "sr-only"
                                        //         },
                                        //         "close modal"
                                        //     ),
                                    ),
                                )
                            ),

                            // Modal Body
                            MiniReact.createElement(
                                "div",
                                {
                                    class: "p-4 md:p-5 space-y-4"
                                },

                                MiniReact.createElement(
                                    "p",
                                    {
                                        class: "text-base leading-relaxed text-gray-500 "
                                    },
                                    "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
                                ),

                                MiniReact.createElement(
                                    "p",
                                    {
                                        class: "text-base leading-relaxed text-gray-500 "
                                    },
                                    "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                                ),
                            ),

                            // Modal Footer
                            MiniReact.createElement(
                                "div",
                                {
                                    class: "p-4 md:p-5 space-y-4"
                                },

                                MiniReact.createElement(
                                    "div",
                                    {
                                        class: "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b "
                                    },

                                    MiniReact.createElement(
                                        "button",
                                        {
                                            type: "button",
                                            class: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                                        },
                                        "I accept"
                                    ),

                                    MiniReact.createElement(
                                        Button,
                                        {
                                            type: "button",
                                            title: "Fermer",
                                            class: "ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",
                                            onClick: () => {
                                                console.log("click close")
                                                this.setState({
                                                    show: !this.state.show
                                                })
                                            }
                                        },
                                    )
                                )
                            )
                        )
                    )
                )
        )

        this._dom = element;
        return element;
    }
}


export default Modal;