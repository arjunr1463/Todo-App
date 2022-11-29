import React, { Component } from "react";

class about extends Component {
  render() {
    return (
      <div className="bg-[#f5f5eb] w-[100vw] h-[100vh] fixed flex flex-col items-center">
        <h1 className="text-[50px] underline ">Todo-App</h1>

        <p className="text-[25px] flex pr-40 pl-5 pt-5">
          In this web application,user can enter any text in the input field and
          add the text into the list.And also user can delete the text whenever
          needed.
        </p>
      </div>
    );
  }
}

export default about;
