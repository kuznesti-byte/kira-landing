import svgPaths from "./svg-qt0ocdwarc";
import audience from "@assets/audience.webp";
import audienceYoutubeBadge from "@assets/audience-youtube-badge.webp";

function Group1() {
  return (
    <div className="absolute inset-[0_68.11%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3013 16">
        <g id="Group">
          <path d={svgPaths.p22186700} fill="var(--fill-0, #FF0000)" id="Vector" />
          <path d={svgPaths.p7289100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function YoutubePaths() {
  return (
    <div className="absolute inset-[3.93%_0.01%_6.17%_35.04%]" data-name="youtube-paths">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.459 14.384">
        <g id="youtube-paths">
          <path d={svgPaths.p74a3180} fill="var(--fill-0, #F7F7F7)" id="Vector" />
          <path d={svgPaths.p160d7100} fill="var(--fill-0, #F7F7F7)" id="Vector_2" />
          <path d={svgPaths.p34c1aff0} fill="var(--fill-0, #F7F7F7)" id="Vector_3" />
          <path d={svgPaths.p1f28ea00} fill="var(--fill-0, #F7F7F7)" id="Vector_4" />
          <path d={svgPaths.p11451240} fill="var(--fill-0, #F7F7F7)" id="Vector_5" />
          <path d={svgPaths.pc8f7a70} fill="var(--fill-0, #F7F7F7)" id="Vector_6" />
          <path d={svgPaths.p1d72a1f2} fill="var(--fill-0, #F7F7F7)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.93%_0.01%_6.17%_35.04%]" data-name="Group">
      <YoutubePaths />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_0.01%_0_0]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute h-[16px] left-[14px] overflow-clip top-[14px] w-[73.067px]" data-name="svg 1">
      <Group />
    </div>
  );
}

export default function AuditoriumCard() {
  return (
    <div className="bg-[#111] overflow-clip relative rounded-[12px] size-full" data-name="auditorium-card 1">
      <Svg />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] left-[14px] text-[14px] text-white top-[62px] whitespace-nowrap">Канал InvestFuture</p>
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.25] left-[14px] text-[#6c7179] text-[14px] top-[84px] whitespace-nowrap">1 200 000+ подписчиков</p>
      <div className="absolute h-[266px] left-[14px] rounded-[12px] top-[126px] w-[213px]" data-name="image 95">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-30 pointer-events-none rounded-[12px] size-full" src={audience} />
      </div>
      <div className="-translate-x-1/2 absolute flex h-[137.566px] items-center justify-center left-[calc(50%+0.33px)] top-[129px] w-[121.793px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-4">
          <div className="h-[130px] relative shadow-[0px_5px_15px_0px_rgba(0,0,0,0.35)] w-[113px]" data-name="image gold">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={audienceYoutubeBadge} />
          </div>
        </div>
      </div>
    </div>
  );
}