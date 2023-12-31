import MiniReact from "../../core/MiniReact.js";

const Link = (props) => {
  return MiniReact.createElement(
    "a",
    {
      class: props.class,
      href: props.href,
      events: {
        click: function (event) {
          event.preventDefault();
          history.pushState(null, null, props.href);
        },
      },
    },

    props.value
  );
};

export default Link;
