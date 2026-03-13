import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Sparkles, Zap, Layers, MousePointer, RefreshCw, Eye, Play, Pause, RotateCcw } from "lucide-react";

// ─── helpers ────────────────────────────────────────────────
function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

// ─── Section wrapper ─────────────────────────────────────────
function Section({ id, title, icon: Icon, badge, children }: {
  id: string; title: string; icon: React.ElementType; badge: string; children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id={id} className="py-24 relative overflow-hidden" ref={ref}>
      {/* dim divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        {/* header */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-10 h-10 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
            <Icon size={18} className="text-violet-400" />
          </div>
          <div>
            <span className="text-violet-400 text-xs tracking-widest uppercase">{badge}</span>
            <h2 className="text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700 }}>{title}</h2>
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

// ─── 1. ENTRANCE ANIMATIONS ──────────────────────────────────
function EntranceSection() {
  const [key, setKey] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = [
    { label: "Fade Up", initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    { label: "Fade Down", initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    { label: "Fade Left", initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    { label: "Fade Right", initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    { label: "Zoom In", initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } },
    { label: "Zoom Out", initial: { opacity: 0, scale: 1.5 }, animate: { opacity: 1, scale: 1 } },
    { label: "Flip X", initial: { opacity: 0, rotateX: 90 }, animate: { opacity: 1, rotateX: 0 } },
    { label: "Flip Y", initial: { opacity: 0, rotateY: 90 }, animate: { opacity: 1, rotateY: 0 } },
    { label: "Rotate", initial: { opacity: 0, rotate: -180, scale: 0 }, animate: { opacity: 1, rotate: 0, scale: 1 } },
  ];

  return (
    <Section id="entrance" title="Entrance Animations" icon={Eye} badge="01 — Scroll Triggers">
      <div ref={ref}>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-6">
          {variants.map((v, i) => (
            <motion.div
              key={`${key}-${i}`}
              initial={v.initial}
              animate={inView ? v.animate : v.initial}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-violet-600/30 to-purple-800/30 border border-violet-500/20 flex items-end justify-center p-2"
            >
              <span className="text-violet-300 text-[9px] text-center leading-tight">{v.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => { setKey(k => k + 1); }}
            className="inline-flex items-center gap-2 text-violet-400 hover:text-white border border-violet-500/30 hover:border-violet-400 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-violet-500/10"
          >
            <RotateCcw size={13} /> Replay
          </button>
        </div>

        {/* Spring stagger demo */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Spring Bounce", "Elastic", "Overshoot", "Gentle"].map((label, i) => {
            const springs = [
              { type: "spring", stiffness: 400, damping: 10 },
              { type: "spring", stiffness: 300, damping: 5 },
              { type: "spring", stiffness: 600, damping: 8 },
              { type: "spring", stiffness: 120, damping: 20 },
            ] as const;
            return (
              <motion.div
                key={`${key}-spring-${i}`}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/40 transition-colors"
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...springs[i], delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(139,92,246,0.5)" }}
              >
                <div className="w-8 h-8 rounded-xl bg-violet-600/30 border border-violet-500/30 mb-3" />
                <p className="text-white text-sm">{label}</p>
                <p className="text-white/40 text-xs mt-1">
                  stiffness {springs[i].stiffness} / damping {springs[i].damping}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ─── 2. GESTURE / INTERACTIVE ────────────────────────────────
function GestureSection() {
  const [dragged, setDragged] = useState(false);
  const [taps, setTaps] = useState(0);
  const constraintsRef = useRef(null);

  return (
    <Section id="gestures" title="Gestures & Interaction" icon={MousePointer} badge="02 — User Input">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Drag */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 overflow-hidden">
          <p className="text-white/50 text-xs uppercase tracking-widest">Drag</p>
          <div
            ref={constraintsRef}
            className="h-36 rounded-2xl bg-white/5 border border-dashed border-white/10 relative flex items-center justify-center"
          >
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
              onDragStart={() => setDragged(true)}
              onDragEnd={() => setDragged(false)}
              whileDrag={{ scale: 1.15, boxShadow: "0 0 30px rgba(139,92,246,0.6)" }}
              className="w-12 h-12 rounded-2xl bg-violet-600 cursor-grab active:cursor-grabbing flex items-center justify-center"
            >
              <Sparkles size={18} className="text-white" />
            </motion.div>
          </div>
          <p className="text-white/40 text-xs">{dragged ? "Dragging..." : "Drag the gem around"}</p>
        </div>

        {/* Tap counter */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4">
          <p className="text-white/50 text-xs uppercase tracking-widest">Tap / Click</p>
          <div className="flex-1 flex items-center justify-center">
            <motion.button
              onClick={() => setTaps(t => t + 1)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.88 }}
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center cursor-pointer select-none"
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={taps}
                  className="text-white text-2xl font-bold absolute"
                  initial={{ scale: 0.5, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.5, opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {taps}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
          <p className="text-white/40 text-xs">Tap count: {taps}</p>
        </div>

        {/* Hover magnetic */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4">
          <p className="text-white/50 text-xs uppercase tracking-widest">Hover States</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Scale", hover: { scale: 1.1 } },
              { label: "Glow", hover: { boxShadow: "0 0 24px rgba(139,92,246,0.7)" } },
              { label: "Rotate", hover: { rotate: 5, scale: 1.05 } },
              { label: "Skew", hover: { skewX: 6, scale: 1.05 } },
            ].map(({ label, hover }) => (
              <motion.div
                key={label}
                whileHover={hover}
                className="bg-violet-600/20 border border-violet-500/20 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer"
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="text-white text-sm">{label}</span>
                <Zap size={14} className="text-violet-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── 3. MORPHING / KEYFRAMES ────────────────────────────────
function MorphSection() {
  const [playing, setPlaying] = useState(true);

  const blobs = [
    "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    "circle(50%)",
  ];

  return (
    <Section id="morph" title="Morphing & Keyframes" icon={Layers} badge="03 — Shape Shift">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blob morph */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4">
          <p className="text-white/50 text-xs uppercase tracking-widest">Blob Morph</p>
          <div className="relative h-48 w-full flex items-center justify-center">
            <motion.div
              className="w-36 h-36 bg-gradient-to-br from-violet-500 to-purple-700"
              animate={playing ? { clipPath: blobs } : {}}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Color cycle */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4">
          <p className="text-white/50 text-xs uppercase tracking-widest">Color Cycle</p>
          <div className="flex-1 flex items-center justify-center w-full">
            <motion.div
              className="w-36 h-36 rounded-3xl"
              animate={playing ? {
                background: [
                  "linear-gradient(135deg, #7c3aed, #a855f7)",
                  "linear-gradient(135deg, #2563eb, #7c3aed)",
                  "linear-gradient(135deg, #db2777, #7c3aed)",
                  "linear-gradient(135deg, #059669, #2563eb)",
                  "linear-gradient(135deg, #7c3aed, #a855f7)",
                ],
              } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Orbit */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4">
          <p className="text-white/50 text-xs uppercase tracking-widest">Orbital</p>
          <div className="relative h-48 w-full flex items-center justify-center">
            <div className="relative w-32 h-32">
              {/* center */}
              <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-violet-500 z-10" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
              {/* orbit rings */}
              {[40, 55, 70].map((r, i) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-violet-500/20"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
              {/* planets */}
              {[
                { r: 40, dur: 2, color: "#a855f7", size: 8 },
                { r: 55, dur: 3.5, color: "#60a5fa", size: 6 },
                { r: 70, dur: 5, color: "#34d399", size: 5 },
              ].map(({ r, dur, color, size }, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    top: "50%",
                    left: "50%",
                    marginTop: -(r),
                    marginLeft: -(r),
                    borderRadius: "50%",
                  }}
                  animate={playing ? { rotate: 360 } : {}}
                  transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: size,
                      height: size,
                      backgroundColor: color,
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      boxShadow: `0 0 8px ${color}`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Path drawing */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4 sm:col-span-2 lg:col-span-3">
          <p className="text-white/50 text-xs uppercase tracking-widest">SVG Path Drawing</p>
          <svg viewBox="0 0 600 120" className="w-full max-w-xl" fill="none">
            {["M 20 60 C 80 10, 140 110, 200 60 S 320 10, 380 60 S 500 110, 580 60"].map((d, i) => (
              <motion.path
                key={`${i}-${playing}`}
                d={d}
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={playing ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
              />
            ))}
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => setPlaying(p => !p)}
          className="inline-flex items-center gap-2 text-violet-400 hover:text-white border border-violet-500/30 hover:border-violet-400 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-violet-500/10"
        >
          {playing ? <><Pause size={13} /> Pause</> : <><Play size={13} /> Play</>}
        </button>
      </div>
    </Section>
  );
}

// ─── 4. STAGGER / LIST ───────────────────────────────────────
function StaggerSection() {
  const [key, setKey] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  const items = ["Financial Literacy", "Investment Strategy", "Market Analysis", "Risk Management", "Portfolio Building", "Economic Trends", "Crypto & DeFi", "Personal Finance"];

  return (
    <Section id="stagger" title="Stagger & List Animations" icon={RefreshCw} badge="04 — Sequencing">
      <div className="grid lg:grid-cols-2 gap-10" ref={ref}>
        {/* vertical list */}
        <div>
          <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Cascading List</p>
          <motion.ul
            key={key}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-2"
          >
            {items.map((item, i) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-center gap-3 bg-white/5 hover:bg-violet-600/10 border border-white/10 hover:border-violet-500/30 rounded-xl px-4 py-3 cursor-default transition-colors"
                whileHover={{ x: 6 }}
              >
                <span className="text-violet-400 text-xs w-5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white text-sm">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <button
            onClick={() => setKey(k => k + 1)}
            className="mt-4 inline-flex items-center gap-2 text-violet-400 hover:text-white border border-violet-500/30 hover:border-violet-400 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-violet-500/10"
          >
            <RotateCcw size={13} /> Replay
          </button>
        </div>

        {/* grid pop */}
        <div>
          <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Grid Pop-In</p>
          <motion.div
            key={`grid-${key}`}
            className="grid grid-cols-4 gap-2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0, rotate: -20 },
                  visible: {
                    opacity: 1, scale: 1, rotate: 0,
                    transition: { type: "spring" as const, stiffness: 500, damping: 20 },
                  },
                }}
                whileHover={{ scale: 1.2, rotate: 5, zIndex: 10 }}
                className="aspect-square rounded-xl cursor-pointer"
                style={{
                  background: `hsl(${260 + i * 6}, 70%, ${40 + (i % 4) * 5}%)`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* text word reveal */}
      <div className="mt-14">
        <p className="text-white/40 text-xs mb-6 uppercase tracking-widest">Word-by-word Reveal</p>
        <motion.div
          key={`text-${key}`}
          className="flex flex-wrap gap-x-3 gap-y-1"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {"Фінансова грамотність відкриває двері до свободи та впевненого майбутнього.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: {
                  opacity: 1, y: 0, filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="text-white"
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 600 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// ─── 5. CURSOR PARALLAX ──────────────────────────────────────
function ParallaxSection() {
  const { x, y } = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 1, height: 1 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setBounds({ left: r.left, top: r.top, width: r.width, height: r.height });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const rx = ((x - bounds.left) / bounds.width - 0.5) * 2;
  const ry = ((y - bounds.top) / bounds.height - 0.5) * 2;

  const layers = [
    { depth: 0.04, size: 180, color: "from-violet-600/40 to-purple-800/40", blur: "blur-none", z: 4 },
    { depth: 0.08, size: 120, color: "from-blue-600/30 to-violet-600/30", blur: "blur-sm", z: 3 },
    { depth: 0.14, size: 80, color: "from-pink-600/25 to-purple-600/25", blur: "blur-md", z: 2 },
    { depth: 0.22, size: 50, color: "from-emerald-600/20 to-blue-600/20", blur: "blur-lg", z: 1 },
  ];

  return (
    <Section id="parallax" title="Cursor Parallax" icon={Eye} badge="05 — Depth Effect">
      <div
        ref={containerRef}
        className="relative h-80 rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center"
        style={{ perspective: "800px" }}
      >
        {/* background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: `translate(${rx * 8}px, ${ry * 8}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        {layers.map((l, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br ${l.color} ${l.blur}`}
            style={{
              width: l.size,
              height: l.size,
              zIndex: l.z,
              transform: `translate(${rx * l.depth * 300}px, ${ry * l.depth * 300}px)`,
              transition: "transform 0.08s ease-out",
            }}
          />
        ))}
        <div
          className="relative z-10 text-center"
          style={{
            transform: `rotateY(${rx * 8}deg) rotateX(${-ry * 8}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <p className="text-white/30 text-xs mb-2 tracking-widest uppercase">Move your cursor</p>
          <p className="text-white" style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700 }}>
            Depth & Parallax
          </p>
        </div>
      </div>

      {/* Scroll parallax cards */}
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        {[
          { label: "Layer 1", depth: 0 },
          { label: "Layer 2", depth: 1 },
          { label: "Layer 3", depth: 2 },
        ].map(({ label, depth }) => (
          <div
            key={label}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-3"
            style={{
              transform: `translateX(${rx * (depth + 1) * 6}px) translateY(${ry * (depth + 1) * 4}px)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            <div
              className="w-8 h-8 rounded-xl bg-violet-600/30 border border-violet-500/30 shrink-0"
              style={{ opacity: 1 - depth * 0.2 }}
            />
            <div>
              <p className="text-white text-sm">{label}</p>
              <p className="text-white/40 text-xs">depth × {depth + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── 6. ANIMATED COUNTERS & PROGRESS ────────────────────────
function CounterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
    const mv = useMotionValue(0);
    const spring = useSpring(mv, { stiffness: 60, damping: 20 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
      if (inView) mv.set(to);
    }, [inView, to, mv]);

    useEffect(() => {
      const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
      return unsub;
    }, [spring]);

    return <>{display}{suffix}</>;
  }

  const stats = [
    { label: "Виступів", value: 350, suffix: "+" },
    { label: "Учасників", value: 120, suffix: "K+" },
    { label: "Країн", value: 24, suffix: "" },
    { label: "Нагород", value: 18, suffix: "" },
  ];

  const skills = [
    { label: "Public Speaking", pct: 97 },
    { label: "Financial Analysis", pct: 92 },
    { label: "Audience Engagement", pct: 89 },
    { label: "Media Presence", pct: 85 },
    { label: "Digital Content", pct: 78 },
  ];

  return (
    <Section id="counters" title="Counters & Progress Bars" icon={Zap} badge="06 — Data Viz">
      <div ref={ref} className="grid lg:grid-cols-2 gap-10">
        {/* Counters */}
        <div>
          <p className="text-white/40 text-xs mb-6 uppercase tracking-widest">Animated Numbers</p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                whileHover={{ borderColor: "rgba(139,92,246,0.4)", y: -3 }}
              >
                <p className="text-violet-400" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1 }}>
                  <AnimatedNumber to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-white/50 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Circular progress */}
          <p className="text-white/40 text-xs mt-8 mb-4 uppercase tracking-widest">Circular Progress</p>
          <div className="flex gap-6 flex-wrap">
            {[75, 88, 62].map((pct, i) => {
              const r = 28;
              const circ = 2 * Math.PI * r;
              return (
                <div key={i} className="relative w-20 h-20 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
                    <circle cx="40" cy="40" r={r} stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="none" />
                    <motion.circle
                      cx="40" cy="40" r={r}
                      stroke="url(#pgGrad)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circ}
                      initial={{ strokeDashoffset: circ }}
                      animate={inView ? { strokeDashoffset: circ * (1 - pct / 100) } : {}}
                      transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="pgGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-white text-sm font-bold">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill bars */}
        <div>
          <p className="text-white/40 text-xs mb-6 uppercase tracking-widest">Skill Bars</p>
          <div className="space-y-5">
            {skills.map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-white text-sm">{s.label}</span>
                  <span className="text-violet-400 text-sm">{s.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.pct}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Wave bars */}
          <p className="text-white/40 text-xs mt-8 mb-4 uppercase tracking-widest">Wave Equalizer</p>
          <div className="flex items-end gap-1.5 h-16">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-full bg-gradient-to-t from-violet-700 to-purple-400"
                animate={{
                  height: [
                    `${20 + Math.sin(i * 0.6) * 15 + Math.random() * 30}%`,
                    `${50 + Math.cos(i * 0.4) * 20 + Math.random() * 30}%`,
                    `${20 + Math.sin(i * 0.6 + 1) * 15 + Math.random() * 30}%`,
                  ],
                }}
                transition={{
                  duration: 1.2 + (i % 5) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.04,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── 7. PRESENCE / TRANSITIONS ───────────────────────────────
function PresenceSection() {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(false);

  const tabs = ["Fade", "Slide", "Scale", "Flip"];
  const tabContent = [
    { bg: "from-violet-900/40 to-purple-900/40", text: "Smooth fade in/out — the most universal transition." },
    { bg: "from-blue-900/40 to-violet-900/40", text: "Slide transitions — perfect for navigation flows." },
    { bg: "from-pink-900/40 to-violet-900/40", text: "Scale transitions — energetic entrance & exit." },
    { bg: "from-emerald-900/40 to-blue-900/40", text: "Flip transitions — dramatic 3D perspective." },
  ];
  const tabVariants = [
    { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
    { initial: { x: 80, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -80, opacity: 0 } },
    { initial: { scale: 0.7, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 1.3, opacity: 0 } },
    { initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: -90, opacity: 0 } },
  ];

  return (
    <Section id="presence" title="AnimatePresence & Transitions" icon={Sparkles} badge="07 — Mount / Unmount">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Tab switcher */}
        <div>
          <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Tab Transition</p>
          <div className="flex gap-2 mb-4 flex-wrap">
            {tabs.map((t, i) => (
              <motion.button
                key={t}
                onClick={() => setActive(i)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors ${active === i ? "bg-violet-600 text-white" : "bg-white/5 text-white/50 hover:text-white border border-white/10"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t}
              </motion.button>
            ))}
          </div>
          <div className="relative h-40 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                {...tabVariants[active]}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${tabContent[active].bg} border border-white/10 rounded-2xl p-6 flex items-center justify-center`}
              >
                <p className="text-white text-center text-sm">{tabContent[active].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Modal */}
        <div>
          <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Modal / Overlay</p>
          <div className="h-40 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <motion.button
              onClick={() => setModal(true)}
              className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-full text-sm transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(139,92,246,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Open Modal
            </motion.button>
          </div>
        </div>
      </div>

      {/* notification stack */}
      <div className="mt-10">
        <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Live Notification Stream</p>
        <NotificationDemo />
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(false)}
            />
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-[#12111a] border border-violet-500/30 rounded-3xl p-8"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3 className="text-white mb-2" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Animation Modal</h3>
              <p className="text-white/60 text-sm mb-6">This modal uses a spring-based scale entrance and graceful opacity exit via AnimatePresence.</p>
              <motion.button
                onClick={() => setModal(false)}
                className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-full text-sm transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Close
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}

function NotificationDemo() {
  const [notes, setNotes] = useState<{ id: number; text: string; color: string }[]>([]);
  const counter = useRef(0);

  const POOL = [
    { text: "Нова заявка від учасника", color: "violet" },
    { text: "Виступ підтверджено ✓", color: "green" },
    { text: "Новий підписник курсу", color: "blue" },
    { text: "Медіа-запит отримано", color: "pink" },
    { text: "Нагорода підтверджена 🏆", color: "amber" },
  ];

  const COLORS: Record<string, string> = {
    violet: "border-violet-500/40 bg-violet-500/10 text-violet-300",
    green: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    blue: "border-blue-500/40 bg-blue-500/10 text-blue-300",
    pink: "border-pink-500/40 bg-pink-500/10 text-pink-300",
    amber: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  };

  const add = () => {
    const pool = POOL[counter.current % POOL.length];
    counter.current++;
    const id = Date.now();
    setNotes(n => [{ id, ...pool }, ...n.slice(0, 3)]);
  };

  useEffect(() => {
    const t = setInterval(add, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-2 min-h-[160px]">
      <AnimatePresence initial={false}>
        {notes.map(n => (
          <motion.div
            key={n.id}
            layout
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className={`border rounded-xl px-4 py-3 text-sm ${COLORS[n.color]}`}
          >
            {n.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────
export function AnimationsPage() {
  const sections = [
    { id: "entrance", label: "Entrance" },
    { id: "gestures", label: "Gestures" },
    { id: "morph", label: "Morph" },
    { id: "stagger", label: "Stagger" },
    { id: "parallax", label: "Parallax" },
    { id: "counters", label: "Counters" },
    { id: "presence", label: "Presence" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#08070f]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── sticky nav ── */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#08070f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft size={14} />
            Back to site
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-3 py-1 rounded-full text-xs text-white/40 hover:text-white hover:bg-white/5 transition-all"
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-1.5 text-violet-400 text-xs">
            <Sparkles size={12} />
            <span>Animation Kit</span>
          </div>
        </div>
      </header>

      {/* ── hero ── */}
      <div className="relative overflow-hidden border-b border-white/5 py-20 text-center">
        {/* ambient orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-violet-600/15 border border-violet-500/30 text-violet-400 text-xs px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles size={11} />
            Motion Design Showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mx-auto max-w-2xl px-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1 }}
          >
            Animation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400">
              Showcase
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/50 mt-4 max-w-lg mx-auto px-6 text-sm"
          >
            7 categories of production-ready animations — entrance, gestures, morphing, stagger, parallax, counters, and presence transitions.
          </motion.p>

          {/* animated section pills */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mt-8 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {sections.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/40 text-white/60 hover:text-white px-4 py-1.5 rounded-full text-xs transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + i * 0.06 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                {String(i + 1).padStart(2, "0")} {s.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── sections ── */}
      <EntranceSection />
      <GestureSection />
      <MorphSection />
      <StaggerSection />
      <ParallaxSection />
      <CounterSection />
      <PresenceSection />

      {/* footer */}
      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-white/30 text-xs">
          Built with{" "}
          <span className="text-violet-400">Motion</span> · Kira Yukhtenko Speaker Landing
        </p>
        <Link to="/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm mt-3 transition-colors">
          <ArrowLeft size={13} />
          Return to main page
        </Link>
      </footer>
    </div>
  );
}
