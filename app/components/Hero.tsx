import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImage from "figma:asset/7b1a4703af3946fe89cdc1a2c839bf2b5eac65a2.png";
import { ChevronDown, Play } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-800/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
      </motion.div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div style={{ y: textY, opacity }} className="order-2 lg:order-1">
            <motion.div
              className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Фінансова журналістка & спікер
            </motion.div>

            <motion.h1
              className="text-white mb-4"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Кіра
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                Юхтенко
              </span>
            </motion.h1>

            <motion.p
              className="text-white/60 text-lg mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Засновниця медіа-бренду, фінансова журналістка та авторка онлайн-курсів.
              Допомагаю бізнесу, медіа та аудиторії розбиратися у фінансах та інвестиціях.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95"
              >
                Запросити на виступ
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 border border-white/20 hover:border-violet-400/60 text-white hover:text-violet-300 px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-violet-500/10 hover:scale-105 active:scale-95"
              >
                <Play size={16} className="group-hover:text-violet-400 transition-colors" />
                Дивитися курси
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { value: "1.2M+", label: "Підписників" },
                { value: "287+", label: "Виступів" },
                { value: "2016", label: "Рік старту" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <div className="text-white text-2xl font-bold">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glowing ring */}
              <motion.div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/30 to-purple-800/20 blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative rounded-[1.5rem] overflow-hidden w-[340px] sm:w-[420px] lg:w-[480px] aspect-[3/4]">
                <img
                  src={heroImage}
                  alt="Кіра Юхтенко"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-white font-bold text-lg">10+ років</div>
                <div className="text-white/50 text-xs">досвіду у медіа</div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 bg-violet-600/90 backdrop-blur-md rounded-2xl px-4 py-3"
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-white font-bold text-sm">Top Speaker</div>
                <div className="text-white/70 text-xs">Forbes UA 2024</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Гортати</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
