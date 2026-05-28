import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.08] py-32 px-6 lg:px-10"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left */}
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
              01 — Who We Are
            </p>

            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              We create premium digital experiences for modern brands.
            </h2>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.1}>
            <div>
              <p className="text-lg leading-relaxed text-zinc-400">
                Tech stack is a modern web development studio focused on
                building fast, scalable, and visually engaging websites and web
                applications. We combine clean UI design with modern
                technologies to help businesses create a strong digital
                presence.
              </p>

              {/* Highlights */}
              <div className="mt-10 space-y-4">
                {[
                  "Modern & responsive web experiences",
                  "High-performance development architecture",
                  "Clean UI/UX focused on conversions",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-zinc-950/50 px-5 py-4"
                  >
                    <div className="h-2 w-2 rounded-full bg-indigo-400" />

                    <p className="text-sm text-zinc-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)]"
                >
                  Learn More

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}