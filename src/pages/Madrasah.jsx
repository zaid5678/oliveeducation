import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Madrasah() {
  useEffect(() => {
    document.title = 'Madrasah — Olive Education'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', "Olive Education Madrasah runs every Thursday 5–7pm in London. We teach Qur'an, Islamic Studies, Seerah and more.")
  }, [])

  return (
    <div className="bg-[#1C3A2A]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="geo-texture pt-32 pb-20 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="label mb-7 flex items-center">
            <span className="section-mark" />
            Islamic Education
          </p>
          <h1
            className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl mb-8"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Olive Education Madrasah
          </h1>
          <p className="font-sans text-[#F5F0E8]/65 text-lg max-w-xl leading-relaxed">
            Empowering young Muslims through knowledge, faith and community.
          </p>
        </div>
        <div className="rule mt-20" />
      </section>

      {/* ── Key Info Banner ───────────────────────────────────────── */}
      <section className="bg-[#D4E84A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x md:divide-[#1C3A2A]/15">
            {[
              { icon: <Calendar size={16} />, label: 'When', value: 'Every Thursday (Term Time)' },
              { icon: <Clock size={16} />, label: 'Time', value: '5:00pm – 7:00pm' },
              { icon: <MapPin size={16} />, label: 'Location', value: 'Lillington Gardens Community Hall, Vauxhall Bridge Road, London SW1V 2LF' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 md:px-8 first:pl-0">
                <span className="text-[#1C3A2A] mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-sans text-[#1C3A2A]/50 text-xs font-semibold uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-sans text-[#1C3A2A] font-semibold text-sm leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#111f17]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <ScrollReveal>
            <p className="label mb-5 flex items-center">
              <span className="section-mark" />
              We Teach
            </p>
            <h2
              className="display text-3xl sm:text-4xl mb-16"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Curriculum
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                n: '01',
                title: "Qaa'idah, Qur'an & Du'aas",
                body: "From foundational letter recognition in Qaa'idah through to fluent Qur'anic recitation, combined with essential supplications for daily life.",
              },
              {
                n: '02',
                title: 'Islamic Studies',
                body: 'Core principles of faith, worship, character and conduct — taught in a way that is relevant, accessible and inspiring for young learners.',
              },
              {
                n: '03',
                title: "Seerah & Ahadeeth",
                body: "The life of the Prophet Muhammad ﷺ and key Prophetic narrations — building love, understanding and a living connection to Islamic tradition.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 80}>
                <div className="rule" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
                  <div className="md:col-span-1">
                    <span className="font-sans text-[#C9A84C]/40 text-xs font-medium">{item.n}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className="display text-2xl md:text-3xl"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-sans text-[#F5F0E8]/65 leading-relaxed text-sm md:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="rule" />
          </div>

        </div>
      </section>

      {/* ── What We Provide ───────────────────────────────────────── */}
      <section className="py-24 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-16">

            <ScrollReveal className="lg:col-span-4">
              <p className="label mb-5 flex items-center">
                <span className="section-mark" />
                We Provide
              </p>
              <h2
                className="display text-3xl sm:text-4xl"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Our Offer
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:col-span-8">
              <ul className="space-y-4">
                {[
                  'Qualified Teachers',
                  'Interactive and Engaging Lessons',
                  'Extracurricular Activities',
                  'Trips and Special Events',
                  'Opportunities to Mentor',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 py-4 border-b border-[#C9A84C]/12">
                    <CheckCircle2 size={16} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="font-sans text-[#F5F0E8]/80 font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Poster ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#111f17]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <ScrollReveal className="lg:col-span-5 order-2 lg:order-1">
              <p className="label mb-5 flex items-center">
                <span className="section-mark" />
                Information Poster
              </p>
              <h2
                className="display text-3xl sm:text-4xl mb-5"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Spread the Word
              </h2>
              <p className="font-sans text-[#F5F0E8]/65 text-sm leading-relaxed mb-8">
                Download and share our poster with your local mosque, school, or community group. Every referral helps our community grow.
              </p>
              <p className="font-sans text-[#F5F0E8]/40 text-xs">
                Madrasah · Every Thursday · 5–7pm · Lillington Gardens
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
              <div className="border border-[#C9A84C]/20 rounded overflow-hidden">
                <img
                  src="/images/poster.jpeg"
                  alt="Olive Education Madrasah information poster"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Registration CTA ──────────────────────────────────────── */}
      <section className="geo-texture py-20 bg-[#1C3A2A]">
        <div className="rule" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
              <div>
                <p className="label mb-4 flex items-center">
                  <span className="section-mark" />
                  Enrol Today
                </p>
                <h2
                  className="display text-4xl sm:text-5xl mb-4"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Ready to Enrol?
                </h2>
                <p className="font-sans text-[#F5F0E8]/60 text-sm leading-relaxed max-w-md">
                  Contact us to register your child or find out more. We welcome children of all levels and backgrounds.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-sm rounded hover:bg-[#E8C96A] transition-colors duration-200"
                >
                  Get in Touch <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+447723383465"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#C9A84C]/50 text-[#C9A84C] font-sans font-medium text-sm rounded hover:border-[#C9A84C] transition-colors duration-200"
                >
                  <Phone size={14} />
                  Call Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="rule" />
      </section>

    </div>
  )
}
