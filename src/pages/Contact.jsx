import { useState, useEffect } from 'react'
import { Phone, Mail, Instagram, MapPin, CheckCircle2, ChevronDown } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Contact — Olive Education'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Get in touch with Olive Education — register your child for our Madrasah, ask about STEAM, or enquire about volunteering.')
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim())   errs.name    = 'Full name is required.'
    if (!form.email.trim())  errs.email   = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.subject)       errs.subject = 'Please select a subject.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const field = (name) =>
    `w-full px-4 py-3.5 bg-[#1C3A2A] border rounded font-sans text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none transition-colors duration-200 ${
      errors[name]
        ? 'border-red-500/50 focus:border-red-400'
        : 'border-[#C9A84C]/20 focus:border-[#C9A84C]/50'
    }`

  return (
    <div className="bg-[#1C3A2A]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="geo-texture pt-32 pb-20 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="label mb-7 flex items-center">
            <span className="section-mark" />
            Reach Out
          </p>
          <h1
            className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-2xl mb-8"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Get In Touch
          </h1>
          <p className="font-sans text-[#F5F0E8]/65 text-lg max-w-xl leading-relaxed">
            We'd love to hear from you — whether you're registering a child, enquiring about volunteering, or just saying hello.
          </p>
        </div>
        <div className="rule mt-20" />
      </section>

      {/* ── Content ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#111f17]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-x-16">

            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="label mb-6 flex items-center">
                  <span className="section-mark" />
                  Contact Details
                </p>
              </div>

              {/* Contact rows */}
              <div className="space-y-0">
                {[
                  { icon: <Phone size={16} />, label: 'Phone', value: '+44 7723 383 465', href: 'tel:+447723383465' },
                  { icon: <Mail size={16} />, label: 'Email', value: 'oliveeducation@mail.com', href: 'mailto:oliveeducation@mail.com' },
                  { icon: <Instagram size={16} />, label: 'Instagram', value: '@olive.education_', href: 'https://www.instagram.com/olive.education_/', external: true },
                ].map((item, i, arr) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-5 py-5 group hover:text-[#C9A84C] transition-colors duration-200"
                    >
                      <span className="text-[#C9A84C] flex-shrink-0">{item.icon}</span>
                      <div className="flex-1">
                        <p className="font-sans text-[#F5F0E8]/40 text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className="font-sans text-[#F5F0E8] group-hover:text-[#C9A84C] text-sm font-medium transition-colors duration-200">{item.value}</p>
                      </div>
                    </a>
                    {i < arr.length - 1 && <div className="rule" />}
                  </div>
                ))}
              </div>

              <div className="rule" />

              {/* Address */}
              <div className="flex items-start gap-5">
                <span className="text-[#C9A84C] flex-shrink-0 mt-0.5"><MapPin size={16} /></span>
                <div>
                  <p className="font-sans text-[#F5F0E8]/40 text-xs uppercase tracking-widest mb-1.5">Location</p>
                  <p className="font-sans text-[#F5F0E8]/75 text-sm leading-relaxed">
                    Lillington Gardens Community Hall,<br />
                    Vauxhall Bridge Road,<br />
                    London, SW1V 2LF
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="border border-[#C9A84C]/15 rounded overflow-hidden h-44">
                <iframe
                  title="Lillington Gardens Community Hall"
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
              <div className="border border-[#D4E84A]/30 rounded px-5 py-4">
                <p className="font-sans text-[#D4E84A] text-sm font-medium">
                  Madrasah runs every Thursday 5–7pm during term time.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="label mb-8 flex items-center">
                <span className="section-mark" />
                Send a Message
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 gap-5 border border-[#C9A84C]/15 rounded">
                  <CheckCircle2 size={36} className="text-[#D4E84A]" />
                  <h2
                    className="display text-3xl"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    Message Received
                  </h2>
                  <p className="font-sans text-[#F5F0E8]/60 text-sm text-center max-w-xs">
                    Thank you for reaching out. We'll respond within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-2">
                      Full Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={field('name')} />
                    {errors.name && <p className="mt-1.5 font-sans text-red-400 text-xs">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-2">
                      Email Address <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={field('email')} />
                    {errors.email && <p className="mt-1.5 font-sans text-red-400 text-xs">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-2">
                      Phone Number <span className="text-[#F5F0E8]/25">(optional)</span>
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+44 ..." className={field('phone')} />
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-2">
                      Subject <span className="text-[#C9A84C]">*</span>
                    </label>
                    <div className="relative">
                      <select name="subject" value={form.subject} onChange={handleChange} className={`${field('subject')} appearance-none pr-9 cursor-pointer`}>
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="register">Register a Child</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="steam">STEAM Updates</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C9A84C]/60 pointer-events-none" />
                    </div>
                    {errors.subject && <p className="mt-1.5 font-sans text-red-400 text-xs">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-2">
                      Message <span className="text-[#C9A84C]">*</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us how we can help..." className={`${field('message')} resize-none`} />
                    {errors.message && <p className="mt-1.5 font-sans text-red-400 text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-sm rounded hover:bg-[#E8C96A] transition-colors duration-200 tracking-wide"
                  >
                    Send Message
                  </button>

                  <p className="text-center font-sans text-[#F5F0E8]/25 text-xs">
                    We typically respond within 24–48 hours.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
