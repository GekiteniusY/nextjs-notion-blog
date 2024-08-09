
import React from 'react'

export type Button = {
    itemName: string,
};



export const button = (button: Button) => {
  return (
    <>
      <div className="h-10 p-3 bg-[#2c2c2c] rounded-lg border border-[#2c2c2c] justify-center items-center gap-2 inline-flex">
        <div className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">
          {button.itemName}
        </div>
      </div>
    </>
  );
};


