import React from "react";

function UserLogo({ name }) {
  return (
    <>
      <div className="flex items-center">
        <div className="pr-2 capitalize">{name}</div>
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/68650149?v=4"
            alt="user"
            className="w-8 h-8"
          />
        </div>
      </div>
    </>
  );
}

export default UserLogo;
