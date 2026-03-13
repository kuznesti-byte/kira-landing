function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[12px] text-white whitespace-nowrap">Спикер / лектор</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[12px] text-white whitespace-nowrap">Эксперт</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[14px] top-[201px]">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-[#1e1e1e] overflow-clip relative rounded-[16px] size-full">
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.9)] h-[240px] left-0 to-[rgba(0,0,0,0)] top-0 w-[444px]" />
      <div className="absolute flex h-[240px] items-center justify-center left-0 top-0 w-[444px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[rgba(0,0,0,0.9)] h-[240px] to-[rgba(0,0,0,0)] w-[444px]" />
        </div>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-end leading-[0] left-[14px] text-[24px] text-white top-[185px] whitespace-nowrap">
        <p className="leading-[1.1]">Форум Investment Leaders Award</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[1.25] left-[14px] text-[14px] text-white top-[14px] whitespace-nowrap">
        <p className="mb-0">Стратегия 2026: где инвестору</p>
        <p>искать доходность?</p>
      </div>
      <p className="-translate-x-full absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] left-[430px] text-[#6c7179] text-[14px] text-right top-[14px] whitespace-nowrap">{`2025 `}</p>
      <Frame3 />
    </div>
  );
}