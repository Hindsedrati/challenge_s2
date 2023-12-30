import { BrowserLink } from "../components/BrowserRouter.js";
import EventCard from "../components/EventCard/EventCard.js";
import Footer from "../components/Footer/Footer.js";
import MiniReact from "../core/MiniReact.js";
import Button from "../components/button/Button.js";
import Link from "../components/Link/Link.js";
import Image from "../components/Image/Image.js";
import Header from "../components/Header/Header.js";
import SearchInput from "../components/SearchInput/SearchInput.js";
import Modal from "../components/Modal/Modal.js";

const data = JSON.parse(localStorage.getItem("data") || "{}");

const accueil = MiniReact.createElement(Link, {
    value: "Accueil",
    class: "text-sm font-semibold leading-6 text-gray-900",
    href: "/page2",
});

const button = MiniReact.createElement(Button, {
    title: "Click me",
    class:
        "border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white my-4",
    onClick: () => console.log("Click me"),
});

const image = MiniReact.createElement(Image, {
    src: "../ceo.png",
    alt: "Mon image",
    class: "rounded-full",
});

const eventCard = MiniReact.createElement(EventCard, {
    link: "https://google.com",
    target: "_blank",
    date: "22/07/2024",
    title: "NATATION",
    time: "20:00",
    description:
        "Assistez à l'éblouissante compétition de natation aux Jeux Olympiques, où les meilleurs nageurs mondiaux se mesurent dans des courses à couper le souffle. Vivez chaque virage et chaque sprint dans une ambiance électrisante !",
    location: "STADE DE FRANCE, FRANCE",
    image: "img/path" // Remplacez par le chemin de votre image.
});

const footer = MiniReact.createElement(Footer);

const searchInput = MiniReact.createElement(SearchInput);

const navLinks = [
    {
        title: "Accueil",
        class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
        href: "/",
    },
    {
        title: "Evenements",
        class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
        href: "#",
    }
]


const header = MiniReact.createElement(Header, {
    links: navLinks,
},
);

const dataModal = {
    title: "Stade de France",
    type: "Natation",
    date: "24/08/2024",
    hour: "14:00",
    // media: "https://medias.paris2024.org/uploads/2023/02/PARIS-2024-VISUELS-PICTOGRAMMES-ATHLETISME-1080x1080-1.jpg?x-oss-process=image/resize,w_1081,h_1081,m_lfit/format,webp"
    // media: "https://img.olympics.com/images/image/private/t_s_w2440/t_s_16_9_g_auto/f_auto/primary/p7uaimdvojxgp3ttxye4"
    media: "https://medias.paris2024.org/uploads/2023/03/ATHLETISME_Mascotte_OLY_2D_RVB.png?x-oss-process=image/resize,w_1000,h_200,m_lfit/format,webp"
};

var dataAPI = {
    id: "29a43434-2603-4852-ac92-15e23c37da41",
    created_at: "2023-12-30T15:20:06.08444+00:00",
    title: "TENNIS DE TABLE - SIMPLE HOMMES ET FEMMES, TOUR 1",
    discipline: "Tennis de table",
    type: "Sport de raquette",
    date: "28/07/2024 - 29/07/2024",
    day: "2-3",
    start_time: "10:00",
    end_time: "14:00",
    description: "Les épreuves de tennis de table aux Jeux olympiques d'été de 2024 se déroulent au Paris Expo Porte de Versailles, à Paris en France, du 27 juillet au 10 août 2024. Il s'agit de la 10e apparition du tennis de table aux Jeux olympiques.",
    content: "Plongez au cœur de l'action frénétique du tennis de table aux Jeux olympiques d'été de 2024, du 27 juillet au 10 août, au Paris Expo Porte de Versailles. Dans l'arène parisienne, les raquettes s'entrechoqueront, les balles fuseront à une vitesse fulgurante, et les joueurs rivaliseront pour la gloire olympique. C'est la 10e apparition du tennis de table aux Jeux, et les passionnés du monde entier peuvent s'attendre à une compétition acharnée où les légendes de ce sport se mesureront aux étoiles montantes. Les regards seront tournés vers des maîtres de la table, tels que Ma Long, détenteur de multiples titres olympiques, qui cherchera à asseoir sa domination face à une concurrence acharnée.",
    location: "ARENA PARIS SUD 4, ILE-DE-FRANCE, PARIS (75015)",
    latitude: "48.8304715",
    longitude: "2.2867541",
    category: "Tennis de table",
    time: null,
    media: [
        { source: "https://medias.paris2024.org/uploads/2023/02/PARIS-2024-VISUELS-PICTOGRAMMES-TENNIS-DE-TABLE-1080x1080-1.jpg?x-oss-process=image/resize,w_1081,h_1081,m_lfit/format,webp" },
        { source: "https://img.olympics.com/images/image/private/t_s_w2440/t_s_16_9_g_auto/f_auto/primary/yhqyxkx7fh801kjbqfpv" },
        { source: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ma_Long_ATTC2017_66.jpeg" },
        { source: "https://medias.paris2024.org/uploads/2023/03/TENNIS-DE-TABLE_Mascotte_OLY_2D_RVB.png?x-oss-process=image/resize,w_1000,h_200,m_lfit/format,webp" }
    ]
};



const modal = MiniReact.createElement(Modal, {
    // data: dataModal,
    data: dataAPI,
},
);

// const modal = MiniReact.createElement(Modal);

export default {
    type: "div",
    children: [
        // BrowserLink({
        //   title: "Page 2",
        //   to: "/page2",
        // }),
        header,
        // button,
        // accueil,
        // image,
        // eventCard,
        // searchInput,
        // buttonModal,
        modal,
        footer
    ],
};