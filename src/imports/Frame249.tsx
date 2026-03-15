import experienceEvent10 from "@assets/experience-event-10.webp";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[14px] px-[10px] py-[8px] rounded-[8px] top-[201px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[12px] text-white whitespace-nowrap">Эксперт</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#1e1e1e] overflow-clip relative rounded-[16px] size-full">
      <div className="absolute h-[275px] left-[-50px] top-0 w-[529.478px]" data-name="image 120">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.27%] left-0 max-w-none top-[-0.16%] w-full" src={experienceEvent10} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.9)] h-[240px] left-0 to-[rgba(0,0,0,0)] top-0 w-[444px]" />
      <Frame />
      <div className="-translate-y-full absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-end leading-[1.15] left-[14px] text-[24px] text-white top-[185px] whitespace-nowrap">
        <p className="mb-0">Подкаст Сбера «Короче»:</p>
        <p>Инвестиции — это несложно!</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[1.25] left-[14px] text-[14px] text-white top-[14px] whitespace-nowrap">
        <p className="mb-0">Разбираем инвестиции: когда, как и во что</p>
        <p className="mb-0">лучше всего вкладывать деньги, чтобы они</p>
        <p>приумножались</p>
      </div>
      <p className="-translate-x-full absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] left-[430px] text-[#6c7179] text-[14px] text-right top-[14px] whitespace-nowrap">{`2024 `}</p>
    </div>
  );
}