import { useEffect } from 'react'
import { Phone, Mail, Instagram, MapPin } from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Olive Education'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Get in touch with Olive Education — register your child for our Madrasah, ask about STEAM, or enquire about volunteering.')
  }, [])

  return (
    <div className="bg-[#1C3A2A]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="geo-texture pt-32 pb-20 bg-[#1C3A2A] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="label mb-7 flex items-center justify-center">
            <span className="section-mark" />
            Reach Out
          </p>
          <h1
            className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Get In Touch
          </h1>
          <p className="font-sans text-[#F5F0E8]/65 text-lg leading-relaxed">
            We'd love to hear from you — whether you're registering a child, enquiring about volunteering, or just saying hello.
          </p>
        </div>
        <div className="rule mt-20" />
      </section>

      {/* ── Contact Details ───────────────────────────────────────── */}
      <section className="py-24 bg-[#111f17]">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">

          <p className="label mb-10 flex items-center justify-center">
            <span className="section-mark" />
            Contact Details
          </p>

          {/* Contact links */}
          <div className="space-y-0 mb-14">
            {[
              { icon: <Phone size={16} />, label: 'Phone', value: '+44 7723 383 465', href: 'tel:+447723383465' },
              { icon: <Mail size={16} />, label: 'Email', value: 'oliveeducation@mail.com', href: 'mailto:oliveeducation@mail.com' },
              { icon: <Instagram size={16} />, label: 'Instagram', value: '@olive.education_', href: 'https://www.instagram.com/olive.education_/', external: true },
            ].map((item, i, arr) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 group hover:text-[#C9A84C] transition-colors duration-200"
                >
                  <span className="text-[#C9A84C]">{item.icon}</span>
                  <div className="text-center sm:text-left">
                    <p className="font-sans text-[#F5F0E8]/40 text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="font-sans text-[#F5F0E8] group-hover:text-[#C9A84C] text-base font-medium transition-colors duration-200">{item.value}</p>
                  </div>
                </a>
                {i < arr.length - 1 && <div className="rule" />}
              </div>
            ))}
          </div>

          <div className="rule mb-14" />

          {/* Address */}
          <div className="flex flex-col items-center gap-3 mb-14">
            <MapPin size={16} className="text-[#C9A84C]" />
            <div className="text-center">
              <p className="font-sans text-[#F5F0E8]/40 text-xs uppercase tracking-widest mb-2">Location</p>
              <p className="font-sans text-[#F5F0E8]/70 text-sm leading-relaxed">
                Lillington Gardens, Community Hall,<br />
                Vauxhall Bridge Road,<br />
                London, SW1V 2LF
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="border border-[#C9A84C]/15 rounded overflow-hidden h-56 mb-8">
            <iframe
              title="Lillington Gardens, Community Hall"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2098843395373!2d-0.13820812346005455!3d51.49190141016655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604dc90a80e4f%3A0xf4d3a8c4d6c8d4a2!2sLillington%20Gardens%2C%20Vauxhall%20Bridge%20Rd%2C%20London%20SW1V%202LF!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.88) hue-rotate(180deg) saturate(0.4) brightness(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Session note */}
          <div className="border border-[#D4E84A]/30 rounded px-6 py-4">
            <p className="font-sans text-[#D4E84A] text-sm font-medium">
              Madrasah runs every Thursday, 5–7pm during term time at Lillington Gardens, Community Hall, Vauxhall.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
