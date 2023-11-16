// import { MouseEvent } from "react";
type props = {
  disable ?: boolean;
  toggleDisable ?: (e:any) => void;
};

export const TextArea = ({ disable, toggleDisable }: props) => {
    alert(disable)
  return (
    <>
      <div>
        
        <textarea
        //   onMou={(e)=>{toggleDisable && toggleDisable(e)}}
          disabled={disable}
          placeholder="add storyPoint"
          style={{ border: "2px solid gray", padding: 5 }}
        />
      </div>
    </>
  );
};
