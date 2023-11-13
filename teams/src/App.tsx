// import 'devextreme/dist/css/dx.light.css';
import MyRoutes from "./routers";
import { CardS } from "./templates/Card";
import { CardTemplates } from "./templates/cardTemplates";
// import MyRoutes from './routers';

const App = () => {
  return (
     <div>
      <MyRoutes /> 
     </div>
    // <div className="w-full flex justify-between ">
    //   {/* left container */}
    //   <div className="w-[100%] px-10 py-10">
    //     <CardTemplates title={"frontend dev"} content={"hiiii"} />
    //   </div>
    //   {/* right container  */}
    //   <div className="w-[30%] px-10 py-5  ">
    //     <CardS/>
    //   </div>
    // </div>
  );
};

export default App;
