import { Boards } from "../../templates/Boards";
import { CardS } from "../../templates/Card";
import { Timer } from "../../templates/Timer";
import { CardTemplates } from "../../templates/cardTemplates";

interface props {}
export const Developers: React.FC<props> = () => {
  const data = [
    { id:1,title: "Create new Todo", headerColor: "red" },
    { id:2,title: "Start with", headerColor: "orange" },
    { id:3,title: "In-Progress", headerColor: "blue" },
    // { title: "Review", headerColor: "pink" },
    { id:4,title: "Done", headerColor: "green" }
  ];

  return (
    <div >
      <div >
        <div>
          <div className="flex justify-between py-5 px-5 ">
            <div className="w-[60%]">
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
        <div className="grid p-2 mx justify-center grid-cols-4">
          {data.map(({ title, headerColor, id }) => (
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
function added(array: any, arg1: number, arg2: number) {
  throw new Error("Function not implemented.");
}

