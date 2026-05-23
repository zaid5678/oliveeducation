import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function AboutUs() {
  useEffect(() => {
    document.title = 'About Us — Olive Education'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Learn about Olive Education — a community-led Islamic educational organisation based in London, dedicated to nurturing the next generation.')
  }, [])

  return (
    <div className="bg-[#1C3A2A]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="geo-texture pt-32 pb-20 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="label mb-7 flex items-center">
            <span className="section-mark" />
            Our Story
          </p>
          <h1
            className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mb-8"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            About Olive Education
          </h1>
          <p className="font-sans text-[#F5F0E8]/65 text-lg max-w-xl leading-relaxed">
            Rooted in faith. Driven by community. Dedicated to every child's potential.
          </p>
        </div>
        <div className="rule mt-20" />
      </section>

      {/* ── Mission ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#111f17]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-16 items-start">

            <ScrollReveal className="lg:col-span-5">
              <p className="label mb-5 flex items-center">
                <span className="section-mark" />
                Our Mission
              </p>
              <h2
                className="display text-3xl sm:text-4xl md:text-5xl mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                A space where every child thrives
              </h2>
              <Link
                to="/madrasah"
                className="font-sans text-[#C9A84C] text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200 mt-8"
              >
                Explore our Madrasah <ArrowRight size={14} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:col-span-7">
              <div className="space-y-5 lg:pt-20">
                <p className="font-sans text-[#F5F0E8]/75 leading-relaxed">
                  Our school provides a safe and fun learning space where every child is supported to thrive and fulfil their potential. We provide a curriculum that caters to students of all levels and encourage a sense of community where students can practise together, share experiences, and learn from one another.
                </p>
                <p className="font-sans text-[#F5F0E8]/75 leading-relaxed">
                  We believe that Islamic education is most powerful when it is joyful, engaging, and embedded in a strong sense of belonging. That is why everything we do is shaped by the needs of our students and the families we serve.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <ScrollReveal>
            <p className="label mb-5 flex items-center">
              <span className="section-mark" />
              What We Stand For
            </p>
            <h2
              className="display text-3xl sm:text-4xl mb-16"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Core Values
            </h2>
          </ScrollReveal>

          {/* Horizontal rule list — editorial, not icon cards */}
          <div className="space-y-0">
            {[
              {
                n: '01',
                title: 'Community First',
                body: 'Run by the community for the community, we work closely with families to ensure a greater love for learning and a strong sense of shared purpose.',
              },
              {
                n: '02',
                title: 'Inclusive Learning',
                body: 'Our curriculum caters to all levels, fostering growth in every child at their own pace — from complete beginners to those building on existing knowledge.',
              },
              {
                n: '03',
                title: 'Inspiring Futures',
                body: 'We believe every child has unlimited potential. Our role is to nurture and guide that spark — helping them grow in faith, knowledge and confidence.',
              },
            ].map((val, i) => (
              <ScrollReveal key={val.n} delay={i * 80}>
                <div className="rule" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
                  <div className="md:col-span-1">
                    <span className="font-sans text-[#C9A84C]/40 text-xs font-medium">{val.n}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className="display text-2xl md:text-3xl"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      {val.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-sans text-[#F5F0E8]/65 leading-relaxed text-sm md:text-base">
                      {val.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="rule" />
          </div>

        </div>
      </section>

      {/* ── Story / Editorial ─────────────────────────────────────── */}
      <section className="py-24 bg-[#111f17]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10">

            <ScrollReveal className="lg:col-span-4 lg:col-start-2">
              <p className="label mb-5 flex items-center">
                <span className="section-mark" />
                Our Story
              </p>
              <p
                className="display text-2xl sm:text-3xl leading-snug"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                "We started Olive Education because we wanted something better for our children."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:col-span-5 lg:col-start-7">
              <div className="space-y-5 lg:pt-16">
                <p className="font-sans text-[#F5F0E8]/70 leading-relaxed text-sm">
                  Founded by families in the local community, Olive Education grew from a simple desire: to create an Islamic learning environment that children actually look forward to attending. Too often, madrasah is seen as a chore — we set out to change that.
                </p>
                <p className="font-sans text-[#F5F0E8]/70 leading-relaxed text-sm">
                  Our teachers bring warmth, qualification, and genuine care to every session. Lessons are interactive and engaging, drawing on classical Islamic scholarship while remaining relevant to children growing up in London today.
                </p>
                <p className="font-sans text-[#F5F0E8]/70 leading-relaxed text-sm">
                  We are a grassroots organisation — funded by and accountable to the community we serve. Every decision we make is guided by one question: what is best for our children?
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="geo-texture py-20 bg-[#1C3A2A]">
        <div className="rule" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
              <div>
                <h2
                  className="display text-4xl sm:text-5xl mb-4"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Come and meet us
                </h2>
                <p className="font-sans text-[#F5F0E8]/60 text-sm max-w-md leading-relaxed">
                  We'd love to welcome your family into the Olive Education community. Get in touch to learn more or arrange a visit.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-sm rounded hover:bg-[#E8C96A] transition-colors duration-200"
              >
                Get In Touch
                <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="rule" />
      </section>

    </div>
  )
}
