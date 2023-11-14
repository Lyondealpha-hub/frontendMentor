
import "devextreme/dist/css/dx.light.css";

// import { Cards } from "./templates/cards";
// import { SubItem } from "./templates/subitem";

import MyRoutes from './routers';
const App = () => {
  return (<>
    <div className="w-full h-full bg-gray-300 ">
      <MyRoutes />
    </div>
      {/* <Cards/>
      <SubItem/> */}
      </>
  );
};

export default App;
