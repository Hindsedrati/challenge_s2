import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Card from "../components/Event/Card.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Footer from "../components/Footer/Footer.js";
import Loader from "../components/Loader/Loader.js";
import ErrorPage from "./ErrorPage.js";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: null,
            filter: "all",
            discipline:"all",
            types: [
                "Sport de raquette",
                "Art martial",
                "Sport de précision",
                "Haltérophilie",
                "Force",
                "Sport collectif",
                "Athlétisme"
            ],
            disciplines: [
                "Golf",
                "Beach-volley",
                "Tir à l'arc",
                "Badminton",
                "Saut à la perche",
                "Haltérophilie",
                "Taekwondo",
                "Tennis de table"
            ],
        };
        this.getEvents();
    }

    getEvents = async () => {
        try {
            const response = await fetch(
                "https://4dg6ej7a77reu6kwpchq3qe75u0wwndm.lambda-url.eu-north-1.on.aws/events"
            );
            const data = await response.json();
            if (data.data) {
                if (this.state.filter && this.state.filter !== "all") {
                    data.data = data.data.filter((event) => {
                        return event.type === this.state.filter
                    })
                    if (this.state.discipline && this.state.discipline !== "all") {
                        data.data = data.data.filter((event) => {
                            return event.discipline === this.state.discipline
                        })
                    }
                }
                if (this.state.discipline && this.state.discipline !== "all") {
                    data.data = data.data.filter((event) => {
                        return event.discipline === this.state.discipline
                    })
                    if (this.state.filter && this.state.filter !== "all") {
                        data.data = data.data.filter((event) => {
                            return event.type === this.state.filter
                        })
                    }
                }
                if (data.data.length === 0) {
                    this.setState({events: "FILTER-EMPTY"});
                    return;
                }
                this.setState({events: data.data});
            } else {
                this.setState({events: "NO_DATA"});
            }
        } catch (error) {
            console.error("Error fetching event:", error);
            this.setState({event: "REQUEST_FAILED"});
        }
    };

    render() {
        let element;

        if (!this.state.events) {
            element = MiniReact.createElement(
                "div",
                {class: "h-screen"},
                MiniReact.createElement(Header, {
                    links: navlinks,
                }),
                MiniReact.createElement(
                    "div",
                    {
                        class:
                            "container h-screen mx-auto my-20 p-10 rounded-3xl bg-white flex justify-center items-center ",
                    },
                    MiniReact.createElement(Loader)
                ),
                MiniReact.createElement(Footer)
            );
            this._dom = element;
            return element;
        }

        if (this.state.events === "NO_DATA") {
            element = MiniReact.createElement(ErrorPage);
            this._dom = element;
            return element;
        }
        if(this.state.events === "FILTER-EMPTY"){
            element = MiniReact.createElement(
                "div",
                { class: "pt-32 flex flex-col justify-between h-screen" },
                MiniReact.createElement(
                    "div",
                    {
                        class: "container mx-auto p-10 rounded-3xl bg-white h-4/6 ",
                    },
                    MiniReact.createElement(
                        "div",
                        { class: "w-fit mx-auto" },
                        MiniReact.createElement(
                            "h1",
                            {
                                class:
                                    "text-xl font-semibold mb-8 border-b-2 border-black pb-2 w-fit",
                            },
                            "Aucun évènement trouvé"
                        ),
                        MiniReact.createElement(
                            "p",
                            { class: "text-xl" },
                            "Désolé, la recherche que vous avez effectuée n'a donné aucun résultat!"
                        ),
                        MiniReact.createElement(
                            "button",
                            {
                                class: "bg-[#E9CE6B] text-white font-bold py-2 px-4 rounded-full w-fit mt-4",
                                events: {
                                    click: () => {
                                        this.setState({filter: "all", discipline:"all"});
                                        this.getEvents();
                                    },
                                },
                            },
                            "Réinitialiser la recherche"
                        )
                    )
                ),
                MiniReact.createElement(Footer)
            );
            this._dom = element;
            return element;
        }

        element = MiniReact.createElement(
            "div",
            null,
            MiniReact.createElement(Header, {
                links: navlinks,
            }),
            MiniReact.createElement(
                "main",
                {class: "container mx-auto"},
                MiniReact.createElement(
                    "h1",
                    {class: "w-fit mx-auto my-20 uppercase text-3xl"},
                    "Liste des évènements"
                ),
                MiniReact.createElement("div",
                    {
                        class: "flex items-center  space-x-2 my-10",
                    },
                    MiniReact.createElement("select",
                        {
                            class: "py-3 px-4 bg-white focus:outline-none block w-48 border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none",
                            events: {
                                change: (e) => {
                                    this.setState({filter: e.target.value});
                                    this.getEvents();
                                },
                            },
                        },
                        MiniReact.createElement("option", this.state.filter === "all" ? {
                            value: "all",
                            selected: true
                        } : {value: "all"}, "Tous les évènements"),
                        ...this.state.types.map((type) => {
                            return MiniReact.createElement("option", this.state.filter === type ? {
                                value: type,
                                selected: true
                            } : {
                                value: type,
                            }, type)
                        })
                    ),
                    MiniReact.createElement("select",
                        {
                            class: "py-3 px-4 bg-white focus:outline-none block w-48 border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none",
                            events: {
                                change: (e) => {
                                    this.setState({discipline: e.target.value});
                                    this.getEvents();
                                },

                            },
                        },
                        MiniReact.createElement("option", this.state.discipline === "all" ? {
                            value: "all",
                            selected: true
                        } : {value: "all"}, "Toutes les disciplines"),
                        ...this.state.disciplines.map((discipline) => {
                            return MiniReact.createElement("option", this.state.discipline === discipline ? {
                                value: discipline,
                                selected: true
                            } : {
                                value: discipline,
                            }, discipline)
                        })
                    )
                ),
                MiniReact.createElement(
                    "div",
                    {
                        class:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center px-2 md:px-0",
                    },
                    ...this.state.events.map((event) => {
                        return MiniReact.createElement(Card, event);
                    })
                )
            ),
            MiniReact.createElement(Footer)
        );

        this._dom = element;
        return element;
    }
}

export default Events;
