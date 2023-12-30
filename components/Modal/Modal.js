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

                /*
                Tache:
                Fondu - en cours
                éventuellement fermer la modale si on appuie autour - non fait
                contenu dynamique - en cours
                Police titre modal - en cours --> j'ai importé la police dans index.html et créer un fichier de config
                Faire modal spot et modal event
                    ---> intégrer carousel sur modal spot
                */



                : MiniReact.createElement(
                    // return MiniReact.createElement(
                    "div",
                    {
                        id: "default-modal",
                        class: "transition-opacity duration-1000 ease-in opacity-0 opacity-100 flex items-center justify-center bg-black/40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
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
                                    id: "container-header",
                                    class: "flex items-center justify-between p-4 md:p-5 rounded-t"
                                },

                                MiniReact.createElement(
                                    "h3",
                                    {
                                        // class: "Raleway text-xl font-semibold text-gray-900"
                                        class: "text-gray-600 body-font font-poppins"
                                    },
                                    this.data.title,
                                    // "Header title",
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
                                ),
                            ),

                            MiniReact.createElement(
                                "div",
                                {
                                    // class: "flex items-center justify-between p-4 md:p-5 border-b rounded-t"
                                    class: "flex items-start flex-row justify-between p-4 pr-8 border-b"
                                },

                                MiniReact.createElement(
                                    "div",
                                    {
                                        id: "usefull-info",
                                        // class: "flex items-center justify-between p-4 md:p-5 border-b rounded-t"
                                        class: "flex items-start flex-col growspace-between p-4 space-y-4"
                                    },

                                    MiniReact.createElement(
                                        "p",
                                        {
                                            // class: "Raleway text-xl font-semibold text-gray-900"
                                            class: "text-gray-600 body-font font-poppins"
                                        },
                                        // "Test 1",
                                        this.data.type,
                                    ),

                                    MiniReact.createElement(
                                        "p",
                                        {
                                            // class: "Raleway text-xl font-semibold text-gray-900"
                                            class: "text-gray-600 body-font font-poppins"
                                        },
                                        this.data.date,
                                    ),

                                    MiniReact.createElement(
                                        "p",
                                        {
                                            // class: "Raleway text-xl font-semibold text-gray-900"
                                            class: "text-gray-600 body-font font-poppins"
                                        },
                                        // "Test 1",
                                        this.data.start_time + " - " + this.data.end_time,

                                    ),
                                ),

                                MiniReact.createElement(
                                    "div",
                                    {
                                        // class: "flex items-center justify-between p-4 md:p-5 border-b rounded-t"
                                        class: "md:mr-16 w-32 h-32"
                                    },

                                    MiniReact.createElement(
                                        Image,
                                        {
                                            src: this.data.media[0].source,
                                            // src: "assets/logo.svg",
                                            alt: "Image",
                                            // class: "object-contain",
                                            // class: "object-scale-down",
                                            class: "w-full h-full object-cover",
                                        }
                                    )
                                ),
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
                                    // "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
                                    this.data.description,
                                ),

                                MiniReact.createElement(
                                    "p",
                                    {
                                        class: "text-base leading-relaxed text-gray-500 "
                                    },
                                    // "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                                    this.data.content,
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