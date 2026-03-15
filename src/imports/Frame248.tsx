import experienceEvent11 from "@assets/experience-event-11.webp";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[12px] text-white whitespace-nowrap">Спикер / лектор</p>
    </div>
  );
}

function Frame3() {
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[14px] top-[201px]">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-black overflow-clip relative rounded-[16px] size-full">
      <div className="absolute h-[250px] left-0 top-[-10px] w-[444px]" data-name="image 126">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={experienceEvent11} />
      </div>
      <Frame4 />
      <div className="-translate-y-full absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-end leading-[1.15] left-[14px] text-[24px] text-white top-[185px] whitespace-nowrap">
        <p className="mb-0">Форум Investment Leaders Award</p>
        <p>«Как обогнать инфляцию в 2025?»</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[1.25] left-[14px] text-[14px] text-white top-[14px] whitespace-nowrap">
        <p className="mb-0">Investment Leaders 2024: в ожидании</p>
        <p>массовых дефолтов в 2025 году</p>
      </div>
      <p className="-translate-x-full absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] left-[430px] text-[#6c7179] text-[14px] text-right top-[14px] whitespace-nowrap">2024</p>
    </div>
  );
}