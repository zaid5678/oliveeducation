import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar, Clock, MapPin, BookOpen, Heart, ScrollText,
  CheckCircle2, Phone, Download
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Madrasah() {
  useEffect(() => {
    document.title = 'Madrasah — Olive Education'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Olive Education Madrasah runs every Thursday 5–7pm in London. We teach Qur\'an, Islamic Studies, Seerah and more.')
  }, [])

  return (
    <div className="bg-[#1C3A2A]">
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, #254D38 0%, #1C3A2A 55%, #111f17 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C]/70 text-xs mb-5">
            Islamic Education
          </p>
          <h1
            className="font-display italic text-[#C9A84C] text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Olive Education<br />Madrasah
          </h1>
          <p className="font-sans text-[#F5F0E8]/75 text-lg md:text-xl max-w-2xl leading-relaxed">
            Empowering young Muslims through knowledge, faith and community.
          </p>
        </div>
        <div className="gold-divider mt-16" />
      </section>

      {/* ── Info Banner ── */}
      <section className="px-4 py-0">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#D4E84A] rounded-2xl px-6 md:px-10 py-6 -mt-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
              {[
                {
                  icon: <Calendar size={20} className="text-[#1C3A2A] flex-shrink-0" />,
                  label: 'When',
                  value: 'Every Thursday (Term Time)',
                },
                {
                  icon: <Clock size={20} className="text-[#1C3A2A] flex-shrink-0" />,
                  label: 'Time',
                  value: '5:00pm – 7:00pm',
                },
                {
                  icon: <MapPin size={20} className="text-[#1C3A2A] flex-shrink-0" />,
                  label: 'Location',
                  value: 'Lillington Gardens Community Hall, Vauxhall Bridge Road, London, SW1V 2LF',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <p className="font-sans text-[#1C3A2A]/60 text-xs uppercase tracking-widest font-semibold">
                      {item.label}
                    </p>
                    <p className="font-sans text-[#1C3A2A] font-semibold text-sm md:text-base leading-snug mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs text-center mb-3">
              We Teach
            </p>
            <h2
              className="font-display italic text-[#C9A84C] text-4xl md:text-5xl text-center mb-16"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Curriculum
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen size={26} className="text-[#C9A84C]" />,
                title: "Qaa'idah, Qur'an & Du'aas",
                desc: "From foundational letter recognition in Qaa'idah through to fluent Qur'anic recitation, combined with essential supplications for daily life.",
              },
              {
                icon: <Heart size={26} className="text-[#C9A84C]" />,
                title: 'Islamic Studies',
                desc: 'Core principles of faith, worship, character and conduct — taught in a way that is relevant, accessible and inspiring for young learners.',
              },
              {
                icon: <ScrollText size={26} className="text-[#C9A84C]" />,
                title: "Seerah & Ahadeeth",
                desc: "The life of the Prophet Muhammad ﷺ and key Prophetic narrations — building love, understanding and a living connection to Islamic tradition.",
              },
            ].map((subject, i) => (
              <ScrollReveal key={subject.title} delay={i * 100}>
                <div className="bg-[#254D38] rounded-2xl p-8 h-full border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                    {subject.icon}
                  </div>
                  <h3
                    className="font-display italic text-[#C9A84C] text-xl mb-4"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {subject.title}
                  </h3>
                  <p className="font-sans text-[#F5F0E8]/70 text-sm leading-relaxed">
                    {subject.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Provide ── */}
      <section className="py-24 px-4 bg-[#111f17]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs text-center mb-3">
              We Provide
            </p>
            <h2
              className="font-display italic text-[#C9A84C] text-4xl md:text-5xl text-center mb-16"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Offer
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Qualified Teachers',
              'Interactive and Engaging Lessons',
              'Extracurricular Activities',
              'Trips and Special Events',
              'Opportunities to Mentor',
            ].map((item, i) => (
              <ScrollReveal key={item} delay={(i % 2) * 100}>
                <div className="flex items-center gap-4 bg-[#254D38] rounded-xl p-5 border border-[#C9A84C]/10">
                  <CheckCircle2 size={20} className="text-[#C9A84C] flex-shrink-0" />
                  <span className="font-sans text-[#F5F0E8] font-medium text-sm">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Poster ── */}
      <section className="py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-4">
              Information Poster
            </p>
            <h2
              className="font-display italic text-[#C9A84C] text-3xl md:text-4xl mb-10"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Spread the Word
            </h2>
            <div
              className="rounded-2xl overflow-hidden border border-[#C9A84C]/20"
              style={{ boxShadow: '0 0 40px rgba(201,168,76,0.3), 0 0 80px rgba(201,168,76,0.1)' }}
            >
              <img
                src="/images/poster.jpeg"
                alt="Olive Education Madrasah information poster"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-[#F5F0E8]/60 font-sans text-sm">
              <Download size={16} className="text-[#C9A84C]" />
              <span>Download or share our information poster</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Registration CTA ── */}
      <section className="py-24 px-4 bg-[#254D38]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-4">
              Enrol Today
            </p>
            <h2
              className="font-display italic text-[#C9A84C] text-4xl md:text-5xl mb-5"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Ready to Enrol?
            </h2>
            <p className="font-sans text-[#F5F0E8]/75 mb-10 leading-relaxed">
              Contact us to register your child or find out more information. We welcome children of all levels and backgrounds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold rounded-full hover:bg-[#E8C96A] transition-colors text-sm"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+447723383465"
                className="flex items-center gap-2 px-8 py-3.5 border border-[#C9A84C]/60 text-[#C9A84C] font-sans font-semibold rounded-full hover:border-[#C9A84C] transition-colors text-sm"
              >
                <Phone size={16} />
                +44 7723 383 465
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
