import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import Settings from '../pages/Settings/Settings';

const publicRoutes=[{path:'/',component:Home},{path:'/projects',component:Projects},{path:'/projects/:id', component:Projects}

    ,{path:'/settings', component:Settings}
]


export default publicRoutes