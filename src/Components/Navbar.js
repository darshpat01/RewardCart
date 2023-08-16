import React from "react";

const liStyle = "p-2 px-4 cursor-pointer hover:bg-blue-400";

function Navbar() {
  return (
    <>
      <div className="bg-blue-500 text-white p-4 w-screen">
        <div className="flex items-center">
          <div className="pr-4 text-xl">RewardCart</div>
          <ul className="flex">
            <li className={liStyle}>Earn</li>
            <li className={liStyle}>Transactions</li>
            <li className={liStyle}>Redeem</li>
          </ul>
          <div className="ml-auto">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
