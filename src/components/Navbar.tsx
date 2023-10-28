import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between mt-[20px] ">
        <p className=" text-[53px] font-normal">DR.</p>
        <div className="flex gap-[66.32px] items-center">
          <span className="block font-Inter text-[40px] font-normal">
            Projects
          </span>
          <span className="block font-Inter text-[40px] font-normal">
            Resume
          </span>
          <span className="block font-Inter text-[40px] font-normal">
            Contact
          </span>
        </div>
      </div>
    </div>
  );
}
