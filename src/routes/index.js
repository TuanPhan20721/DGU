import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Admin from "~/pages/Admin";
const publicRoutes = [
    { path: '/' ,component: Home},
    { path: '/following' ,component: Following},
    { path: '/admin' ,component: Admin, layout: null}

];
const privateRoutes = [

]
export {publicRoutes,privateRoutes}