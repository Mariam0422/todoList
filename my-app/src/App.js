import Register from './view/pages/auth/register';
import Login from './view/pages/auth/login';
import {
  Route,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'; 
import './App.css';
import MainLayout from './view/layouts/MainLayouts';
import Cabinet from './view/pages/cabinet';



const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='cabinet' element={<Cabinet/>} />
    </Route>
  )
)
function App() {
  return (
    <div className="App">
       <RouterProvider router={route}/>
    </div>
  );
}

export default App;
