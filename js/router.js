import { initEditor } from "./js-views/editor.js";
import { initHome } from "/js/js-views/home.js";
import { initThumbnail } from "/js/js-views/thumbnail.js";
/**
 * variable de config des toues
 */

const routeConfig = {
  routes: [
    {
      path: "/thumbnail",
      initialisation: initThumbnail,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation: initHome,
      templateUrl: "/view/home.html",
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/view/templateQuiExistePasSurLeServeur.html",
    },
    {
        path:"/editor",
        initialisation:initEditor,
        templateUrl:"/view/editor.html"
    }
  ],
};

/**
 * fonction de maintient de la route
 */

class Router {
  #currentRoute;
  get currentRoute() {
    return this.#currentRoute;
  }
  constructor(){
    document.addEventListener('DOMContentLoaded',(evt)=>{
        this.#initRouterLinks();
    })
  }
  /**
   * manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
    this.#currentRoute = routeConfig.routes.find(
      (route) => route.path === pathName
    );
   this.#instaciateCurrentRouteTemplate()

  }
  /**
   * Navigate to
   * @param {string} pathName chemin commençant par /
   */
  changeRoute(pathName) {
    history.pushState(undefined,undefined,pathName);
    this.handleRoute();
  }
  #instaciateCurrentRouteTemplate() {
    if (undefined !== this.#currentRoute.templateText) {
      this.#loadCurrentDOMContent();
    } else {
      fetch(this.#currentRoute.templateUrl)
        .then((resp) => resp.text())
        .then((t) => {
          this.#currentRoute.templateText = t;
          this.#loadCurrentDOMContent();
        });
    }
  }
  /**
   * Chargement du com avec le conten text/html de la route courante
   */
  #loadCurrentDOMContent(domContainerSelector = "article") {
    document.querySelector(domContainerSelector).innerHTML =
      this.#currentRoute.templateText;
      this.#initRouterLinks(domContainerSelector);
    if (undefined !== this.#currentRoute.initialisation) {
      this.#currentRoute.initialisation();
    }
  }
  #initRouterLinks(baseSelector='body'){
    const links=document.querySelectorAll(baseSelector+' a');
    links.forEach(link =>{
        link.removeEventListener("click",this.handleLinkEvent);
        link.addEventListener("click",this.#handleLinkEvent);
    });
}
#handleLinkEvent=(evt)=> {
evt.preventDefault();
this.changeRoute(evt.target.href)
}
}
export const router = new Router();
// router.handleRoute();
// router.changeRoute();
// console.log(router.currentRoute)
