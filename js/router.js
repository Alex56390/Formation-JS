/**
 * variable de config des toues
 */

const routeConfig = {
  routes: [
    {
        path:'/thumbnail',
        initialisation:undefined,
        templateUrl:'/view/thumbnail.html'
    },
    {
        path:'/',
        initialisation:undefined,
        templateUrl:'/view/html.html'
    },
    {
        path:'/break',
        initialisation:undefined,
        templateUrl:'/view/templateQuiExistePasSurLeServeur.html'
    }
  ],
};

/**
 * fonction de maintient de la route
 */

class Router{
    /**
     * manage la route en cours
     */
    handleRoute() {
        const pathName = location.pathname;
        console.log(pathName);
    };
    /**
     * Navigate to
     * @param {string} pathname chemin commençant par /
     */
    changeRoute(pathname){

    }
}
const router = new Router();
router.handleRoute();
router.changeRoute();