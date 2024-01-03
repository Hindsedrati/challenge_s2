import MiniReact from "../../core/MiniReact.js";
import Component from "../../core/Component.js";
import Button from "../button/Button.js";
import EventContent from "../Modal/EventContent.js";

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
    this.state = {
      show: false,
      event: null,
    };
  }

  handleMarkerClick = (data) => {
    this.setState({ show: true, event: data });
  };

  async initMap() {
    if (typeof google !== "undefined" && google.maps) {
      const { Map } = await google.maps.importLibrary("maps");
      this.map = new Map(document.getElementById("map"), {
        center: { lat: 48.8499198, lng: 2.6370411 },
        zoom: 10,
      });

      this.addMarkers();
      this.setupMarkerCluster();
    } else {
      setTimeout(() => this.initMap(), 100);
    }
  }

  addMarkers() {
    const { filteredEvents } = this.props;

    this.markers.forEach((marker) => marker.setMap(null));
    this.markers = [];

    const svgMarker = {
      path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "green",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(0, 20),
    };

    filteredEvents &&
      filteredEvents.forEach((event, index) => {
        try {
          const lat = parseFloat(parseFloat(event.latitude) + index * 0.0001);
          const lng = parseFloat(event.longitude);

          if (isNaN(lat) || isNaN(lng)) {
            console.error("Invalid latitude or longitude:", event);
            return;
          }

          const marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.map,
            title: event.title,
            icon: svgMarker,
          });
          marker.addListener("click", () => this.handleMarkerClick(event));

          this.markers.push(marker);
        } catch (error) {
          console.error("Error creating marker:", error);
        }
      });
  }

  setupMarkerCluster() {
    if (typeof MarkerClusterer !== "undefined") {
      new MarkerClusterer(this.map, this.markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        gridSize: 50,
        maxZoom: 15,
      });
    } else {
      console.error("MarkerClusterer is not defined");
    }
  }

  render() {
    this.initMap();
    const mapElement = MiniReact.createElement("div", {
      id: "map",
      style: { height: "700px" },
    });

    const modalElement = this.state.show
      ? MiniReact.createElement(
          "div",
          {
            class:
              "modal-background transition-opacity duration-1000 ease-in opacity-0 opacity-100 flex items-center justify-center bg-black/40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
            onClick: () => this.setState({ show: false }),
          },
          MiniReact.createElement(
            "div",
            {
              class: "modal-content relative p-4 w-full max-w-2xl max-h-full",
            },
            MiniReact.createElement(
              "div",
              {
                class: "modal-inner relative bg-white rounded-lg shadow-xl",
              },
              MiniReact.createElement(Button, {
                type: "button",
                title: MiniReact.createElement("i", {
                  class: "fa-solid fa-xmark",
                }),
                class:
                  "absolute top-0 right-0 m-1 text-gray-400 bg-slate-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",
                onClick: () => this.setState({ show: false }),
              }),
              MiniReact.createElement(EventContent, { event: this.state.event })
            )
          )
        )
      : null;

    const element = MiniReact.createElement(
      "div",
      null,
      mapElement,
      modalElement
    );
    this._dom = element;
    return element;
  }
}

export default Map;
