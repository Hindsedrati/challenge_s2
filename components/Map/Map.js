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

  render() {
    return MiniReact.createElement("div", {
      id: "map",
      style: { height: "400px" },
    });
  }
}

export default Map;
