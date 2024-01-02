// Map.js
import MiniReact from "../../core/MiniReact.js";
import Component from "../../core/Component.js";

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
          marker.addListener("click", () => this.handleMarkerClick(markerData));

          this.markers.push(marker);
        } catch (error) {
          console.error("Error creating marker:", error);
        }
      });
  }

  render() {
    this.initMap();

    return MiniReact.createElement("div", {
      id: "map",
      style: { height: "400px" },
    });
  }
}

export default Map;
