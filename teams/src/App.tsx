// import 'devextreme/dist/css/dx.light.css';
import { CardS } from "./templates/Card";
import { CardTemplates } from "./templates/cardTemplates";
// import MyRoutes from './routers';

const App = () => {
  return (
    /* <MyRoutes /> */
    <div className="w-full flex justify-between ">
      {/* left container */}
      <div className="w-[70%]">
        <CardTemplates title={"TAsks"} content={"hiiii"} />
      </div>
      {/* right container  */}
      <div className="w-[30%] ">
        <CardS/>
      </div>
    </div>
  );
};

export default App;
