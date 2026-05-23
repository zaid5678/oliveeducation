import { useEffect } from 'react'
import { BookHeart, Users, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function AboutUs() {
  useEffect(() => {
    document.title = 'About Us — Olive Education'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Learn about Olive Education — a community-led Islamic educational organisation based in London, dedicated to nurturing the next generation.')
  }, [])

  return (
    <div className="bg-[#1C3A2A]">
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, #254D38 0%, #1C3A2A 60%, #111f17 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C]/70 text-xs mb-5">
            Our Story
          </p>
          <h1
            className="font-display italic text-[#C9A84C] text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            About Olive Education
          </h1>
          <p className="font-sans text-[#F5F0E8]/75 text-lg md:text-xl max-w-2xl leading-relaxed">
            Rooted in faith. Driven by community. Dedicated to every child's potential.
          </p>
        </div>
        <div className="gold-divider mt-16" />
      </section>

      {/* ── Mission ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-4">
                  Our Mission
                </p>
                <h2
                  className="font-display italic text-[#C9A84C] text-4xl md:text-5xl mb-8"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  A Space Where Every Child Thrives
                </h2>
                <div className="space-y-5">
                  <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                    Our school provides a safe and fun learning space where every child is supported to thrive and fulfil their potential. We provide a curriculum that caters to students of all levels and encourage a sense of community where students can practise together, share experiences, and learn from one another.
                  </p>
                  <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                    We believe that Islamic education is most powerful when it is joyful, engaging, and embedded in a strong sense of belonging. That is why everything we do is shaped by the needs of our students and the families we serve.
                  </p>
                </div>
                <Link
                  to="/madrasah"
                  className="inline-flex items-center gap-2 mt-8 font-sans text-[#C9A84C] text-sm font-medium hover:gap-3 transition-all"
                >
                  Explore Our Madrasah <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#C9A84C]/20">
                  <img
                    src="/images/logo.jpg"
                    alt="Olive Education Logo"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2A]/80 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#254D38] rounded-2xl p-6 border border-[#C9A84C]/20 max-w-xs">
                  <p
                    className="font-display italic text-[#C9A84C] text-xl leading-snug"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    "Run by the community, for the community."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-4 bg-[#111f17]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs text-center mb-3">
              What We Stand For
            </p>
            <h2
              className="font-display italic text-[#C9A84C] text-4xl md:text-5xl text-center mb-16"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Core Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <BookHeart size={28} className="text-[#C9A84C]" />,
                title: 'Community First',
                desc: 'Run by the community for the community, we work closely with families to ensure a greater love for learning and a strong sense of shared purpose.',
              },
              {
                icon: <Users size={28} className="text-[#C9A84C]" />,
                title: 'Inclusive Learning',
                desc: 'Our curriculum caters to all levels, fostering growth in every child at their own pace — from complete beginners to those building on existing knowledge.',
              },
              {
                icon: <Star size={28} className="text-[#C9A84C]" />,
                title: 'Inspiring Futures',
                desc: 'We believe every child has unlimited potential. Our role is to nurture and guide that spark — helping them grow in faith, knowledge and confidence.',
              },
            ].map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 100}>
                <div className="bg-[#254D38] rounded-2xl p-8 h-full border border-[#C9A84C]/10 hover:border-[#C9A84C]/25 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3
                    className="font-display italic text-[#C9A84C] text-xl mb-4"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {val.title}
                  </h3>
                  <p className="font-sans text-[#F5F0E8]/70 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story / Editorial ── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="relative pl-8 border-l-2 border-[#C9A84C]/30">
              <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-6">
                Our Story
              </p>
              <p
                className="font-display italic text-[#E8C96A] text-2xl md:text-3xl leading-snug mb-8"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                "We started Olive Education because we wanted something better for our children — a place that didn't just teach, but truly inspired."
              </p>
              <div className="space-y-5">
                <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                  Founded by families in the local community, Olive Education grew from a simple desire: to create an Islamic learning environment that children look forward to attending. Too often, madrasah is seen as a chore — we set out to change that.
                </p>
                <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                  Our teachers bring warmth, qualification, and genuine care to every session. Our lessons are interactive and engaging, drawing on classical Islamic scholarship while remaining relevant and accessible to children growing up in modern Britain.
                </p>
                <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                  We are proud to be a grassroots organisation — funded by and accountable to the community we serve. Every decision we make is guided by one question: what is best for our children?
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-[#254D38]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="font-display italic text-[#C9A84C] text-4xl md:text-5xl mb-5"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Come and Meet Us
            </h2>
            <p className="font-sans text-[#F5F0E8]/75 mb-8 leading-relaxed">
              We'd love to welcome your family into the Olive Education community. Get in touch to learn more or arrange a visit.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold rounded-full hover:bg-[#E8C96A] transition-colors text-sm"
            >
              Get In Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
