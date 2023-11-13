import { Boards } from "../../templates/Boards";

interface props {}
export const Main: React.FC<props> = () => {
  const data = [
    { title: "Create new Todo", headerColor: "red" },
    { title: "Start with", headerColor: "orange" },
    { title: "In-Progress", headerColor: "blue" },
    { title: "Review", headerColor: "pink" },
    { title: "Done", headerColor: "green" },
  ];
  return (
    <div>
      <div>
        <div></div>

        <hr />
        <div className="flex gap-2 justify-center p-2 ">
          {data.map(({ title, headerColor }, id) => (
           
              <Boards key={id} title={title} headerColor={headerColor} data={[]} />
            
          ))}
        </div>
      </div>
    </div>
  );
};
