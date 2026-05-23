import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown, BookOpen, FlaskConical } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  useEffect(() => {
    document.title = 'Olive Education — Empowering Minds, Inspiring Futures'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Olive Education is a London-based Islamic educational organisation offering Madrasah classes every Thursday and a forthcoming STEAM programme.')
  }, [])

  return (
    <div className="bg-[#1C3A2A]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="geo-texture min-h-screen flex flex-col justify-between pt-20">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-12 items-center">

              {/* Text */}
              <div className="lg:col-span-7">
                <p className="label mb-8 flex items-center">
                  <span className="section-mark" />
                  Islamic Education · London, UK
                </p>

                <h1
                  className="display text-[3.2rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.2rem] mb-8 max-w-2xl"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Empowering Minds,<br />
                  Inspiring&nbsp;Futures
                </h1>

                <p className="font-sans text-[#F5F0E8]/70 text-base md:text-lg leading-relaxed max-w-xl mb-10">
                  A community-led educational organisation dedicated to nurturing the next generation through Islamic education and STEAM learning.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/madrasah"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-sm rounded hover:bg-[#E8C96A] transition-colors duration-200"
                  >
                    Explore Madrasah
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    to="/steam"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#C9A84C]/50 text-[#C9A84C] font-sans font-medium text-sm rounded hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-colors duration-200"
                  >
                    Discover STEAM
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  <div className="aspect-square rounded overflow-hidden border border-[#C9A84C]/20 bg-white">
                    <img
                      src="/images/logo-HD.png"
                      alt="Olive Education"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  {/* Caption strip */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-sans text-[#F5F0E8]/40 text-xs">Est. London</span>
                    <span className="font-sans text-[#F5F0E8]/40 text-xs">Madrasah · STEAM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="rule" />
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
          <p className="font-sans text-[#F5F0E8]/35 text-xs">
            Every Thursday · 5–7pm · Lillington Gardens, Community Hall, Vauxhall
          </p>
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors duration-200 scroll-indicator"
            aria-label="Scroll down"
          >
            <ArrowDown size={16} />
          </button>
        </div>
      </section>

      {/* ── What We Offer ─────────────────────────────────────────── */}
      <section className="bg-[#111f17] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <ScrollReveal>
            <div className="flex items-center justify-between mb-14 flex-wrap gap-6">
              <div>
                <p className="label mb-4 flex items-center">
                  <span className="section-mark" />
                  What We Offer
                </p>
                <h2
                  className="display text-4xl sm:text-5xl"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Two Pillars of Learning
                </h2>
              </div>
              <Link
                to="/about"
                className="font-sans text-[#C9A84C] text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200 self-end"
              >
                About us <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C9A84C]/15">

            {/* Madrasah */}
            <ScrollReveal>
              <Link to="/madrasah" className="group block bg-[#111f17] p-10 md:p-12 hover:bg-[#1a2d22] transition-colors duration-200 h-full">
                <div className="flex items-start justify-between mb-8">
                  <BookOpen size={22} className="text-[#C9A84C] mt-1" />
                  <span className="font-sans text-[#D4E84A] text-xs font-semibold px-3 py-1 border border-[#D4E84A]/40 rounded-sm">
                    Thursday · 5–7pm
                  </span>
                </div>
                <h3
                  className="display text-2xl sm:text-3xl mb-5"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Olive Education<br />Madrasah
                </h3>
                <p className="font-sans text-[#F5F0E8]/65 text-sm leading-relaxed mb-8">
                  A safe and nurturing space where children learn Qaa'idah, Qur'an, Islamic Studies, Seerah and more — every Thursday during term time.
                </p>
                <span className="font-sans text-[#C9A84C] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>

            {/* STEAM */}
            <ScrollReveal delay={100}>
              <Link to="/steam" className="group block bg-[#111f17] p-10 md:p-12 hover:bg-[#1a2d22] transition-colors duration-200 h-full">
                <div className="flex items-start justify-between mb-8">
                  <FlaskConical size={22} className="text-[#C9A84C] mt-1" />
                  <span className="font-sans text-[#C9A84C] text-xs font-semibold px-3 py-1 border border-[#C9A84C]/30 rounded-sm">
                    Launching soon
                  </span>
                </div>
                <h3
                  className="display text-2xl sm:text-3xl mb-5"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  STEAM<br />Programme
                </h3>
                <p className="font-sans text-[#F5F0E8]/65 text-sm leading-relaxed mb-8">
                  Our upcoming Science, Technology, Engineering, Arts & Maths programme — designed to inspire curiosity and build future skills in young minds.
                </p>
                <span className="font-sans text-[#C9A84C] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Find out more <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Community ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-16">

            <ScrollReveal className="lg:col-span-5">
              <p className="label mb-6 flex items-center">
                <span className="section-mark" />
                Who We Are
              </p>
              <blockquote
                className="display text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                "Run by the community, for the community."
              </blockquote>
              <Link
                to="/about"
                className="font-sans text-[#C9A84C] text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200"
              >
                Our story <ArrowRight size={14} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200} className="lg:col-span-7">
              <div className="space-y-6 pt-2 lg:pt-14">
                <p className="font-sans text-[#F5F0E8]/75 leading-relaxed">
                  Olive Education was founded on a deep belief that every child deserves access to quality Islamic education in a welcoming, community-driven environment. We work closely with families to ensure our lessons are engaging, age-appropriate, and rooted in strong Islamic values.
                </p>
                <p className="font-sans text-[#F5F0E8]/75 leading-relaxed">
                  Our teachers are qualified, passionate, and dedicated to every child's growth. Whether your child is just beginning their Qur'anic journey or building on existing knowledge, Olive Education is a place where they can thrive.
                </p>
                <div className="rule-strong mt-8 pt-8">
                  <div className="grid grid-cols-3 gap-6 pt-8">
                    {[
                      { label: "Qur'an & Islamic Studies", note: "Taught weekly" },
                      { label: "Community-led", note: "Locally run" },
                      { label: "Qualified teachers", note: "Every class" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="font-sans text-[#C9A84C] font-medium text-sm mb-1">{s.label}</p>
                        <p className="font-sans text-[#F5F0E8]/40 text-xs">{s.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="geo-texture py-24 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="label mb-6 flex items-center">
                <span className="section-mark" />
                Join Us
              </p>
              <h2
                className="display text-4xl sm:text-5xl md:text-6xl mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Ready to join our community?
              </h2>
              <p className="font-sans text-[#F5F0E8]/65 text-base leading-relaxed mb-3">
                Madrasah runs every Thursday, 5–7pm, during term time. Contact us to register your child.
              </p>
              <p className="font-sans text-sm mb-10">
                <a href="tel:+447723383465" className="text-[#C9A84C] hover:underline">+44 7723 383 465</a>
                <span className="text-[#F5F0E8]/30 mx-3">·</span>
                <a href="mailto:oliveeducation@mail.com" className="text-[#C9A84C] hover:underline">oliveeducation@mail.com</a>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-sm rounded hover:bg-[#E8C96A] transition-colors duration-200"
                >
                  Register Now
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/madrasah"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#C9A84C]/50 text-[#C9A84C] font-sans font-medium text-sm rounded hover:border-[#C9A84C] transition-colors duration-200"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
