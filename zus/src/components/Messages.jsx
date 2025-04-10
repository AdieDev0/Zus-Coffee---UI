import React from "react";
import { TbMessage } from "react-icons/tb";

const Messages = () => {
  return (
    <div className="bottom-5 right-5 fixed bg-zusPrimary p-4 rounded-full shadow-lg z-50">
      <TbMessage className="text-white size-8" />
    </div>
  );
};

export default Messages;
