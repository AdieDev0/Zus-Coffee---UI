import React from "react";
import { TbMessage } from "react-icons/tb";

const Messages = () => {
  return (
    <div className="bottom-5 right-5 fixed bg-zusPrimary p-4 rounded-full shadow-xl z-50 cursor-pointer">
      <TbMessage className="text-white size-8" />
    </div>
  );
};

export default Messages;
