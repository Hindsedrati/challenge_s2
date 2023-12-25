import MiniReact from "../../core/MiniReact.js";
import EventCard from "./EventCard.js";

const EventList = (props)=>{
    return MiniReact.createElement('div',{
        class: "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center px-2 md:px-0",
    },
        ...props.cards.map((card)=> {
            return MiniReact.createElement(EventCard, card)
        })
        )
}


export default EventList;