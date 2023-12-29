import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ErrorPage from "./pages/ErrorPage.js";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "*", component: ErrorPage },
];

export default routes;
