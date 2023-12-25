
import Header from "../components/Header/Header.js";
import Image from "../components/Image/Image.js";
import MiniReact from "../core/MiniReact.js";
import navlinks from "../utils/navlinks.js";
import events from "../database/events.js";




const header = MiniReact.createElement(Header, {
        links:navlinks,
    },
);
const id = new URLSearchParams(window.location.search).get('id');
const event = events.find(event => event.id === id);
export default {
    type:"div",
    children:[
        header,
        MiniReact.createElement("div",{
            class: "container px-2 md:px-0 mx-auto",
        },
            MiniReact.createElement(Image,{
                src:event?.image,
                alt:event?.title,
                class:"h-48 w-full object-cover object-center rounded-lg shadow-md"
            }),
        MiniReact.createElement("h1",{
            class: "text-2xl font-semibold md:text-3xl my-4"
        },event?.title),
        MiniReact.createElement("p",{},event?.description),
        MiniReact.createElement("div",{
            class: "my-8"
        },
            MiniReact.createElement("p",{
                class:"my-4 flex items-center"
            },MiniReact.createElement("span",{class:"font-semibold text-xl md:text-2xl "},"Lieu  "+event?.location),MiniReact.createElement("span",{
                class: "ml-auto bg-yellow-500 block flex items-center font-bold rounded-3xl px-4"
            },event?.time)),
            MiniReact.createElement("p",{
                class: "font-semibold text-xl md:text-2xl mb-4"
            },event?.date),
        ),
            MiniReact.createElement("div",{},event?.content),
            MiniReact.createElement("div",
                {
                    class: "flex items-center justify-around space-x-8 mt-8 flex-wrap"
                },
                MiniReact.createElement("div",
                    {},
                    MiniReact.createElement("span",{
                        class: "font-semibold"
                    },'TYPE D’EVENEMENT'),
                    MiniReact.createElement("p",{
                        class: "font-semibold"
                    },event?.type)
                    ),
                MiniReact.createElement("div",
                    {},
                    MiniReact.createElement("span",{
                        class: "font-semibold"
                    },'CATEGORIE DE L’EVENEMENT'),
                    MiniReact.createElement("p",{
                        class: "font-semibold"
                    },event?.category)
                    )
                )
        ),



    ]
}