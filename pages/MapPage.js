import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import navlinks from "../utils/navlinks.js";
import Loader from "../components/Loader/Loader.js";
import Map from "../components/Map/Map.js";
import Filters from "../components/Filters/Filters.js";
import Footer from "../components/Footer/Footer.js";

class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: null,
      filteredEvents: null,
    };

    this.childrenKey1 = this.generateUniqueKey();
    this.childrenKey2 = this.generateUniqueKey();
    this.getEvents();
  }

  handleFilter = (events) => {
    this.setState({ filteredEvents: events });
  };

  getEvents = async () => {
    try {
      const response = await fetch(
        "https://4dg6ej7a77reu6kwpchq3qe75u0wwndm.lambda-url.eu-north-1.on.aws/events"
      );
      const data = await response.json();
      if (data.data) {
        this.setState({
          events: data.data,
          filteredEvents: data.data,
        });
      } else {
        this.setState({ events: "NO_DATA" });
      }
    } catch (error) {
      console.error("Error fetching event:", error);
      this.setState({ event: "REQUEST_FAILED" });
    }
  };

  render() {
    let element;

    if (!this.state.events) {
      element = MiniReact.createElement(
        "div",
        { class: "h-screen" },
        MiniReact.createElement(Header, {
          links: navlinks,
        }),
        MiniReact.createElement(
          "div",
          {
            class:
              "container h-screen mx-auto my-20 p-10 rounded-3xl bg-white flex justify-center items-center ",
          },
          MiniReact.createElement(Loader)
        ),
        MiniReact.createElement(Footer)
      );
      this._dom = element;
      return element;
    }

    element = MiniReact.createElement(
      "div",
      null,
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement(
        "div",
        { class: "container w-11/12 mx-auto" },
        MiniReact.createElement(
          "h1",
          { class: "text-3xl lg:text-5xl mx-auto my-10 md:mt-20" },
          MiniReact.createElement("span", null, "Explorez l'excitation des "),
          MiniReact.createElement(
            "span",
            {
              class:
                "inline-block animate-pulse text-transparent bg-clip-text bg-gradient-to-br from-slate-600 via-[#87A397] to-yellow-500 font-semibold",
            },
            "JO 2024"
          ),
          MiniReact.createElement(
            "span",
            null,
            " avec notre carte interactive des événements et spots incontournables !"
          )
        ),
        MiniReact.createElement(Filters, {
          key: this.childrenKey1,
          events: this.state.events,
          handleFilter: this.handleFilter,
        }),
        MiniReact.createElement(Map, {
          key: this.childrenKey2,
          filteredEvents: this.state.filteredEvents,
        })
      ),
      MiniReact.createElement(Footer),
      MiniReact.createElement(
        "script",
        null,
        ((g) => {
          var h,
            a,
            k,
            p = "The Google Maps JavaScript API",
            c = "google",
            l = "importLibrary",
            q = "__ib__",
            m = document,
            b = window;
          b = b[c] || (b[c] = {});
          var d = b.maps || (b.maps = {}),
            r = new Set(),
            e = new URLSearchParams(),
            u = () =>
              h ||
              (h = new Promise(async (f, n) => {
                await (a = m.createElement("script"));
                e.set("libraries", [...r] + "");
                for (k in g)
                  e.set(
                    k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                    g[k]
                  );
                e.set("callback", c + ".maps." + q);
                a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                d[q] = f;
                a.onerror = () => (h = n(Error(p + " could not load.")));
                a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                m.head.append(a);
              }));
          d[l]
            ? console.warn(p + " only loads once. Ignoring:", g)
            : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
        })({
          key: "AIzaSyAXZqEqos0IcaKLODVFyriAPnUjmuWlXRw",
        })
      ),
      MiniReact.createElement("script", {
        src: "https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js",
        src: "https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js",
      })
    );
    this._dom = element;
    return element;
  }
}

export default MapPage;
