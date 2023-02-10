import './App.css';
// import Navbar from './components/Navbar';
// import TextForms from './components/TextForms';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Rootlayout from './layouts/Rootlayout';
// import Carousel from './components/Carousel';
const router = createBrowserRouter(
  
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout/>}>

        {/* <Route index element={<TextForms/>}/> */}
      </Route>
    )

);
function App() {
  return (
  
<RouterProvider router={router}/>
  );
}

export default App;
