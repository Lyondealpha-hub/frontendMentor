import "devextreme/dist/css/dx.light.css";
import MyRoutes from './routers';
import { MyProvider } from "./CardAPI/cardContextAPI";
import Home from "./components/demo";


const App = () => {
  return (
    
    <>
     <MyProvider>
    <div className="w-full h-full bg-gray-300 ">
      <MyRoutes />
    </div>
   </MyProvider>

    </>
  );
};

export default App;
