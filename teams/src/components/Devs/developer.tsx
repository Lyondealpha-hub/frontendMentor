import { Boards } from "../../templates/Boards";
import { CardS } from "../../templates/Card";
import { CardTemplates } from "../../templates/cardTemplates";

interface props {}
export const Developers: React.FC<props> = () => {
  const data = [
    { title: "Create new Todo", headerColor: "red" },
    { title: "Start with", headerColor: "orange" },
    { title: "In-Progress", headerColor: "blue" },
    { title: "Review", headerColor: "pink" },
    { title: "Done", headerColor: "green" }
  ];
  return (
    <div >
      <div >
        <div>
          <div className="flex justify-between py-5 px-5">
            <div>
              <CardTemplates content="Task Assignment" title="FrontEnd" />
            </div>
            <div className="w-[25%]">
              <CardS />
            </div>
          </div>
        </div>

        <hr />
        <div className="grid grid-cols-5 w-full gap-x-3 py-2 px-1">
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
