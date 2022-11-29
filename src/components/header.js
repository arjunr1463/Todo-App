import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/todologoo.png";

class header extends Component {
  render() {
    return (
      <div className="bg-[#232f3e] h-20 w-[100vw] flex items-center justify-between px-4">
        {/*Left*/}
        <div className="">
          <img src={logo} alt='' className="w-[200px] rounded-[3rem]"/>
        </div>
        {/*Right*/}
        <div className="flex items-center justify-end py-5">
          <header className="text-white flex gap-3 px-4 text-[20px] font-bold">
            <Link to="/" className="">
              HOME
            </Link>
            <Link to="/about" className="">
              ABOUT
            </Link>
          </header>
        </div>
      </div>
        
        
    );
  }
}

export default header;
