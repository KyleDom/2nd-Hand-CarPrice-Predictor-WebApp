import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030409] px-14 py-14">
      <div className="mx-auto max-w-[1750px] border-b-2 border-[#FF7A00] py-6">
        <div className="text-4xl text-white flex items-center">
          <img src="rks-logo.png" alt="logo" className="h-8 w-8 bg-white rounded-xl mr-3" />
          RKS Inc.
        </div>
      </div>
    </footer>
  );
};
