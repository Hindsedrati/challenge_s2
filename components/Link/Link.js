import MiniReact from "../../core/MiniReact.js";

const Link = (props) => {
    return MiniReact.createElement(
    "a",
    { 
        class: props.classes, 
        href: props.href,
        events: { 
            click: [
                function (event) {
                    event.preventDefault();
                    history.pushState(null, null, props.href);
                    console.log("lien");
                },
            ]
        }
    },
    
    props.title
    );
};

export default Link;