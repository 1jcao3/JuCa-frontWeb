import { Route, Routes } from 'react-router-dom';
import publicRoutes from './allroutes';

export default function Index() {
  return (
    <Routes>
     

     {publicRoutes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={<route.component></route.component>} 
          />
        ))}
        </Routes>
  )
}
