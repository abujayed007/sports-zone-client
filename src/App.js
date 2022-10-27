import logo from './logo.svg';
import './App.css';
import { Outlet, RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import Darkmode from './Pages/Others/DarkMode/Darkmode';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
        
      </RouterProvider>
      
    </div>
  );
}

export default App;
