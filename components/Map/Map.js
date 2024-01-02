// Map.js
import MiniReact from "../../core/MiniReact.js";
import Component from "../../core/Component.js";

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
  }

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

    filteredEvents.forEach((event) => {
      const marker = new google.maps.Marker({
        position: { lat: event.latitude, lng: event.longitude },
        map: this.map,
        title: event.title,
      });

      this.markers.push(marker);
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
