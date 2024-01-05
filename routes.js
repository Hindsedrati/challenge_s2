import HomePage from "./pages/HomePage.js";
import MapPage from "./pages/MapPage.js";
import Events from "./pages/Events.js";
import EventDetails from "./pages/EventDetails.js";
import ErrorPage from "./pages/ErrorPage.js";

const routes = [
  { path: "/", component: HomePage },
  { path: "/map", component: MapPage },
  { path: "/events", component: Events },
  { path: "/event-details", component: EventDetails },
  { path: "*", component: ErrorPage },
];

export default routes;
