import Component from "../../core/Component.js";
import MiniReact from "../../core/MiniReact.js";

export default class SearchInput extends Component {
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
                class: "flex-grow rounded-l-full py-2 px-4 w-full appearance-none focus:outline-none",
                placeholder: "Dites moi tout ",
                value: this.state.searchQuery,
                events: {
                    input: this.handleSearchInput,
                },
            }),
            MiniReact.createElement("button", {
                type: "submit",
                class: "bg-[#D9C26C] font-semibold px-4 py-2 focus:outline-none w-fit rounded-r-full",
            }, "Rechercher")
        );
    }
}