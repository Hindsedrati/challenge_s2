import MiniReact from "../../core/MiniReact.js";
import Image from "../Image/Image.js";
import Link from "../Link/Link.js";

const image = MiniReact.createElement(
    Image,
    {
        src: "assets/logo.svg",
        alt: "logo",
        class: "",
    }
)

const notification = [
    {
        title: "Concert en Direct !",
        description: "Rejoignez-nous pour l'ouverture du festival de musique d'été ce soir à 20h.",
        date: "Il y a 2 heures",
        type: "success",
    },
    {
        title: "Vernissage Exposition d'Art",
        description: "Découvrez l'art contemporain à la Galerie du Centre-Ville. Débute ce samedi.",
        date: "Il y a 1 jour",
        type: "info",
    },
    {
        title: "Festival de Cuisine de Rue",
        description: "Goûtez aux meilleurs plats de rue du monde. Le voyage culinaire commence demain !",
        date: "Il y a 3 heures",
        type: "warning",
    },
    {
        title: "Annonce du Marathon",
        description: "Le marathon est annulé cette année. Nous vous donnons rendez-vous l'année prochaine.",
        date: "Il y a 4 jours",
        type: "danger",
    }
];


const Header = (props) => {
    return MiniReact.createElement(
        "header",
        {
            class: "h-[159px] bg-[#FFFFFF] flex items-center justify-center mb-4",
            style: {
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)"
            }
        },
        MiniReact.createElement(
            "nav",
            {
                class: "container border-gray-200"
            },
            MiniReact.createElement(
                "div",
                {
                    class: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
                },
                MiniReact.createElement(
                    Link,
                    {
                        value: image,
                        class: "text-sm font-semibold leading-6 text-gray-900",
                        href: "/page2",
                    },
                ),
                MiniReact.createElement(
                    "div",
                    {
                        class: "hidden w-full md:block md:w-auto",
                    },
                    MiniReact.createElement(
                        "ul",
                        {
                            class: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-black",
                        },
                        ...props.links.map((link) => {
                            return MiniReact.createElement(
                                "li",
                                {},
                                MiniReact.createElement(Link,
                                    {
                                        class: "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0",
                                        href: link.href,
                                        value: link.title,
                                    }
                                )
                            )
                        })
                    )
                ),
                MiniReact.createElement("div", {
                        class: "flex items-center justify-center md:hidden border border-2 border-black rounded-full w-10 h-10 relative",
                    },
                    MiniReact.createElement("i", {
                            //notification
                            class: "fa-solid fa-bell text-xl  cursor-pointer",
                            id: "notification",
                        }
                    ),
                    MiniReact.createElement("span", {
                            class: "absolute -top-2 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-semibold",
                        },
                        notification.length
                    ),
                    MiniReact.createElement("div", {
                            class: "absolute right-0 h-0  w-[250px] h-auto bg-red-500 shadow-md z-10 rounded-md flex flex-col bg-white divide-y divide-y-gray-100 overflow-y-auto -top-[1500px] opacity-0 transition-all duration-300 ease-in-out",
                            id: "notification-content",
                        },
                        ...notification.map((notif) => {
                            let typeOfNotif = notif.type;
                            let notifColor;
                            switch (typeOfNotif) {
                                case "success":
                                    notifColor = "green-500";
                                    break;
                                case "info":
                                    notifColor = "blue-500";
                                    break;
                                case "warning":
                                    notifColor = "yellow-500";
                                    break;
                                case "danger":
                                    notifColor = "red-500";
                                    break;
                                default:
                                    notifColor = "gray-500";
                                    break;
                            }
                            return MiniReact.createElement("div", {
                                    //detect type of notification
                                    class: `flex items-center justify-between px-4 py-2 border-l-[6px] border-l-${notifColor} border-opacity-50 py-4 hover:bg-gray-100 transition duration-300 ease-in-out flex flex-col`,
                                },
                                MiniReact.createElement("h3", {
                                        class: "font-semibold w-full",
                                    },
                                    notif.title
                                ),
                                MiniReact.createElement("p", {
                                        class: "text-sm w-full",
                                    },
                                    notif.description
                                ),

                                MiniReact.createElement("span", {
                                        class: "text-xs text-gray-400 text-right w-full",
                                    },
                                    notif.date
                                ),
                            )
                        }),
                    )
                )
            )
        ),
        MiniReact.createElement("nav", {
                class: "container shadow-md h-[80px] bg-white flex items-center justify-center md:hidden fixed bottom-0 left-0 right-0 z-10",
            },
            ...props.links.map((link, index) => {
                if (index === 0) {
                    return MiniReact.createElement(
                        "div",
                        {
                            class: "flex items-center justify-center flex-col space-y-1 bg-[#E8D4A0]/50 text-gray-800 flex-1 w-full h-full ",
                        },
                        MiniReact.createElement(Link,
                            {
                                class: "",
                                href: link.href,
                                value: MiniReact.createElement("i", {
                                    class: link.icon + " text-xl",
                                }),
                            }
                        ),
                        MiniReact.createElement("span", {
                                class: "",
                            },
                            link.title
                        )
                    )
                } else {
                    return MiniReact.createElement(
                        "div",
                        {
                            class: "flex items-center justify-center flex-col space-y-1 text-gray-400 px-4 py-2 rounded-xl flex-1",
                        },
                        MiniReact.createElement(Link,
                            {
                                class: "",
                                href: link.href,
                                value: MiniReact.createElement("i", {
                                    class: link.icon + " text-xl",
                                }),
                            }
                        ),
                        MiniReact.createElement("span", {
                                class: "",
                            },
                            link.title
                        )
                    )
                }
            })
        ),
        MiniReact.createElement("script", {},
            `
            const notification = document.getElementById("notification");
            const notificationContent = document.getElementById("notification-content");
            //first come to place then opacity 1
            
            notification.addEventListener("click", () => {
                notificationContent.classList.toggle("top-10");
                //wait for the transition to end to change opacity
                setTimeout(() => {
                notificationContent.classList.toggle("opacity-0");
                }, 175);
            });
            
            `
        )
    );
};

export default Header;