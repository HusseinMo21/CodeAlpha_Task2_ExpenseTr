import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import BalanceContxtProvider from './Context/BalanceContxt';
import { RouterProvider, createHashRouter } from 'react-router-dom';
function App(props) {
   const router = createHashRouter([
      {index: true, element: <Home />},
    ])
  return <RouterProvider router={router}>
    {props.children}
  </RouterProvider>
}

export default App;
