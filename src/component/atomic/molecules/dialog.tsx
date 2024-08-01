
export type Dialog = {
    title: string,
    body: string,
    button_a: string,
    button_b: string,
};


import React from 'react'

const Dialog = (dialog: Dialog) => {
  return (
    <>
          <div className="w-96 h-48 p-8 bg-white rounded-lg shadow border border-[#d9d9d9] flex-col justify-start items-start gap-6 inline-flex">
              <div className="p-2 rounded-3xl justify-center items-center inline-flex">
                  <div className="w-5 h-5 p-1 justify-center items-center flex" />
              </div>
              <div className="self-stretch h-16 flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-7">{dialog.title}</div>
                  <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">{dialog.body}</div>
              </div>
              <div className="self-stretch justify-end items-center gap-4 inline-flex">
                  <div className="p-3 bg-[#e3e3e3] rounded-lg border border-[#767676] justify-center items-center gap-2 flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">{dialog.button_a}</div>
                  </div>
                  <div className="p-3 bg-[#2c2c2c] rounded-lg border border-[#2c2c2c] justify-center items-center gap-2 flex">
                      <div className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">{dialog.button_b}</div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Dialog