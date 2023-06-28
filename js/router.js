/**
 * variable de config des toues
 */

const routeConfig = {
  routes: [
    {
      path: "/thumbnail",
      initialisation: undefined,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation: () => {
        document.querySelector("#home button").addEventListener("click", () => {
          alert("c'est gagné");
        });
      },
      templateUrl: "/view/home.html",
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/view/templateQuiExistePasSurLeServeur.html",
    },
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
  changeRoute(pathName) {}
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
    if (undefined !== this.#currentRoute.initialisation) {
      this.#currentRoute.initialisation();
    }
  }
}
export const router = new Router();
// router.handleRoute();
// router.changeRoute();
// console.log(router.currentRoute)
