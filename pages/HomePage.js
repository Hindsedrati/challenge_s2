import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import navlinks from "../utils/navlinks.js";
import Loader from "../components/Loader/Loader.js";
import Map from "../components/Map/Map.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = MiniReact.createElement(
      "div",
      null,
      MiniReact.createElement(Header, {
        links: navlinks,
      }),
      MiniReact.createElement(
        "div",
        { class: "container mx-auto" },
        MiniReact.createElement(
          "h1",
          { class: "text-3xl max-w-screen-md mx-auto my-10" },
          MiniReact.createElement("span", null, "Explorez l'excitation des "),
          MiniReact.createElement(
            "span",
            {
              class:
                "inline-block text-5xl animate-pulse text-transparent bg-clip-text bg-gradient-to-br from-slate-600 via-[#87A397] to-yellow-500 font-semibold",
            },
            "JO 2024"
          ),
          MiniReact.createElement(
            "span",
            null,
            " avec notre Carte Interactive des Événements et Spots Incontournables !"
          )
        ),
        MiniReact.createElement(
          "h2",
          { class: "text-lg mb-10" },
          "Plongez dans l'univers palpitant des Jeux Olympiques de 2024 grâce à notre carte interactive ! Découvrez tous les événements et lieux incontournables, et personnalisez votre expérience en filtrant par catégorie et type d'événement. Que vous soyez passionné de sports, de culture ou d'aventures, trouvez les moments qui vous ressemblent et créez des souvenirs inoubliables au cœur de cet événement mondial."
        ),
        MiniReact.createElement(Map)
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
      )
    );
    this._dom = element;
    return element;
  }
}

export default HomePage;
