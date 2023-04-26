import logo from './logo.svg';
import { Toaster, toast } from 'react-hot-toast';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
