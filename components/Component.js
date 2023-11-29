export default class Component {
    constructor(props = {}) {
        this.props = props;
    }

    setState(state) { }

    createElement(type, props = {}, events = {}, children = []) {
        return {
            type,
            events,
            children,
            props: { ...props },
        };
    }
}
