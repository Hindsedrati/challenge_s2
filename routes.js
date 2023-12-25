import page1 from "./pages/page1.js";
import page2 from "./pages/page2.js";
import evenements from "./pages/evenements.js";
import evenementDetail from "./pages/evenement-detail.js";

export default {
  "/": page1,
  "/page1": page1,
  "/page2": page2,
  "/evenements": evenements,
  "/evenement-detail": evenementDetail,
};
