import EventList from "../components/Event/EventList.js";
import Header from "../components/Header/Header.js";
import MiniReact from "../core/MiniReact.js";
import events from "../database/events.js";
import navlinks from "../utils/navlinks.js";


const header = MiniReact.createElement(Header, {
        links:navlinks,
    },
);


const eventList = MiniReact.createElement(EventList,{
    cards:events,
})
export default {
    type:"div",
    children:[
        header,
        eventList
    ]
}