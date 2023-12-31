import MiniReact from "../core/MiniReact.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import ModalNew from "../components/Modal/Modal.js";
import navlinks from "../utils/navlinks.js";
import Loader from "../components/Loader/Loader.js";
import Image from "../components/Image/Image.js";
import Button from "../components/button/Button.js";
import Carousel from "../components/Carousel/Carousel.js";


const HomePage = () => {
  const dataAPI = {
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
  }



  const contentSpot =
    // Modal header
    MiniReact.createElement(
      "div",
      {
        id: "dynamic-content",
        class: ""
      },

      MiniReact.createElement(
        "div",
        {
          id: "container-header",
          class: "flex items-center justify-between p-4 md:p-5 rounded-t"
        },

        MiniReact.createElement(
          "h3",
          {
            class: "text-gray-600 body-font font-poppins"
          },
          // this.data.title,
          "Event",
        ),
      ),

      MiniReact.createElement(
        "div",
        {
          class: "flex items-start flex-row justify-between p-4 pr-8 border-b"
        },

        MiniReact.createElement(
          "div",
          {
            id: "usefull-info",
            class: "flex items-start flex-col growspace-between p-4 space-y-4"
          },

          MiniReact.createElement(
            "p",
            {
              class: "text-gray-600 body-font font-poppins"
            },
            "Type",
            // this.data.type,
          ),

          MiniReact.createElement(
            "p",
            {
              class: "text-gray-600 body-font font-poppins"
            },
            "date",
            // this.data.date,
          ),

          MiniReact.createElement(
            "p",
            {
              class: "text-gray-600 body-font font-poppins"
            },
            "horaire",
            // this.data.start_time + " - " + this.data.end_time,

          ),
        ),
      ),

      MiniReact.createElement(Carousel, {
        images: [
          "../ceo.png",
          "../assets/logo.svg",
          "../assets/concert.png",
          "../assets/spot-1.jpg",
        ],
      }),

      // Modal Body
      MiniReact.createElement(
        "div",
        {
          class: "p-4 md:p-5 space-y-4"
        },

        MiniReact.createElement(
          "p",
          {
            class: "text-base leading-relaxed text-gray-500 "
          },
          "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
          // this.data.description,
        ),

        MiniReact.createElement(
          "p",
          {
            class: "text-base leading-relaxed text-gray-500 "
          },
          "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
          // data.content,
        ),
      ),

      // Modal Footer
      MiniReact.createElement(
        "div",
        {
          class: "p-4 md:p-5 space-y-4"
        },

        MiniReact.createElement(
          "div",
          {
            class: "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b "
          },

          MiniReact.createElement(
            Button,
            {
              type: "button",
              title: "Plus d'info",
              class: "ms-3 text-white bg-[#87A397] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",
            },
          )
        )
      )
    );

  const contentEvent =

    // Modal header
    MiniReact.createElement(
      "div",
      {
        id: "dynamic-content",
        class: ""
      },

      MiniReact.createElement(
        "div",
        {
          id: "container-header",
          class: "flex items-center justify-between p-4 md:p-5 rounded-t"
        },

        MiniReact.createElement(
          "h3",
          {
            class: "text-gray-600 body-font font-poppins"
          },
          // this.data.title,
          "Event",
        ),
      ),

      MiniReact.createElement(
        "div",
        {
          class: "flex items-start flex-row justify-between p-4 pr-8 border-b"
        },

        MiniReact.createElement(
          "div",
          {
            id: "usefull-info",
            class: "flex items-start flex-col growspace-between p-4 space-y-4"
          },

          MiniReact.createElement(
            "p",
            {
              class: "text-gray-600 body-font font-poppins"
            },
            "Type",
            // this.data.type,
          ),

          MiniReact.createElement(
            "p",
            {
              class: "text-gray-600 body-font font-poppins"
            },
            "date",
            // this.data.date,
          ),

          MiniReact.createElement(
            "p",
            {
              class: "text-gray-600 body-font font-poppins"
            },
            "horaire",
            // this.data.start_time + " - " + this.data.end_time,

          ),
        ),

        MiniReact.createElement(
          "div",
          {
            class: "md:mr-16 w-32 h-32"
          },

          MiniReact.createElement(
            Image,
            {
              // src: this.data.media[0].source,
              src: "https://medias.paris2024.org/uploads/2023/02/PARIS-2024-VISUELS-PICTOGRAMMES-TENNIS-DE-TABLE-1080x1080-1.jpg?x-oss-process=image/resize,w_1081,h_1081,m_lfit/format,webp",
              alt: "Image",
              class: "w-full h-full object-cover",
            }
          )
        ),
      ),

      // Modal Body
      MiniReact.createElement(
        "div",
        {
          class: "p-4 md:p-5 space-y-4"
        },

        MiniReact.createElement(
          "p",
          {
            class: "text-base leading-relaxed text-gray-500 "
          },
          "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
          // this.data.description,
        ),

        MiniReact.createElement(
          "p",
          {
            class: "text-base leading-relaxed text-gray-500 "
          },
          "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
          // data.content,
        ),
      ),

      // Modal Footer
      MiniReact.createElement(
        "div",
        {
          class: "p-4 md:p-5 space-y-4"
        },

        MiniReact.createElement(
          "div",
          {
            class: "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b "
          },

          MiniReact.createElement(
            Button,
            {
              type: "button",
              title: "Plus d'info",
              class: "ms-3 text-white bg-[#87A397] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",
            },
          )
        )
      )
    );




  return MiniReact.createElement(
    "div",
    null,
    MiniReact.createElement(Header, {
      links: navlinks,
    }),
    MiniReact.createElement(
      "div",
      {
        class: "h-screen",
      },
      "Hola !"
    ),

    MiniReact.createElement(ModalNew, {
      data: dataAPI,
      content: contentEvent,
    }),

    MiniReact.createElement(ModalNew, {
      data: dataAPI,
      content: contentSpot,
    }),

    MiniReact.createElement(Footer)
  );
};

export default HomePage;
