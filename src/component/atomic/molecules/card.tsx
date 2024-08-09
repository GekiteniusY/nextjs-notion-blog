export type Card = {
    title: string,
    abstract: string,
};

export default function Card(card: Card) {
  return (
    <div className="w-[348px] h-[229px] p-6 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start gap-6 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch h-[125px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">{card.title}</div>
          <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">{card.abstract}</div>
        </div>
      </div>
    </div>
  );
}

{/* <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
<div className="font-bold text-xl mb-2">{title}</div>
<p className="text-gray-700 text-base">
  {abstract}
</p>
</div> */}