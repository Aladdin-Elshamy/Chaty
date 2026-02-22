import React from "react";

const Avatar = ({isOnline}:{isOnline?:boolean}) => {
  return (
    <div className="avatar relative max-w-full">
      <div className="w-8 rounded-full">
        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
      </div>
      {isOnline && <div className="bg-green-500 rounded-full w-2 h-2 absolute" />}
    </div>
  );
};

export default Avatar;
