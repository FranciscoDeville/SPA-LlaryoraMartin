import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import router from "./router/index.router";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
