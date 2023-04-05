import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Landing from './Components/Landing/Landing';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

let routers = createHashRouter([
  {path:'', element:<Layout /> , children:[
    {path:'/', element:<Landing/>},
    {path:'landing', element:<Landing/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'about', element:<About/>},
    {path:'contact', element:<Contact/>}
  ]}
])
function App() {
  
  return (
    <RouterProvider router={routers}/>
  );
}

export default App;
