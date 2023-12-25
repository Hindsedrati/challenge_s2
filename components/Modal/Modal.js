import Component from "../../core/Component.js";
import MiniReact from "../../core/MiniReact.js";

/* NOTE: Affichage conditionnel:
 charger la modal au moment du clic pour ne pas précharger toutes les modales à l'avance dans le dom */



class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };

        console.log(this.state.show);

        // this.displayModal = () => {
        //     this.state.show == true
        //         ? this.setState({
        //             show: false
        //         })
        //         : this.setState({
        //             show: true
        //         })
        // };

    }

    // render() {
    //     let element = MiniReact.createElement(

    //         "button",
    //         {
    //             type: "button",
    //             class: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",
    //             'data-modal-hide': "default-modal"
    //         },

    //     );

    //     this._dom = element;
    //     return element;

    // }

    render() {
        // Main modal
        let element = MiniReact.createElement(
            // return MiniReact.createElement(
            "div",
            {
                id: "default-modal",
                tabindex: "-1",
                'aria-hidden': "true",
                class: "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            },

            MiniReact.createElement(
                "div",
                {
                    class: "relative p-4 w-full max-w-2xl max-h-full"
                },

                // Main content
                MiniReact.createElement(
                    "div",
                    {
                        class: "relative bg-white rounded-lg shadow dark:bg-gray-700"
                    },

                    // Modal Header
                    MiniReact.createElement(
                        "div",
                        {
                            class: "flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                        },

                        MiniReact.createElement(
                            "h3",
                            {
                                class: "text-xl font-semibold text-gray-900 dark:text-white"
                            },

                            MiniReact.createElement(
                                "h3",
                                {
                                    class: "text-xl font-semibold text-gray-900 dark:text-white"
                                },
                                "Text Header"
                            ),

                            MiniReact.createElement(
                                "button",
                                {
                                    type: "button",
                                    class: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",
                                    'data-modal-hide': "default-modal"
                                },

                                MiniReact.createElement(
                                    "svg",
                                    {
                                        class: "w-3 h-3",
                                        'aria-hidden': "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 14 14"
                                    },

                                    MiniReact.createElement(
                                        "path",
                                        {
                                            stroke: "button",
                                            'stroke-linecap': "round",
                                            'stroke-linejoin': "round",
                                            'stroke-width': "2",
                                            d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        },
                                    ),

                                    MiniReact.createElement(
                                        "path",
                                        {
                                            class: "sr-only"
                                        },
                                        "close modal"
                                    ),
                                )
                            )
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
                                class: "text-base leading-relaxed text-gray-500 dark:text-gray-400"
                            },
                            "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
                        ),

                        MiniReact.createElement(
                            "p",
                            {
                                class: "text-base leading-relaxed text-gray-500 dark:text-gray-400"
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
                                class: "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
                            },

                            MiniReact.createElement(
                                "button",
                                {
                                    'data-modal-hide': "default-modal",
                                    type: "button",
                                    class: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                    'data-modal-hide': "default-modal"
                                },
                                "I accept"
                            ),

                            MiniReact.createElement(
                                "button",
                                {
                                    'data-modal-hide': "default-modal",
                                    type: "button",
                                    class: "ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                                    'data-modal-hide': "default-modal"
                                },
                                "I accept"
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