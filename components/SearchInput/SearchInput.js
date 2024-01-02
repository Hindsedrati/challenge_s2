import Component from "../../core/Component.js";
import MiniReact from "../../core/MiniReact.js";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: "" };
    }

    handleSearchInput = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Recherche pour:", this.state.searchQuery);
    };

    render() {
        return MiniReact.createElement(
            "form",
            {
                class: this.props.class,
                events: {
                    submit: this.handleSearchSubmit,
                },
            },
            MiniReact.createElement("input", {
                type: "text",
                class: "flex-grow rounded-l-full py-2 px-4 w-full text-gray-700 leading-tight focus:outline-none transition duration-200 ease-in-out bg-white sm:py-1 sm:px-2",
                placeholder: "Dites moi tout ",
                value: this.state.searchQuery,
                events: {
                    input: this.handleSearchInput,
                },
            }),
            MiniReact.createElement("button", {
                type: "submit",
                class: "bg-[#D9C26C] text-white rounded-full p-2 shadow-lg hover:bg-[#b6a358] focus:outline-none w-24 h-10 flex items-center justify-center transition duration-200 ease-in-out text-md sm:w-20 sm:h-8 sm:p-1 sm:text-sm",
            }, "Rechercher")
        );
    }
}
