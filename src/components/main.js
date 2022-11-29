import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

function Main() {
  const [set, setState] = useState("");
  const [click, setClick] = useState([]);

  let onclick = (event) => {
    setState(event.target.value);
  };
  let clicked = () => {
    setClick([...click, set]);
    setState("")
  };
  const Delete = (index,id)=>{
    let removeItem = click.filter((index) => {
      return set.id !== id;
    });
    setClick(removeItem);
  }


  return (
    <div className="bg-[#f5f5eb] w-[100vw] h-[100vh] fixed flex items-center justify-center ">
      <div className="bg-[#232f3e] w-[50vw] h-[70vh] rounded-[1rem] sm:w-[40vw] md:w-[40vw] lg:w-[25vw] -mt-20 ">
        <div className="flex items-center justify-center">
          <h1 className="text-[40px] font-bold text-white">TODO-APP</h1>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <input
            type="text"
            placeholder="Enter items..."
            value={set}
            onChange={onclick}
            className="rounded-[0.5rem] border-2 border-black h-[35px] w-[160px] px-5 sm:w-[200px] md:w-[230px] lg:w-[250px]"
          />
          <div className="bg-[yellow] rounded-[.2rem] w-[40px] flex justify-center items-center">
            <button onClick={clicked} className="font-bold">
              ADD
            </button>
          </div>
        </div>
        <div className="mt-5 px-3">
          {/* entered items*/}
          <ul className="flex flex-col space-y-2 px-3 ">
            {click.map((value,index) => {
              return (
                <li key={index}className="bg-white rounded-[0.5rem] px-3 h-10 flex items-center justify-between">
                  {value}
                  <button onClick={Delete} className="text-[25px]">
                    <MdOutlineDeleteForever />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
