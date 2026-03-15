import svgPaths from "./svg-pw8z5i1jul";
import experienceRadio from "@assets/experience-radio.webp";
import experienceRecordMic from "@assets/experience-record-mic.webp";

function Group1() {
  return (
    <div className="absolute contents inset-[58.75%_0_0_0]" data-name="Group">
      <div className="absolute inset-[58.78%_81.58%_0_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1828 9.89319">
          <path d={svgPaths.p27bef400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.78%_65.64%_0_16.39%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8407 9.89319">
          <path d={svgPaths.p15bb3480} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.78%_33.17%_0.03%_48.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9856 9.88551">
          <path d={svgPaths.p3f172800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.78%_16.73%_0_64.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1905 9.89319">
          <path d={svgPaths.p3e183600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.75%_0_0.03%_81.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4482 9.89319">
          <path d={svgPaths.p34b329e0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.78%_50.21%_0.03%_32.14%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5877 9.88551">
          <path d={svgPaths.p2f8a4a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_19.67%_52.99%_21.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9498 11.2824">
          <path d={svgPaths.p2d082300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group1 />
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[278/87] left-[4.79%] overflow-clip right-[68.84%] top-[calc(50%-66px)]" data-name="Без названия 1">
      <Group />
    </div>
  );
}

export default function BCard() {
  return (
    <div className="overflow-clip relative rounded-[16px] size-full" data-name="b-card 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#111] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={experienceRadio} />
      </div>
      <div className="absolute flex h-[180px] items-center justify-center right-0 top-0 w-[120px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[180px] relative w-[120px]" data-name="image-Photoroom (2) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={experienceRecordMic} />
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold inset-[76.67%_6.51%_7.78%_4.79%] justify-end leading-[1.25] text-[14px] text-white whitespace-nowrap">
        <p className="mb-0">Еженедельный подкаст «InvestFuture</p>
        <p>на Рекорде» на радио Record</p>
      </div>
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium inset-[7.78%_4.79%_86.67%_71.92%] leading-[1.25] text-[14px] text-right text-white whitespace-nowrap">2021 – н.в.</p>
      <Component />
    </div>
  );
}