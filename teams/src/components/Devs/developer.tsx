import { useMyContext } from "../../CardAPI/cardContextAPI";
import { Boards } from "../../templates/Boards";
import { CardS } from "../../templates/Card";
import { Timer } from "../../templates/Timer";
import { CardTemplates } from "../../templates/cardTemplates";

interface props {}
export const Developers: React.FC<props> = () => {
  // const data = [
  //   { title: "Create new Todo", headerColor: "red" },
  //   { title: "Start with", headerColor: "orange" },
  //   { title: "In-Progress", headerColor: "blue" },
  //   // { title: "Review", headerColor: "pink" },
  //   { title: "Done", headerColor: "green" }
  // ];
  const {board}= useMyContext();
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
          {/* {board.map(({ title, headerColor,container}, id) => (
            <Boards
              key={id}
              title={title}
              headerColor={headerColor}
              data={[]}
              container={container}
            />
          ))} */}
          <Boards title={board[0].title} headerColor={board[0].headerColor} data={[]} container={board[0].container}/>
          <Boards title={board[1].title} headerColor={board[1].headerColor} data={[]} container={board[1].container}/>
          <Boards title={board[2].title} headerColor={board[2].headerColor} data={[]} container={board[2].container}/>
          <Boards title={board[3].title} headerColor={board[3].headerColor} data={[]} container={board[3].container}/>
        </div>
      </div>
    </div>
  );
};
