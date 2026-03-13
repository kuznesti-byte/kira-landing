import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-p1r04suo2f";
import svgNzzm from "../../imports/svg-nzzm9y0jmh";
import imgBCard1 from "figma:asset/ecdc1158f26701610b728d7541c53f122da625f4.png";

const svgFooter = svgPaths;

/* ── figma assets ── */
import imgHero from "figma:asset/ea49cc5f90b1dd04a9125d024bc9be8092d4020c.png";
import imgAboutPhoto from "figma:asset/90fbbe1b21f76e8751daa3827ad4760aedbb782d.png";
import imgEllipse2 from "figma:asset/a9094b5b1454fa7cb139d1d2ce2da9cc7ec7b785.png";
import imgEllipse3 from "figma:asset/16a242d07ea158aad5a4b677afda0b108acb113f.png";
import imgEllipse4 from "figma:asset/236f3f3de5b632e8a62129bf67adb40c4e4c6111.png";
import imgEllipse5 from "figma:asset/f9aaf6ef14c1160037b4bdd8bfeffca161b401e6.png";
import imgEllipse6 from "figma:asset/d2f6f983036fe3abf64157b744f2998ec1525b7e.png";
import imgEllipse7 from "figma:asset/29435a5d799d8885f182f68314a87aa60fe508d5.png";
import imgEllipse8 from "figma:asset/d8d09274dc641a22c7770d5cc1b46026a8ad1f69.png";
import imgEllipse9 from "figma:asset/a18dacfe4f3fd1141e047896568b13971eff2519.png";
import imgEllipse10 from "figma:asset/79e8f0e8b00f9c2918781131da314d33aefddf1f.png";
import imgEllipse11 from "figma:asset/d1e094fd08773af7d806439e67f0b238563dd5e8.png";
import imgEllipse12 from "figma:asset/4841261ba8ffd831fb10b9bf20e272d8c80dee0d.png";
import imgEllipse13 from "figma:asset/1193b13c9b1d2dc3514652b91c4f39fa28155d4e.png";
import imgEllipse14 from "figma:asset/3d3380ee2c8452f03dfab9773845a8aa2ef08628.png";
import imgImage95 from "figma:asset/7138560695863c7eb11b7f8f71c264d9aadd7f5f.png";
import imgImg187073 from "figma:asset/dbf6fa0fb6a713db7eff5ecff83a8396acb0f6fa.png";
import imgImage97 from "figma:asset/2705dde6df663c0c075c31a30f080c91b84b1389.png";
import imgImage100 from "figma:asset/9401ac93c056e80fc1080dd21933830e4dcec8fd.png";
import imgImage98 from "figma:asset/78a854ca8b673bd6bffdee03116fa51747f88464.png";
import imgImage106 from "figma:asset/cda90e2fc75b3399bbdbbfba56b5437a7a11de7f.png";
import imgImage107 from "figma:asset/fb4e490e4450bcbe44bc6704da986dc666dfbf36.png";
import imgImage108 from "figma:asset/f52a52df61eafa8e6e51ffd29826dad0a4b89b57.png";
import imgImage109 from "figma:asset/c43aafe62d688779d1bd6afffb8133f829c24f07.png";
import imgImage122 from "figma:asset/8cc2e89b8de60b0b2a12a5386dfcb414e8a566c4.png";
import imgImage110 from "figma:asset/fdc7b25fa3322731830556ef5d1e13b2a2499eab.png";
import imgImage111 from "figma:asset/95c490f951717f48f8593a204a9c566ce1ed97e6.png";
import imgImagePhotoroom2 from "figma:asset/8828556f281f99adec78855149f841f0d7a1ddf9.png";
import imgImage128 from "figma:asset/d3d6ed8a5b2a3e05326885d345697f42eae9a721.png";
import imgImage115 from "figma:asset/c5f9c024420db6ec3eec816ea9b3783b829b1e9f.png";
import imgImage113 from "figma:asset/6c4c4d41466bb4b11c72491502e9b194ef5d8bdc.png";
import imgImage129 from "figma:asset/1f12c88da56cb7beafe11d7c55c4094b5211bb47.png";
import imgImage119 from "figma:asset/ee7675e87ebe03cddf866b1e5bc9be24591363b8.png";
import imgImage135 from "figma:asset/4a60bed36732c43c3ccbc5f3caf7f39b2f3df051.png";
import imgImagePhotoroom21 from "figma:asset/e022bef6cb495e05fdf93aa98c137504b32269d9.png";
import imgImage143 from "figma:asset/522f975b11c1740b97d9cbfacf17366b1ee2b537.png";
import imgImage136 from "figma:asset/86b943fd97794eb6d6804b464a84c0fef48452a8.png";
import imgImage123 from "figma:asset/55d1bf37236020aa06b954c907de7ca81fd5f6f3.png";
import imgImage125 from "figma:asset/20f661c3190c4be80c7dc99e2fff6a40b0f5bdf3.png";
import imgImage124 from "figma:asset/aa62c45368116801ca7bf3d497b46d13d972cc32.png";
import imgImage133 from "figma:asset/a421bb4a032156a5584e928a4d5cb4b3dadb1df9.png";
import imgImage131 from "figma:asset/505e7c34631a6f2721b2039a547fe488c6c69865.png";
import imgImage120 from "figma:asset/631dd4bcfe28257a8623a5193927c1cc65f31c25.png";
import imgImage126 from "figma:asset/533808df128df2e260c87d2169161b0fbb77ad8b.png";
import imgImage132 from "figma:asset/e2516fe0b79fd9a601a64729325c106d603a6861.png";

/* ── shared ── */
const F = "Manrope, sans-serif";

function useInViewOnce(margin = "-80px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}
function useMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}
/* ════════════════════════════════════════════
   HEADER
════════════════════════════════════════════ */
function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Список ссылок в навигации
  const navLinks = [
    { label: "О спикере", href: "#about" },
    { label: "Аудитория и охват", href: "#audience" },
    { label: "Награды и рейтинги", href: "#awards" },
    { label: "Темы выступлений", href: "#topics" },
  ];

  // Функция для плавного скролла, которая предотвращает ошибку 404
  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault(); // Запрещаем роутеру менять страницу
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b border-[#f0f0f0]"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[53px] flex items-center justify-between">
        {/* Logo SVG */}
        <motion.a href="#" whileHover={{ scale: 1.04 }} className="shrink-0">
          <div className="h-[14px] w-[96px] relative">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.3543 13.643">
              <g>
                <path d={svgPaths.p3571bd00} fill="#111" />
                <path d={svgPaths.p2c3ffd80} fill="#111" />
                <path d={svgPaths.p3b38e100} fill="#111" />
                <path d={svgPaths.pfb65440} fill="#111" />
                <path d={svgPaths.p38475100} fill="#111" />
                <path d={svgPaths.p39786180} fill="#111" />
                <path d={svgPaths.p235f7e40} fill="#111" />
                <path d={svgPaths.p45f7480} fill="#111" />
                <path d={svgPaths.p2a441f00} fill="#111" />
                <path d={svgPaths.p23702400} fill="#111" />
                <path d={svgPaths.p23ec5a00} fill="#111" />
              </g>
            </svg>
          </div>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={(e) => handleScroll(e, l.href)} // Добавлен скролл
              className="text-[#6c7179] text-[12px] hover:text-[#111] transition-colors relative group"
              style={{ fontFamily: F }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.07 }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#7430f7] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Кнопка в хедере (Desktop) */}
        <motion.a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")} // Добавлен скролл
          className="hidden md:flex items-center justify-center bg-[#7430f7] hover:bg-[#5e22d6] text-white text-[12px] px-4 py-3 rounded-[8px] transition-all duration-200"
          style={{ fontFamily: F, fontWeight: 600 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.04, boxShadow: "0 4px 20px rgba(116,48,247,0.4)" }}
          whileTap={{ scale: 0.96 }}
        >
          Пригласить на мероприятие
        </motion.a>

        {/* Mobile menu button */}
        <button className="md:hidden text-[#111] p-1" onClick={() => setOpen(o => !o)}>
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white border-t border-[#f0f0f0] px-6 py-4 flex flex-col gap-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#6c7179] text-sm"
                style={{ fontFamily: F }}
                onClick={(e) => {
                  setOpen(false); // Закрываем меню
                  handleScroll(e, l.href); // Скроллим
                }}
              >
                {l.label}
              </a>
            ))}
            {/* Кнопка в мобильном меню */}
            <a
              href="#contact"
              className="bg-[#7430f7] text-white text-sm px-4 py-2.5 rounded-[8px] text-center"
              style={{ fontFamily: F, fontWeight: 600 }}
              onClick={(e) => {
                setOpen(false);
                handleScroll(e, "#contact");
              }}
            >
              Пригласить на мероприятие
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ════════════════════════════════════════════
   HERO
════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -70 : -160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -35 : -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, isMobile ? 1 : 0]);

  /* ── MOBILE ── */
  if (isMobile) {
    return (
      <section ref={sectionRef} className="bg-white overflow-hidden relative" style={{ height: 500 }}>
        {/* Centred portrait — sits at the bottom, parallax applied */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{ width: 380, height: 480, y: photoY, willChange: "transform" }}
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={imgHero} alt="Кира Юхтенко" className="w-full h-full object-cover object-top" />
        </motion.div>

        {/* Gradient 1 — plain fade */}
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent to-white pointer-events-none" />
        {/* Gradient 2 — backdrop-blur fade (matches Figma FirstScreen) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-b from-transparent to-white pointer-events-none"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            maskImage: "linear-gradient(to top, white 45%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, white 45%, transparent 100%)",
          }}
        />

        {/* Text */}
        <motion.div
          className="absolute bottom-5 left-5"
          style={{ y: textY }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[18px] leading-[1.3]" style={{ fontFamily: F, fontWeight: 500, color: "#111" }}>
            <span style={{ color: "#7430f7" }}>Кира Юхтенко</span>{" — амбассадор"}
          </p>
          <p className="text-[18px] leading-[1.3]" style={{ fontFamily: F, fontWeight: 500, color: "#111" }}>
            культуры частных инвестиций
          </p>
          <p className="text-[18px] leading-[1.3]" style={{ fontFamily: F, fontWeight: 500, color: "#111" }}>
            в России с 2015 года
          </p>
        </motion.div>
      </section>
    );
  }
  return (
    <section ref={sectionRef} className="bg-white overflow-hidden relative" style={{ minHeight: 675 }}>
      {/* Photo — медленный параллакс слой. Контейнер значительно выходит за пределы секции снизу — при скролле обрезка не видна */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[767px] h-[974px]"
        style={{ bottom: -343, y: photoY, willChange: "transform" }}
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={imgHero} alt="Кира Юхтенко" className="absolute inset-0 w-full h-full object-cover" />
      </motion.div>

      {/* Bottom fade — блюр убран */}
      <div className="absolute bottom-0 left-0 right-0 h-[244px] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* Title — быстрый параллакс + fade */}
      <div className="max-w-[1200px] mx-auto relative h-[675px]">
        <motion.div
          className="absolute bottom-8 left-[150px]"
          style={{ y: textY, opacity: textOpacity, willChange: "transform, opacity" }}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[24px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500, color: "#111" }}>
            <span style={{ color: "#7430f7" }}>Кира Юхтенко</span>{" — амбассадор"}
          </p>
          <p className="text-[24px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500, color: "#111" }}>
            культуры частных инвестиций
          </p>
          <p className="text-[24px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500, color: "#111" }}>
            в России с 2015 года
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   ABOUT
════════════════════════════════════════════ */
function AboutSection() {
  const { ref, inView } = useInViewOnce();
  const bioItems = [
    ["Финансовый обозреватель и сооснователь", "медиапроекта InvestFuture."],
    ["Магистр корпоративных финансов", "Университета Paris-Dauphine."],
    ["Экс-консультант Ernst&Young, специалист", "КИТ Финанс, FBS."],
    ["Свободно владеет английским, французским", "и немецким языками."],
    ["Мастер спорта по синхронному плаванию."],
  ];
  return (
    <section id="about" className="bg-[#f7f7f7] overflow-hidden" ref={ref}>
      {/* ── Цитата — по центру сверху ── */}
      <motion.div
        className="flex flex-col items-center gap-5 pt-20 pb-14 px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="w-6 h-6"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2c3db840} fill="#7430F7" />
            <path d={svgPaths.p3bf9a000} fill="#7430F7" />
          </svg>
        </motion.div>
        <p className="text-[14px] leading-[1.4] text-[#111] max-w-[560px]" style={{ fontFamily: F, fontWeight: 500 }}>
          Мы помогаем развивать культуру инвестирования в России.<br />
          Долгосрочные инвестиции помогают людям создавать капитал,<br />
          а экономике страны дают возможность привлекать средства<br />
          для устойчивого развития
        </p>
      </motion.div>

      {/* ── Фото + Биография — две колонки (позиции по Figma) ── */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row items-start md:gap-[76px]">
          {/* Desktop spacer — calc(8.33%+102px) ≈ 226px от края фрейма минус 24px padding */}
          <div className="hidden md:block shrink-0 w-[calc(8.33%+102px)]" />
          {/* Photo */}
          <motion.div
            className="rounded-[12px] overflow-hidden shrink-0 w-full md:w-[304px] md:h-[400px] h-[360px]"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={imgAboutPhoto} alt="Кира Юхтенко" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex flex-col gap-10 md:w-[304px] md:pt-[44px] mt-8 md:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[28px] leading-[1.25] text-[#111]" style={{ fontFamily: F, fontWeight: 600 }}>
              О спикере
            </p>
            <div className="flex flex-col gap-5">
              {bioItems.map((lines, i) => (
                <motion.div
                  key={i}
                  className="text-[14px] leading-[1.4] text-[#111]"
                  style={{ fontFamily: F, fontWeight: 400 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  {lines.map((l, j) => (
                    <p key={j} className={j < lines.length - 1 ? "mb-0" : ""}>{l}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CAREER (Road)
════════════════════════════════════════════ */
type CareerSeg = { t: string; c: "white" | "gray" };
const careerCards: { year: string; side: "left" | "right"; lines: CareerSeg[][] }[] = [
  {
    year: "2012", side: "left",
    lines: [
      [{ t: "Окончила ", c: "gray" }, { t: "факультет экономики", c: "white" }],
      [{ t: "и управления", c: "white" }, { t: " СПбГЭУ (ФИНЭК)", c: "gray" }],
    ],
  },
  {
    year: "2013", side: "right",
    lines: [
      [{ t: "Получила ", c: "gray" }, { t: "степень магистра корпо-", c: "white" }],
      [{ t: "ративных финансов", c: "white" }, { t: " в университете", c: "gray" }],
      [{ t: "Paris-Dauphine во Франции ", c: "gray" }],
    ],
  },
  {
    year: "2011 - 2015", side: "left",
    lines: [
      [{ t: "Работала в консалтинге (", c: "gray" }, { t: "Ernst&Young", c: "white" }, { t: "),", c: "gray" }],
      [{ t: "брокерских и дилерских компаниях", c: "gray" }],
      [{ t: "(", c: "gray" }, { t: "КИТ Финанс, FBS", c: "white" }, { t: ")", c: "gray" }],
    ],
  },
  {
    year: "2015", side: "right",
    lines: [
      [{ t: "Запустила ", c: "gray" }, { t: "свое", c: "white" }, { t: " ", c: "gray" }, { t: "медиа для частных", c: "white" }],
      [{ t: "инвесторов InvestFuture", c: "white" }, { t: " и уже 11 лет", c: "gray" }],
      [{ t: "занимается развитием проекта  ", c: "gray" }],
    ],
  },
  {
    year: "2018", side: "left",
    lines: [
      [{ t: "Окончила ", c: "gray" }, { t: "Академию кино", c: "white" }],
      [{ t: "и телевидения «Кадр»", c: "white" }],
    ],
  },
  {
    year: "2025", side: "right",
    lines: [
      [{ t: "Окончила ", c: "gray" }, { t: "Школу продюсирования", c: "white" }],
      [{ t: "Николая Картозии", c: "white" }],
    ],
  },
];

/* Карточка со своим useInView — эффект появления при скролле */
function CareerCardItem({ card }: { card: typeof careerCards[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const xFrom = card.side === "left" ? -48 : 48;

  return (
    <motion.div
      ref={ref}
      className="w-[304px] h-[139px] bg-[#111] rounded-[12px] relative shrink-0 overflow-hidden"
      initial={{ opacity: 0, x: xFrom, y: 28, scale: 0.88 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(116,48,247,0.22)" }}
    >
      {/* Фиолетовый блик — плавно проявляется вместе с карточкой */}
      <motion.div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{
          background:
            card.side === "left"
              ? "radial-gradient(ellipse at 0% 100%, rgba(116,48,247,0.10) 0%, transparent 65%)"
              : "radial-gradient(ellipse at 100% 100%, rgba(116,48,247,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Год — верхний левый угол, появляется чуть позже карточки */}
      <motion.p
        className="absolute left-[20px] top-[20px] text-[24px] leading-[1.25] text-white"
        style={{ fontFamily: F, fontWeight: 400 }}
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
      >
        {card.year}
      </motion.p>

      {/* Описание — нижний левый угол, появляется последним */}
      <motion.div
        className="absolute left-[20px] bottom-[20px] text-[14px] leading-[0] text-[#6c7179]"
        style={{ fontFamily: F, fontWeight: 400 }}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
      >
        {card.lines.map((line, li) => (
          <p key={li} className={li < card.lines.length - 1 ? "mb-0 leading-[1.25]" : "leading-[1.25]"}>
            {line.map((seg, si) => (
              <span key={si} className={seg.c === "white" ? "text-white" : ""}>{seg.t}</span>
            ))}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}

function CareerSection() {
  return (
    <section id="career" className="bg-[#010101]">
      <div className="max-w-[1200px] mx-auto py-20">

        {/* ══ MOBILE ══ */}
        <div className="flex lg:hidden flex-col gap-8 px-6">
          <motion.p
            className="text-white text-[28px] leading-[1.25]"
            style={{ fontFamily: F, fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Карьерный путь
          </motion.p>
          <motion.p
            className="text-[20px] leading-[1.25]"
            style={{ fontFamily: F, fontWeight: 500 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">Инвестиционный подход Киры опирается на идеи признанных мастеров финансового рынка — </span>
            <span className="text-[#6c7179]">от фундаментального анализа Уоррена Баффета до принципов индексного инвестирования Джона Богла и современных концепций портфельного управления Питера Бернстайна.</span>
          </motion.p>
          <div className="flex flex-col gap-3">
            {careerCards.map((card, i) => (
              <div key={i} className="w-full">
                <CareerCardItem card={card} />
              </div>
            ))}
          </div>
        </div>

        {/* ══ DESKTOP: точная геометрия Figma 1200px-фрейма ══
            [spacer calc(8.33%+126px)=226px] | [sticky-title 304px] | [right flex-1]
            Левые карточки: ml-0  |  Правые: ml-[140px]  (670−530=140px)             */}
        <div className="hidden lg:flex items-start">

          {/* Спейсер — от края до заголовка */}
          <div className="shrink-0 w-[calc(8.33%+126px)]" />

          {/* Sticky заголовок */}
          <div className="w-[304px] shrink-0 sticky top-[73px] self-start">
            <motion.p
              className="text-white text-[28px] leading-[1.25]"
              style={{ fontFamily: F, fontWeight: 600 }}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Карьерный путь
            </motion.p>
          </div>

          {/* Правая секция: описание + зигзаг-карточки */}
          <div className="flex-1">

            {/* Описание — точно как в Figma, строки совпадают */}
            <motion.div
              className="mb-[29px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-[20px] text-white leading-[1.25] mb-0" style={{ fontFamily: F, fontWeight: 500 }}>Инвестиционный подход Киры опирается</p>
              <p className="text-[20px] text-white leading-[1.25] mb-0" style={{ fontFamily: F, fontWeight: 500 }}>на идеи признанных мастеров финансового</p>
              <p className="text-[20px] leading-[1.25] mb-0" style={{ fontFamily: F, fontWeight: 500 }}>
                <span className="text-white">рынка — </span>
                <span className="text-[#6c7179]">от фундаментального анализа Уоррена</span>
              </p>
              <p className="text-[20px] text-[#6c7179] leading-[1.25] mb-0" style={{ fontFamily: F, fontWeight: 500 }}>Баффета до принципов индексного инвестиро-</p>
              <p className="text-[20px] text-[#6c7179] leading-[1.25] mb-0" style={{ fontFamily: F, fontWeight: 500 }}>вания Джона Богла и современных концепций</p>
              <p className="text-[20px] text-[#6c7179] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>портфельного управления Питера Бернстайна.</p>
            </motion.div>

            {/* Карточки — зигзаг */}
            <div className="flex flex-col gap-3">
              {careerCards.map((card, i) => (
                <div key={i} style={{ marginLeft: card.side === "right" ? "140px" : "0px" }}>
                  <CareerCardItem card={card} />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   AUDIENCE
════════════════════════════════════════════ */

/* YouTube-карточка — золотая кнопка появляется при наведении */
function YouTubeAudienceCard({ inView }: { inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="bg-[#111] rounded-[12px] overflow-hidden relative h-[300px] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* ── Полный логотип YouTube (кнопка + текст) ── */}
      <div className="absolute top-[14px] left-[14px] h-[16px] w-[73px] overflow-hidden">
        {/* Красный прямоугольник с треугольником */}
        <div className="absolute inset-y-0 left-0 right-[68.11%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3013 16">
            <path d={svgPaths.p22186700} fill="#FF0000" />
            <path d={svgPaths.p7289100} fill="white" />
          </svg>
        </div>
        {/* Текст "YouTube" */}
        <div className="absolute inset-[3.93%_0.01%_6.17%_35.04%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.459 14.384">
            <path d={svgPaths.p74a3180} fill="#F7F7F7" />
            <path d={svgPaths.p160d7100} fill="#F7F7F7" />
            <path d={svgPaths.p34c1aff0} fill="#F7F7F7" />
            <path d={svgPaths.p1f28ea00} fill="#F7F7F7" />
            <path d={svgPaths.p11451240} fill="#F7F7F7" />
            <path d={svgPaths.pc8f7a70} fill="#F7F7F7" />
            <path d={svgPaths.p1d72a1f2} fill="#F7F7F7" />
          </svg>
        </div>
      </div>

      <p className="absolute top-[62px] left-[14px] text-white text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>Канал InvestFuture</p>
      <p className="absolute top-[84px] left-[14px] text-[#6c7179] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>1 200 000+ подписчиков</p>

      {/* Нижняя часть — фото + золотая кнопка */}
      <div className="absolute bottom-[14px] left-[14px] right-[14px]">
        <div className="rounded-[12px] overflow-hidden h-[166px] relative">

          {/* Фоновое фото */}
          <motion.img
            src={imgImage95}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[12px]"
            animate={{ opacity: hovered ? 0.10 : 0.30 }}
            transition={{ duration: 1.2 }}
          />

          {/* Тёмный оверлей при hover */}
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none rounded-[12px]"
            animate={{ opacity: hovered ? 0.40 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Золотая кнопка — вылетает снизу пружинисто */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="rotate-4"
              style={{ filter: "drop-shadow(0px 8px 24px rgba(0,0,0,0.55))" }}
              animate={hovered
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.72, y: 36 }
              }
              transition={hovered
                ? { type: "spring", stiffness: 320, damping: 22 }
                : { duration: 0.6, ease: "easeOut" }
              }
            >
              <img src={imgImg187073} alt="YouTube Gold Button" className="w-[113px] h-[130px] object-cover" />
            </motion.div>
          </div>

          {/* Подсказка — заметная с градиентом, исчезает при hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 pt-5 pb-2.5 pointer-events-none select-none rounded-b-[12px]"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)" }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.3" />
              <path d="M8 5v3M8 10v.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span className="text-white text-[12px]" style={{ fontFamily: F, fontWeight: 500 }}>
              наведи, чтобы увидеть награду
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function AudienceSection() {
  const { ref, inView } = useInViewOnce();
  const avatars = [imgEllipse2, imgEllipse3, imgEllipse4, imgEllipse5, imgEllipse6, imgEllipse7, imgEllipse8, imgEllipse9, imgEllipse10];

  return (
    <section id="audience" className="bg-[#f7f7f7] pt-20 pb-16 overflow-hidden" ref={ref}>
      <div className="px-6 lg:px-[226px]">
        <motion.p
          className="text-[28px] leading-[1.25] text-[#111] mb-10"
          style={{ fontFamily: F, fontWeight: 600 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Аудитория и охват
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[241px_241px_241px] gap-5">
          {/* YouTube card — hover-эффект вынесен в YouTubeAudienceCard */}
          <YouTubeAudienceCard inView={inView} />

          {/* Telegram card (белая подложка) */}
          <motion.div
            className="bg-white rounded-[12px] overflow-hidden relative h-[300px]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          // Убрали whileHover отсюда, чтобы не мешал
          >
            <div className="absolute top-4 left-4 w-5 h-4">
              <svg className="block w-full h-full" fill="none" viewBox="0 0 20 16">
                <path clipRule="evenodd" d={svgPaths.p3848a600} fill="#111" fillRule="evenodd" />
              </svg>
            </div>
            <p className="absolute top-4 left-10 text-[#111] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>Telegram</p>

            {/* Channel 1 — Telegram-сеть InvestFuture */}
            <motion.a
              href="https://t.me/investfuture"
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute top-[54px] left-2 right-2 bg-[#111] rounded-[8px] h-[115px] overflow-hidden block cursor-pointer"
            >
              <img src={imgImage98} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
              <p className="absolute top-[14px] left-[14px] text-white text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>
                Telegram-сеть InvestFuture
              </p>

              <div className="absolute left-[14px] bottom-[14px] h-[36px] overflow-hidden w-[calc(100%-60px)]">
                <div className="relative h-full w-full">
                  {/* ТЕКСТ: Изначально виден внизу (18px), на ховере уходит вверх (0) */}
                  <p
                    className="absolute text-white text-[14px] leading-[1.25] transition-all duration-300 transform translate-y-[18px] group-hover:translate-y-0"
                    style={{ fontFamily: F, fontWeight: 500 }}
                  >
                    800 000+ подписчиков
                  </p>

                  {/* КРУЖОЧКИ: Изначально под контейнером (36px), на ховере встают под текст (18px) */}
                  <div className="absolute left-0 flex items-center h-[18px] transition-all duration-300 transform translate-y-[36px] opacity-0 group-hover:translate-y-[18px] group-hover:opacity-100">
                    {avatars.map((av, i) => (
                      <div key={i} className="w-[14px] h-[14px] rounded-full overflow-hidden border border-[#111] -ml-1 first:ml-0" style={{ zIndex: avatars.length - i }}>
                        <img src={av} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute right-[14px] bottom-[14px] w-[20px] h-[7px]">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 21 7.364">
                  <path d={svgPaths.p319f1400} fill="white" />
                </svg>
              </div>
            </motion.a>

            {/* Channel 2 — Личный блог */}
            <motion.a
              href="https://t.me/kira_pronira"
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute top-[177px] left-2 right-2 bg-[#111] rounded-[8px] h-[115px] overflow-hidden block cursor-pointer"
            >
              <img src={imgImage100} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
              <p className="absolute top-[14px] left-[14px] text-white text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>
                Личный блог <span className="text-[#6c7179]">(Кира Юхтенко)</span>
              </p>

              <div className="absolute left-[14px] bottom-[14px] h-[36px] overflow-hidden w-[calc(100%-60px)]">
                <div className="relative h-full w-full">
                  <p
                    className="absolute text-white text-[14px] leading-[1.25] transition-all duration-300 transform translate-y-[18px] group-hover:translate-y-0"
                    style={{ fontFamily: F, fontWeight: 500 }}
                  >
                    70 000+ подписчиков
                  </p>
                  <div className="absolute left-0 flex items-center h-[18px] transition-all duration-300 transform translate-y-[36px] opacity-0 group-hover:translate-y-[18px] group-hover:opacity-100">
                    <div className="w-[14px] h-[14px] rounded-full overflow-hidden border border-[#111]">
                      <img src={imgImage97} alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-[14px] bottom-[14px] w-[20px] h-[7px]">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 21 7.364">
                  <path d={svgPaths.p319f1400} fill="white" />
                </svg>
              </div>
            </motion.a>
          </motion.div>

          {/* Other platforms */}
          <motion.div
            className="bg-white rounded-[12px] relative h-[300px] flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-[213px] bg-[#111] rounded-[8px] px-3 py-2">
              <p className="text-white text-[14px]" style={{ fontFamily: F, fontWeight: 500 }}>Другие площадки</p>
            </div>
            <div className="w-[213px] bg-[#f7f7f7] rounded-[8px] px-3 py-3 flex items-center justify-between">
              <div>
                <p className="text-[#111] text-[14px]" style={{ fontFamily: F, fontWeight: 500 }}>RuTube, VK, Дзен</p>
                <p className="text-[#6c7179] text-[14px]" style={{ fontFamily: F, fontWeight: 500 }}>200 000 + подписчиков</p>
              </div>
              <div className="flex -space-x-0.5">
                {[imgEllipse12, imgEllipse13, imgEllipse14].map((av, i) => (
                  <img key={i} src={av} alt="" className="w-[14px] h-[14px] rounded-full" />
                ))}
              </div>
            </div>
            <div className="w-[213px] bg-[#f7f7f7] rounded-[8px] px-3 py-3 flex items-center justify-between">
              <div>
                <p className="text-[#111] text-[14px]" style={{ fontFamily: F, fontWeight: 500 }}>IF EdTech</p>
                <p className="text-[#6c7179] text-[14px]" style={{ fontFamily: F, fontWeight: 500 }}>10-ки тыс. пользователей</p>
              </div>
              <img src={imgEllipse11} alt="" className="w-[14px] h-[14px] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  );
}

/* ════════════════════════════════════════════
   AWARDS
════════════════════════════════════════════ */
const INITIAL_SHOWN = 1;
const LOAD_STEP = 1;

const ALL_AWARD_YEARS = [
  {
    year: "2025",
    awards: [
      { name: "Премия ФИНКОР от Минфина РФ", nom: "Телеграм-каналы по направлению «Финансы»" },
      { name: "Премия Private money", nom: "«Лучший телеграм канал по доходной недвижимости»" },
      { name: "Премия Investment Leaders Award 2025", nom: "«Инвест-блог года»", link: true },
      { name: "Премия Investment Leaders Award 2025", nom: "«Интервью года»" },
    ],
  },
  {
    year: "2024",
    awards: [
      { name: "Премия Private money", nom: "«Лучший телеграм канал по доходной недвижимости»" },
      { name: "Премия Investment Leaders Award 2024 в категории «Финансовая грамотность»", nom: "«Образовательный проект года»" },
    ],
  },
  {
    year: "2023",
    awards: [
      { name: "Премия Investment Leaders Award 2023", nom: "«YouTube-канал года»" },
      { name: "Премия «Рублевая зона»", nom: "«Лучший телеграм пост»" },
      { name: "Премия «Рублевая зона»", nom: "«Лучший Ютуб канал»" },
    ],
  },
  // 4 more shown before button
  {
    year: "2022",
    awards: [
      { name: "Премия Investment Leaders Award 2022", nom: "«Финансовый просветитель года»" },
      { name: "Рейтинг Forbes «Лучшие финансовые блоги»", nom: "Топ-10 финансовых инфлюенсеров России" },
    ],
  },
  {
    year: "2021",
    awards: [
      { name: "Медиапремия РБК", nom: "«Лучший финансово-аналитический YouTube-канал»" },
      { name: "Рейтинг личных финансов Banki.ru", nom: "«Лучший автор кон��ента о частных инвестициях»" },
    ],
  },
  {
    year: "2020",
    awards: [
      { name: "Forbes Russia", nom: "Топ-20 финансовых инфлюенсеров по версии Forbes" },
      { name: "Премия «Финансовый Олимп»", nom: "«Лучший медиапроект в сфере инвестиций»" },
    ],
  },
];

// Heights match Figma exactly: Card9=145, Card10=153, Card11=100, Card12=119
const mediaCards = [
  {
    img: imgImage107, height: 145,
    logo: <svg className="h-4 w-auto" fill="none" viewBox="0 0 63.699 16"><path d={svgPaths.p3800e900} fill="white" /></svg>,
    quote: "«Это очень взвешенный и всесторонний канал, который предлагает ежедневные выпуски, информацию и аналитику о фондовом рынке в самых разнообразных срезах»",
  },
  {
    img: imgImage108, height: 153,
    logo: (
      <svg className="h-4 w-auto" fill="none" viewBox="0 0 59.7143 16">
        <g><path clipRule="evenodd" d="M0 0V14.9333L14.9333 0H0Z" fill="#92CFAE" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.pf8d0e00} fill="#2A8288" fillRule="evenodd" /></g>
        <path clipRule="evenodd" d={svgPaths.p231a3040} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p19690180} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p18fd000} fill="white" fillRule="evenodd" />
      </svg>
    ),
    quote: (
      <div className="flex flex-col gap-[4px]">
        <span style={{ fontWeight: 600, fontSize: 12, display: 'block' }}>
          Входит в Топ 10 лучших каналов про инвестиции:
        </span>
        <span style={{ fontWeight: 400, fontSize: 12, opacity: 0.9 }}>
          «Один из самых популярных каналов про инвестиции в русскоязычном сегменте YouTube»
        </span>
      </div>
    )
  },
  {
    img: imgImage109, height: 100,
    logo: (
      <svg className="h-4 w-auto" fill="none" viewBox="0 0 34.4 16">
        <path d={svgPaths.p316cb600} fill="#BD1D1D" />
        <path d={svgPaths.p16b94700} fill="white" /><path d={svgPaths.p8d70400} fill="white" /><path d={svgPaths.p1a929300} fill="white" />
        <path d={svgPaths.p24adc200} fill="white" /><path d={svgPaths.pe461b70} fill="white" /><path d={svgPaths.pc799df0} fill="white" />
        <path d={svgPaths.p1c2d1472} fill="white" /><path d={svgPaths.p1d7dc000} fill="white" /><path d={svgPaths.pa0bf280} fill="white" />
        <path d={svgPaths.p3e9e8100} fill="white" /><path d={svgPaths.p37074fc0} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p28dce080} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pa588900} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pfa42200} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p9a8b400} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p39840c80} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p2402c100} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3a40a500} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p22f19b80} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3096eac0} fill="white" fillRule="evenodd" />
      </svg>
    ),
    quote: "«Финансовый обозреватель и сооснователь медиапроекта InvestFuture Кира Юхтенко»",
  },
  {
    img: imgImage122, height: 119,
    logo: (
      <svg className="h-5 w-auto" fill="none" viewBox="0 0 44 20">
        <path d={svgPaths.p1426ac80} fill="white" />
        <path d={svgPaths.p2211da00} fill="white" />
        <path d={svgPaths.p11154700} fill="white" />
      </svg>
    ),
    quote: "«Эксперт по инвестициям Кира Юхтенко рассказала, какие отрасли наиболее выгодны для инвестирования»",
  },
];

function AwardsSection() {
  const { ref, inView } = useInViewOnce();
  const [shown, setShown] = useState(INITIAL_SHOWN);
  const visibleYears = ALL_AWARD_YEARS.slice(0, shown);
  const hasMore = shown < ALL_AWARD_YEARS.length;

  return (
    <section id="awards" className="bg-[#f7f7f7] pt-10 pb-16 overflow-x-clip" ref={ref}>
      <div className="px-6 lg:px-[226px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-[28px] leading-[1.25] text-[#111]" style={{ fontFamily: F, fontWeight: 600 }}>
            Награды<br />и рейтинги
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="overflow-hidden mb-10 relative h-[60px] flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f7f7f7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f7f7f7] to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex gap-8 shrink-0 items-center">
                <img src={imgImage106} alt="" className="h-[35px] w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src={imgImage106} alt="" className="h-[35px] w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src={imgImage106} alt="" className="h-[35px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[292px_1fr] gap-10 items-start">

          {/* ── Left: single-column media cards ── */}
          <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
            {mediaCards.map((card, i) => (
              <motion.div
                key={i}
                className="group rounded-[12px] overflow-hidden relative shrink-0"
                style={{ height: card.height }}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
                <div className="absolute top-[14px] left-[14px]">{card.logo}</div>
                <div className="absolute top-[14px] right-[14px] w-3 h-3">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 13.1096 13.1096">
                    <path d={svgPaths.p17a95380} stroke="white" strokeWidth="1.3" />
                  </svg>
                </div>
                <p
                  className="absolute bottom-3 left-[14px] right-[14px] text-white leading-[1.25]"
                  style={{ fontFamily: F, fontWeight: 400, fontSize: 11 }}
                >
                  {card.quote}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Right: Awards list with animated load-more ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence initial={false}>
              {visibleYears.map((group, gi) => (
                <motion.div
                  key={group.year}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  layout
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-[#111] text-[14px]" style={{ fontFamily: F, fontWeight: 600 }}>{group.year}</p>
                    <div className="bg-[#111] h-px w-full" />
                  </div>
                  {group.awards.map((aw, ai) => (
                    <div key={ai} className="flex flex-col gap-3">
                      <p className="text-[#111] text-[14px]" style={{ fontFamily: F, fontWeight: 600 }}>{aw.name}</p>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#6c7179] text-[12px]" style={{ fontFamily: F, fontWeight: 400 }}>Номинация</p>
                        <p className="text-[#111] text-[12px]" style={{ fontFamily: F, fontWeight: 500 }}>{aw.nom}</p>
                      </div>
                      {ai < group.awards.length - 1 && <div className="bg-[#cfcfcf] h-px w-full" />}
                    </div>
                  ))}
                  {gi < visibleYears.length - 1 && <div className="bg-[#cfcfcf] h-px w-full" />}
                </motion.div>
              ))}
            </AnimatePresence>

            {hasMore && (
              <motion.button
                layout
                onClick={() => setShown(s => Math.min(s + LOAD_STEP, ALL_AWARD_YEARS.length))}
                className="bg-[#111] hover:bg-[#333] text-white text-[14px] px-9 py-4 rounded-[8px] self-start transition-colors mt-1"
                style={{ fontFamily: F, fontWeight: 500 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Загрузить еще
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════��═════════════════
   EXPERIENCE
════════════════════════════════════════════ */
const filterTabs = ["Все", "Спикер / лектор", "Эксперт", "Модерация", "Интервью"];

const eventCards: { img: string | null; tags: string[]; title: string; desc: string; year: string }[] = [
  // 2025
  { img: imgImage128, tags: ["Эксперт"], title: "Т-Двор, панельная сессия «Кто заплатит за нашу старость?»", desc: "Инвестиции в будущее: что мешает поверить в ПДС и как это меняется", year: "2025", link: "https://www.rbc.ru/quote/news/article/685ba97f9a794754c6c69308" },
  { img: imgImage119, tags: ["Эксперт"], title: "Подкаст Банка России «Кому принадлежит ЦБ?»", desc: "Гость подкаста Банка России с Владимиром Чистюхиным и Алексеем Антоновым", year: "2025", link: "https://t.me/centralbank_russia/2754" },
  { img: imgImage113, tags: ["Спикер / лектор"], title: "РБК Инвест Weekend", desc: "Лекция «Почему мы теряем деньги в инвестициях и как этого избежать» с Женей Поповым", year: "2025", link: "https://investwknd.rbc.ru/speakers" },
  { img: imgImage115, tags: ["Модерация"], title: "Онлайн-конференция с экспертами БКС", desc: "Онлайн-конференция брокера БКС по криптовалютному рынку", year: "2025", link: "https://vkvideo.ru/video-16289875_456240984?sh=4" },
  { img: imgImage129, tags: ["Спикер / лектор"], title: "«Территория будущего. Москва 2030»", desc: "Ликбез по инвестициям: как создать семейный капитал и поддержать экономику", year: "2025", link: "https://moscow2030.mos.ru/events/lektsiya_likbez_po_investitsiyam_kak_sozdat_semeynyy_kapital_i_podderzhat_ekonomiku/" },
  { img: imgImage135, tags: ["Интервью"], title: "Аиша Кубезова — руководитель брокерского бизнеса Сбера", desc: "Куда инвестирует руководитель брокерского бизнеса Сбера? Фондовый рынок 2025", year: "2025", link: "https://vk.com/video-183755267_456241602?ysclid=mlffupcm9m67950931" },
  { img: null, tags: ["Спикер / лектор", "Эксперт"], title: "Форум Investment Leaders Award", desc: "Стратегия 2026: где инвестору искать доходность?", year: "2025", link: "" },
  { img: imgImage132, tags: ["Интервью"], title: "Директор Департамента информационной безопасности Банка России Вадима Уварова", desc: "Новые способы мошенничества, как обезопасить себя и своих близких", year: "2025", link: "https://kalinuszn74.ru/allnews/intervyu-direktora-departamenta-informacionnoi-bezopasnosti-banka-rossii-vadima-uvarova-finansovomu-blogeru-kire-yuhtenko-shemy-telefonnyh-moshennikov-predstavlyayut-ugrozu-dazhe-dlya-finansovo-gramotnyh-lyudei?ysclid=mlffollf9n288615465" },
  // 2024
  { img: imgImage133, tags: ["Интервью"], title: "Сергей Хотимский — основатель Совкомбанка", desc: "IPO Совкомбанка, задаем вопросы инвесторов", year: "2024", link: "https://vk.com/video-183755267_456241602?ysclid=mlffupcm9m67950931" },
  { img: imgImage131, tags: ["Интервью"], title: "Член Совета директоров Банка России Михаил Мамута", desc: "Кто потеряет деньги на бирже, почему мошенников не истребить и что с тестами для квалов", year: "2024", link: "https://www.youtube.com/watch?v=HkreSlKbQ3Q" },
  { img: imgImage120, tags: ["Эксперт"], title: "Подкаст Сбера «Короче»: И��вестиции — это несложно!", desc: "Разбираем инвестиции: когда, как и во что лучше всего вкладывать деньги, чтобы они приумножались", year: "2024", link: "https://vk.com/video-22522055_456244643" },
  { img: imgImage126, tags: ["Спикер / лектор", "Эксперт"], title: "Форум Investment Leaders Award «Как обогнать инфляцию в 2025?»", desc: "Investment Leaders 2024: в ожидании массовых дефолтов в 2025 году", year: "2024", link: "https://www.finversia.ru/news/events/investment-leaders-2024-v-ozhidanii-massovykh-defoltov-v-2025-godu-147062?ysclid=mm997gnt6h800120279" },
  // 2023
  { img: imgImage125, tags: ["Спикер / лектор", "Эксперт"], title: "Онлайн-марафон FINVERSIA", desc: "Форум женщин-предпринимателей с Ириной Хакамадой", year: "2023", link: "https://bdm.ru/publicacii/onlain-marafon-finversia-proidet-7-10-iyunya-2023-goda-17899" },
  { img: imgImage124, tags: ["Спикер / лектор", "Эксперт"], title: "Forbes Woman: Дао, бизнес и женщины", desc: "Форум женщин-предпринимателей с Ириной Хакамадой", year: "2023", link: "https://forbes.kz/articles/dao_biznes_i_jenschinyi" },
  // 2022
  { img: imgImage123, tags: ["Спикер / лектор", "Эксперт"], title: "Онлайн-конференция ВТБ", desc: "«Фондовый рынок сегодня — кризис или новые возможности!»", year: "2022", link: "https://www.vtbreg.com/company/electronic-document/actions/Fond_rynok/?ysclid=mm98ut9u3d500758185" },
  // 2021
  { img: imgImage136, tags: ["Интервью"], title: "Тимур Турлов — основатель группы Freedom Holding Corp", desc: "Про Фридом Финанс, Фонд первичных размещений и будущее рынков", year: "2021", link: "https://www.youtube.com/live/WLE52Ann_Pc?si=MlfBflIZOoWcBE2k" },
];

const mediaProjects = [
  { img: imgImage110, title: "«Распаковка с Кирой Юхтенко» на телеканале РБК", year: "2020", link: "https://t.me/centralbank_russia/2754" },
  { img: imgImage111, title: "Ежедневная новостная рубрика на Business FM Казахстан", year: "2021 – 2024", link: "https://t.me/centralbank_russia/2754" },
  { img: imgImage113, title: "Еженедельный подкаст «InvestFuture на Рекорде» на радио Record", year: "2021 – н.в.", link: "https://t.me/centralbank_russia/2754" },
];

function ExperienceSection() {
  const { ref, inView } = useInViewOnce();
  const [active, setActive] = useState("Все");
  const [shown, setShown] = useState(6);

  const filtered = active === "Все" ? eventCards : eventCards.filter(c => c.tags.includes(active));
  const visibleCards = filtered.slice(0, shown);
  const hasMore = filtered.length > shown;

  useEffect(() => { setShown(6); }, [active]);

  return (
    <section id="experience" className="bg-white py-16 overflow-hidden" ref={ref}>
      <div className="px-6 lg:px-[150px]">
        <motion.p
          className="text-[28px] leading-[1.15] text-[#111] text-center mb-14"
          style={{ fontFamily: F, fontWeight: 600 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Опыт выступлений и модерации
        </motion.p>

        {/* Media project cards */}
        <p className="text-[#6c7179] text-[14px] mb-4" style={{ fontFamily: F, fontWeight: 500 }}>Проекты в крупных деловых СМИ</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

          {/* ── Card 1: РБК ── */}
          <motion.div
            className="bg-[#f7f7f7] rounded-[16px] overflow-hidden relative h-[180px]"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0 }} whileHover={{ scale: 1.02 }}
          >
            {/* Фон — фото повёрнуто -90° */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="-rotate-90 flex-none" style={{ width: 321, height: 180 }}>
                <img src={imgImage110} alt="" className="w-full h-full object-cover pointer-events-none" style={{ opacity: 0.14 }} />
              </div>
            </div>
            <div className="absolute inset-0 bg-white mix-blend-hue" />
            {/* Логотип РБК (SVG) */}
            <div className="absolute top-[14px] left-[14px] h-[14px] w-[53px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.25 14">
                <path clipRule="evenodd" d={svgNzzm.p11e19100} fill="#92CFAE" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgNzzm.p3f2ec80} fill="#2A8288" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgNzzm.p148b88e0} fill="#111" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgNzzm.p83b4a00} fill="#111" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgNzzm.p2db26200} fill="#111" fillRule="evenodd" />
              </svg>
            </div>
            {/* Год */}
            <p className="absolute top-[14px] right-[14px] text-[#6c7179] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>2020</p>
            {/* Подпись */}
            <div className="absolute bottom-[14px] left-[14px]">
              <p className="text-[#111] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 400 }}>«Распаковка с Кирой Юхтенко»</p>
              <p className="text-[#111] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 400 }}>на телеканале РБК</p>
            </div>
          </motion.div>

          {/* ── Card 2: Business FM ── */}
          <motion.div
            className="bg-[#f7f7f7] rounded-[16px] overflow-hidden relative h-[180px]"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }} whileHover={{ scale: 1.02 }}
          >
            {/* Фон — фото смещено вверх */}
            <div className="absolute inset-0 overflow-hidden">
              <img src={imgImage111} alt="" className="absolute w-full object-cover pointer-events-none" style={{ height: 505, top: -325, left: 0 }} />
            </div>
            <div className="absolute inset-0 bg-white mix-blend-hue" />
            {/* Логотип Business FM */}
            <div className="absolute top-[12px] left-[14px]" style={{ width: "37.37%", aspectRatio: "1201/324" }}>
              <img src={imgImagePhotoroom2} alt="Business FM" className="w-full h-auto object-contain" />
            </div>
            {/* Год */}
            <p className="absolute top-[14px] right-[14px] text-[#6c7179] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>2021 – 2024</p>
            {/* Подпись */}
            <div className="absolute bottom-[14px] left-[14px]">
              <p className="text-[#111] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 400 }}>Ежедневная новостная рубрика</p>
              <p className="text-[#111] text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 400 }}>на Business FM Казахстан</p>
            </div>
          </motion.div>

          {/* ── Card 3: Radio Record (тёмная) ── */}
          <motion.div
            className="bg-[#111] rounded-[16px] overflow-hidden relative h-[180px]"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }} whileHover={{ scale: 1.02 }}
          >
            {/* Фон — тёмное фото */}
            <img src={imgBCard1} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[16px]" />
            {/* Фото микрофона справа */}
            <div className="absolute right-0 top-0 w-[120px] h-[180px] overflow-hidden">
              <img src={imgImagePhotoroom21} alt="" className="w-full h-full object-cover pointer-events-none scale-y-[-1] rotate-180" />
            </div>
            {/* Логотип RECORD */}
            <div className="absolute top-[14px] left-[14px]" style={{ width: 77, height: 24 }}>
              {/* Верхняя часть — крылья/арка RECORD */}
              <svg className="absolute top-0 left-0 w-full" style={{ height: 11 }} fill="none" viewBox="0 0 44.9498 11.2824">
                <path d={svgNzzm.p2d082300} fill="white" />
              </svg>
              {/* Нижняя часть — буквы R E C O R D */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between" style={{ height: 10 }}>
                <svg style={{ width: 14, height: 10 }} fill="none" viewBox="0 0 14.1828 9.89319"><path d={svgNzzm.p27bef400} fill="white" /></svg>
                <svg style={{ width: 14, height: 10 }} fill="none" viewBox="0 0 13.8407 9.89319"><path d={svgNzzm.p15bb3480} fill="white" /></svg>
                <svg style={{ width: 14, height: 10 }} fill="none" viewBox="0 0 13.9856 9.88551"><path d={svgNzzm.p3f172800} fill="white" /></svg>
                <svg style={{ width: 14, height: 10 }} fill="none" viewBox="0 0 14.1905 9.89319"><path d={svgNzzm.p3e183600} fill="white" /></svg>
                <svg style={{ width: 14, height: 10 }} fill="none" viewBox="0 0 14.4482 9.89319"><path d={svgNzzm.p34b329e0} fill="white" /></svg>
                <svg style={{ width: 14, height: 10 }} fill="none" viewBox="0 0 13.5877 9.88551"><path d={svgNzzm.p2f8a4a00} fill="white" /></svg>
              </div>
            </div>
            {/* Год */}
            <p className="absolute top-[14px] right-[14px] text-white text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 500 }}>2021 – н.в.</p>
            {/* Подпись */}
            <div className="absolute bottom-[14px] left-[14px] right-[14px]">
              <p className="text-white text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 400 }}>Еженедельный подкаст «InvestFuture</p>
              <p className="text-white text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 400 }}>на Рекорде» на радио Record</p>
            </div>
          </motion.div>

        </div>

        {/* Filter row */}
        <div className="mb-6">
          <p className="text-[#6c7179] text-[14px] mb-3" style={{ fontFamily: F, fontWeight: 500 }}>Архив выступлений</p>

          {/* ── Встраиваем CSS прямо сюда для управления скроллом ── */}
          <style>{`
            /* Элегантный тонкий скроллбар (как на iOS) */
            .ios-scroll::-webkit-scrollbar {
              height: 4px; /* Толщина ползунка */
            }
            .ios-scroll::-webkit-scrollbar-track {
              background: transparent; /* Прозрачный фон под ползунком */
            }
            .ios-scroll::-webkit-scrollbar-thumb {
              background-color: #E5E7EB; /* Светло-серый цвет ползунка */
              border-radius: 10px; /* Скругления */
            }
            .ios-scroll::-webkit-scrollbar-thumb:hover {
              background-color: #D1D5DB; /* Чуть темнеет при наведении */
            }

            /* Класс-невидимка (если решишь спрятать ползунок вообще) */
            .hide-scroll::-webkit-scrollbar {
              display: none;
            }
            .hide-scroll {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

          {/* Возвращаем горизонтальный скролл и добавляем наш класс ios-scroll */}
          <div className="flex gap-2 overflow-x-auto pb-2 ios-scroll" style={{ WebkitOverflowScrolling: "touch" }}>
            {filterTabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-4 py-2.5 rounded-[8px] text-[14px] transition-all duration-200 whitespace-nowrap ${active === tab ? "bg-[#7430f7] text-white" : "bg-[#f7f7f7] text-[#111] hover:bg-[#eee]"}`}
                style={{ fontFamily: F, fontWeight: 400 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((card: any, i: number) => (
              <motion.div
                key={card.title + i}
                layout
                className="group bg-[#111] rounded-[16px] overflow-hidden relative h-[240px]"
                style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
              >
                {card.img && (
                  <img
                    src={card.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-start justify-between">
                    <p className="text-white text-[14px] leading-[1.25]" style={{ fontFamily: F, fontWeight: 400 }}>{card.desc}</p>
                    <p className="text-[#6c7179] text-[14px] shrink-0 ml-2" style={{ fontFamily: F, fontWeight: 500 }}>{card.year}</p>
                  </div>
                  <div>
                    <div className="flex gap-1 flex-wrap mb-3">
                      {card.tags.map(t => (
                        <span key={t} className="inline-block border border-white text-white text-[12px] px-2.5 py-1.5 rounded-[8px]" style={{ fontFamily: F, fontWeight: 500 }}>{t}</span>
                      ))}
                    </div>
                    <p className="text-white text-[24px] leading-[1.15]" style={{ fontFamily: F, fontWeight: 500 }}>{card.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setShown(s => s + 4)}
              className="bg-[#111] hover:bg-[#333] text-white text-[14px] px-9 py-4 rounded-[8px] transition-colors"
              style={{ fontFamily: F, fontWeight: 500 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Загрузить еще
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   TOPICS (Performances)
════════════════════════════════════════════ */
const topicItems = [
  {
    title: "Общая финансовая грамотность",
    desc: "Базовые принципы управления личными финансами: бюджет, сбережения, кредиты и инвестиционная культура. Практические инструменты для выхода на финансовую независимость.",
  },
  {
    title: "Инвестиции для физических лиц",
    desc: "Базовые принципы инвестирования и формирование первого безопасного портфеля. Простым языком об оценке рисков и стратегии первых шагов на рынке.",
  },
  {
    title: "Аналитика финансовых рынков",
    desc: "Разбор инструментов для чтения рынка. Важные индикаторы и тренды, влияющие на инвестиционные решения вне информационного шума.",
  },
  {
    title: "Психология управления капиталом",
    desc: "Влияние эмоций на финансовые решения и формирование инвестиционной дисциплины. Управление страхом и склонностью к риску в инвестировании.",
  },
  {
    title: "Долгосрочные стратегии в инвестициях",
    desc: "Проверенные временем подходы к созданию капитала через сложные проценты. Планирование накопления для достижения финансовых целей.",
  },
  {
    title: "Женские деньги",
    desc: "Комплексный подход к финансовой независимости с учётом особенностей женского взгляда на деньги и семейные финансы.",
  },
  {
    title: "Развитие личного бренда в финансовой нише",
    desc: "Построение успешной экспертной практики: от выбора ниши до создания востребованного финансового контента.",
  },
  {
    title: "Эволюция инвестирования в России",
    desc: "Эволюция инвестиционных возможностей в России и современные тенденции развития финансового рынка.",
  },
  {
    title: "Личные финансы в эпоху нестабильности",
    desc: "Инструменты сохранения сбережений в условиях нестабильности. Стратегии диверсификации и выбор защитных активов.",
  },
];

function TopicsSection() {
  const { ref, inView } = useInViewOnce();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="topics" className="bg-[#f7f7f7] pt-20 pb-16 overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[226px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[28px] leading-[1.15] text-[#111] mb-[56px]" style={{ fontFamily: F, fontWeight: 600 }}>Темы выступлений</p>
            <p className="text-[20px] leading-[1.25] text-[#111] mb-0" style={{ fontFamily: F, fontWeight: 500 }}>Lorem Ipsum is simply dummy text</p>
            <p className="text-[20px] leading-[1.25] mb-10" style={{ fontFamily: F, fontWeight: 500 }}>
              <span className="text-[#111]">of the printing </span>
              <span className="text-[#6c7179]">and typesetting industry.</span>
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center bg-[#111] hover:bg-[#333] text-white text-[14px] px-9 py-4 rounded-[8px] transition-colors"
              style={{ fontFamily: F, fontWeight: 500 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Пригласить на мероприятие
            </motion.a>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {topicItems.map((topic, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-[8px] overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.05 }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <div className="flex items-center justify-between px-4 py-3">
                  <p className="text-[#111] text-[14px]" style={{ fontFamily: F, fontWeight: 500 }}>{topic.title}</p>
                  <motion.div
                    animate={{ rotate: openIdx === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 ml-3 w-3 h-3"
                  >
                    <svg fill="none" viewBox="0 0 13 13" className="w-full h-full">
                      <path d={svgPaths.p95789a0} stroke="#111" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-4 pb-4 text-[13px] text-[#6c7179] leading-[1.5]" style={{ fontFamily: F, fontWeight: 400 }}>
                        {topic.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CTA / CONTACT
════════════════════════════════════════════ */
/* shared social links block */
function ContactSocials() {
  return (
    <div className="flex flex-col gap-[10px]">
      <a href="https://investfuture.ru" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-[6px] hover:opacity-60 transition-opacity duration-150">
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
          <g><path clipRule="evenodd" d={svgPaths.p353cb300} fill="#111" fillRule="evenodd" /></g>
        </svg>
        <span style={{ fontSize: 12, fontWeight: 400, fontFamily: F, lineHeight: 1.4, whiteSpace: "nowrap", color: "#111" }}>investfuture.ru</span>
      </a>
      <a href="https://youtube.com/@InvestFuture" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-[6px] hover:opacity-60 transition-opacity duration-150">
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 11.2531">
          <path d={svgPaths.p30e21700} fill="#111" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 400, fontFamily: F, lineHeight: 1.4, whiteSpace: "nowrap", color: "#111" }}>InvestFuture</span>
      </a>
      <a href="https://linkedin.com/in/kira-yukhtenko" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-[6px] hover:opacity-60 transition-opacity duration-150">
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
          <path d={svgPaths.p324e5e00} fill="#111" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 400, fontFamily: F, lineHeight: 1.4, whiteSpace: "nowrap", color: "#111" }}>LinkedIn</span>
      </a>
    </div>
  );
}

function CTASection() {
  const { ref, inView } = useInViewOnce();

  return (
    <section id="contact" className="bg-white pt-12 pb-14 overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[150px]">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-[120px] gap-2 mb-8 lg:mb-10">
          <motion.p
            className="text-[#6c7179] text-[14px] shrink-0 md:pt-[6px]"
            style={{ fontFamily: F, fontWeight: 500 }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Контакты
          </motion.p>
          <motion.p
            className="text-[22px] md:text-[28px] leading-[1.25] text-[#111]"
            style={{ fontFamily: F, fontWeight: 600 }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Пригласить Киру на мероприятие<br />или заказать модерацию
          </motion.p>
        </div>

        {/* Card */}
        <motion.div
          className="bg-[#f7f7f7] rounded-[16px] w-full overflow-hidden"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* ── Mobile layout ── */}
          <div className="flex flex-col gap-5 p-5 md:hidden">
            {/* Avatar + name */}
            <div className="flex items-center gap-3">
              <div className="rounded-[8px] overflow-hidden shrink-0" style={{ width: 36, height: 36, background: "#7430f7" }}>
                <img src={imgImage143} alt="Кира Юхтенко" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#111] text-[14px]" style={{ fontFamily: F, fontWeight: 600 }}>Кира Юхтенко</p>
            </div>
            {/* Title */}
            <div>
              <p style={{ fontSize: 18, fontWeight: 600, fontFamily: F, lineHeight: 1.2, color: "#111" }}>
                Готовы обсудить предстоящее событие?
              </p>
              <p className="text-[#6c7179] mt-1.5" style={{ fontSize: 13, fontWeight: 500, fontFamily: F, lineHeight: 1.4 }}>
                Ответим в рабочее время в течение 1 часа
              </p>
            </div>
            {/* Socials */}
            <ContactSocials />
            {/* Divider */}
            <div className="bg-[#e0e0e0] h-px w-full" />
            {/* Telegram */}
            <div>
              <p className="text-[#6c7179] mb-3" style={{ fontSize: 13, fontWeight: 500, fontFamily: F, lineHeight: 1.4 }}>
                Напишите нам напрямую в Telegram:
              </p>
              <motion.a
                href="https://t.me/IF_adv" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-[6px] bg-[#111] text-white rounded-[8px] px-8 py-2.5"
                whileHover={{ scale: 1.03, backgroundColor: "#333" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path clipRule="evenodd" d={svgPaths.p2b2a9d80} fill="white" fillRule="evenodd" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 500, fontFamily: F, lineHeight: 1.4, whiteSpace: "nowrap" }}>@IF_adv</span>
              </motion.a>
            </div>
          </div>

          {/* ── Desktop layout ── */}
          <div className="hidden md:block relative" style={{ height: 350 }}>
            {/* Avatar */}
            <div className="absolute rounded-[8px] overflow-hidden" style={{ width: 36, height: 36, top: 20, left: 20, background: "#7430f7" }}>
              <img src={imgImage143} alt="Кира Юхтенко" className="w-full h-full object-cover pointer-events-none" />
            </div>
            {/* Title */}
            <div className="absolute text-[#111]" style={{ top: 76, left: 20, fontSize: 20, fontWeight: 600, fontFamily: F, lineHeight: 1.15 }}>
              <p className="mb-0">Готовы обсудить</p>
              <p>предстоящее событие?</p>
            </div>
            {/* Subtitle */}
            <div className="absolute text-[#6c7179]" style={{ top: 133, left: 20, fontSize: 14, fontWeight: 500, fontFamily: F, lineHeight: 1.25 }}>
              <p className="mb-0">Ответим в рабочее время</p>
              <p>в течение 1 часа</p>
            </div>
            {/* Socials */}
            <div className="absolute" style={{ top: 140, left: "50.8%" }}>
              <ContactSocials />
            </div>
            {/* Telegram label */}
            <p className="absolute text-[#6c7179]" style={{ top: 268, left: 20, fontSize: 14, fontWeight: 500, fontFamily: F, lineHeight: 1.25, whiteSpace: "nowrap" }}>
              Напишите нам напрямую в Telegram:
            </p>
            {/* Telegram button */}
            <motion.a
              href="https://t.me/IF_adv" target="_blank" rel="noopener noreferrer"
              className="absolute flex items-center gap-[6px] bg-[#111] text-white rounded-[8px]"
              style={{ top: 294, left: 20, paddingLeft: 48, paddingRight: 48, paddingTop: 10, paddingBottom: 10 }}
              whileHover={{ scale: 1.03, backgroundColor: "#333" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path clipRule="evenodd" d={svgPaths.p2b2a9d80} fill="white" fillRule="evenodd" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 500, fontFamily: F, lineHeight: 1.4, whiteSpace: "nowrap" }}>@IF_adv</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SiteFooter() {
  const { ref, inView } = useInViewOnce("-20px");
  return (
    <footer className="bg-black relative overflow-hidden" style={{ height: 605 }} ref={ref}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 605">
          <rect fill="black" height="605" width="1200" />
          <g>
            <path d={svgFooter.p28a6f500} fill="#111111" />
            <path d={svgFooter.p121df00} fill="#111111" />
            <path d={svgFooter.p23fe6700} fill="#111111" />
            <path d={svgFooter.p2b4df200} fill="#111111" />
            <path d={svgFooter.p233a2c80} fill="#111111" />
            <path d={svgFooter.p2068b400} fill="#111111" />
            <path d={svgFooter.p7fe1d30} fill="#111111" />
            <path d={svgFooter.p3b79b000} fill="#111111" />
            <path d={svgFooter.p266e1d80} fill="#111111" />
            <path d={svgFooter.p6877880} fill="#111111" />
            <path d={svgFooter.p339f5900} fill="#111111" />
          </g>
        </svg>
      </motion.div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: F }}>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <AudienceSection />
        <AwardsSection />
        <ExperienceSection />
        <TopicsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
