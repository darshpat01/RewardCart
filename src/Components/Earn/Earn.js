import React from "react";
const methodStyle =
  "bg-gray-100 rounded-lg h-30 w-full p-4 hover:bg-gray-300 mb-2 font-semibold";

function Earn() {
  return (
    <>
      <div className="bg-white shadow-lg p-4 min-w-[55em]">
        <div className="font-bold text-lg pb-5">
          Easy ways to earn SuperTokens:
        </div>

        <div className="pt-2 flex-row">
          <div>
            <button className={methodStyle}>
              <div className="flex">
                <div>Method 1</div>
                <div className="ml-auto">+10</div>
              </div>
            </button>
          </div>
          <div>
            <button className={methodStyle}>
              <div className="flex">
                <div>Method 2</div>
                <div className="ml-auto">+20</div>
              </div>
            </button>
          </div>
          <div>
            <button className={methodStyle}>
              <div className="flex">
                <div>Method 3</div>
                <div className="ml-auto">+30</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Earn;
