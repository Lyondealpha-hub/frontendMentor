
import "devextreme/dist/css/dx.light.css";
import MyRoutes from './routers';
import { CardTemplates } from "./templates/cardTemplates";
import { CardS } from "./templates/Card";
import { Boards } from "./templates/Boards";
import { Main } from "./components/Devs/developer";
const App = () => {
  return (
    // <div className="w-full h-full bg-gray-300 p-5">
    //   <MyRoutes />
    // </div>
    <>
    <div className="flex justify-between py-5 px-5">
      <div>
        <CardTemplates content='Task Assignment' title="FrontEnd" />
      </div>
      <div className="w-[20%]">
        <CardS />
      </div>
      </div>
      <div className="p-5">
        <Main />
      </div>
    </>
  );
};

export default App;
