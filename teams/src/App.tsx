
import "devextreme/dist/css/dx.light.css";
// import { Main } from "./components/Devs/developer";
// import { Cards } from "./templates/cards";
import MyRoutes from './routers';
import {Cards} from './templates/cardsTemplate2';

const App = () => {
  return (
    <div className="w-full h-full bg-gray-300 p-5">
      <MyRoutes />
    </div>
  );
};

export default App;
