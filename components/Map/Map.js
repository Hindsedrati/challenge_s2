// Map.js
import MiniReact from "../core/MiniReact.js";
import Component from "../core/Component.js";

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });

    this.addMarkers();
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
    return MiniReact.createElement("div", {
      id: "map",
      style: { height: "400px" },
    });
  }
}

export default Map;
