import experienceEvent08 from "@assets/experience-event-08.webp";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[12px] text-white whitespace-nowrap">Интервью</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[14px] top-[201px]">
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#1e1e1e] overflow-clip relative rounded-[16px] size-full">
      <div className="absolute h-[250px] left-0 top-0 w-[444px]" data-name="image 133">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={experienceEvent08} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.9)] h-[127px] left-0 to-[rgba(0,0,0,0)] top-[-26px] w-[444px]" />
      <div className="absolute flex h-[197px] items-center justify-center left-0 top-[92px] w-[444px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[rgba(0,0,0,0.9)] h-[197px] to-[rgba(0,0,0,0)] w-[444px]" />
        </div>
      </div>
      <Frame1 />
      <div className="-translate-y-full absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-end leading-[1.15] left-[14px] text-[24px] text-white top-[185px] whitespace-nowrap">
        <p className="mb-0">Сергей Хотимский — основатель</p>
        <p>Совкомбанка</p>
      </div>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[1.25] left-[14px] text-[14px] text-white top-[14px] whitespace-nowrap">IPO Совкомбанка, задаем вопросы инвесторов</p>
      <p className="-translate-x-full absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] left-[430px] text-[#6c7179] text-[14px] text-right top-[14px] whitespace-nowrap">{`2024 `}</p>
    </div>
  );
}