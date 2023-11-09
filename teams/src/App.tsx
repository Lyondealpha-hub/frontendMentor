// import 'devextreme/dist/css/dx.light.css';
import { Cards } from "./templates/Card";
import { CardTemplates } from "./templates/cardTemplates";
// import MyRoutes from './routers';

const App = () => {
  return (
    /* <MyRoutes /> */
    <div className="w-full flex justify-between ">
      {/* left container */}
      <div className="w-[60%]">
        <CardTemplates />
      </div>
      {/* right container  */}
      <div className="w-[40%] ">
        <Cards />
      </div>
    </div>
  );
};

export default App;
