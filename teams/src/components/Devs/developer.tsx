import { Boards } from "../../templates/Boards";
import { CardS } from "../../templates/Card";
import { Timer } from "../../templates/Timer";
import { CardTemplates } from "../../templates/cardTemplates";

interface props {}
export const Developers: React.FC<props> = () => {
  const data = [
    { title: "Create new Todo", headerColor: "red" },
    { title: "Start with", headerColor: "orange" },
    { title: "In-Progress", headerColor: "blue" },
    // { title: "Review", headerColor: "pink" },
    { title: "Done", headerColor: "green" }
  ];
  return (
    <div >
      <div >
        <div>
          <div className="flex justify-between py-5 px-5 ">
            <div className="w-[40%]">
              <CardTemplates content="Task Assignment" title="FrontEnd" />
            </div>
            <div className='w-[100%] '>
            <Timer/>
            </div>
            <div className="w-[20%]">
              <CardS />
            </div>
          </div>
        </div>

        <hr />
        <div className="grid grid-cols-4 gap-5 p-8">
          {data.map(({ title, headerColor }, id) => (
            <Boards
              key={id}
              title={title}
              headerColor={headerColor}
              data={[]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
