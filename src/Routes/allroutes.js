import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Settings from "../pages/Settings/Settings";
import Skills from "../pages/Skills/Skills";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/projects/:id", component: Projects },
  { path: "/settings", component: Settings },
  {path: "/skills", component: Skills},
];

export default publicRoutes;
