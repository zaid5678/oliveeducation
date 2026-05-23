import { useState, useEffect } from 'react'
import { Phone, Mail, Instagram, MapPin, CheckCircle2, ChevronDown } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Contact — Olive Education'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Get in touch with Olive Education — register your child for our Madrasah, ask about STEAM, or enquire about volunteering.')
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.subject) errs.subject = 'Please select a subject.'
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full px-5 py-3.5 bg-[#254D38] border rounded-xl text-[#F5F0E8] placeholder-[#F5F0E8]/40 font-sans text-sm focus:outline-none transition-colors ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-400'
        : 'border-[#C9A84C]/20 focus:border-[#C9A84C]'
    }`

  return (
    <div className="bg-[#1C3A2A]">
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, #254D38 0%, #1C3A2A 55%, #111f17 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C]/70 text-xs mb-5">
            Reach Out
          </p>
          <h1
            className="font-display italic text-[#C9A84C] text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Get In Touch
          </h1>
          <p className="font-sans text-[#F5F0E8]/75 text-lg md:text-xl max-w-xl leading-relaxed">
            We'd love to hear from you — whether you're registering a child, enquiring about volunteering, or just saying hello.
          </p>
        </div>
        <div className="gold-divider mt-16" />
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

            {/* Left: Contact Details */}
            <div className="space-y-6">
              <div>
                <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-6">
                  Contact Details
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+447723383465"
                  className="flex items-center gap-5 bg-[#254D38] rounded-2xl p-5 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Phone size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <p className="font-sans text-[#F5F0E8] font-medium">+44 7723 383 465</p>
                  </div>
                </a>

                <a
                  href="mailto:oliveeducation@mail.com"
                  className="flex items-center gap-5 bg-[#254D38] rounded-2xl p-5 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Mail size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-1">Email</p>
                    <p className="font-sans text-[#F5F0E8] font-medium">oliveeducation@mail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/olive.education_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-[#254D38] rounded-2xl p-5 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Instagram size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-1">Instagram</p>
                    <p className="font-sans text-[#F5F0E8] font-medium">@olive.education_</p>
                  </div>
                </a>

                {/* Location */}
                <div className="bg-[#254D38] rounded-2xl p-5 border border-[#C9A84C]/10">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={20} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="font-sans text-[#F5F0E8]/50 text-xs uppercase tracking-widest mb-1">Location</p>
                      <p className="font-sans text-[#F5F0E8] font-medium leading-relaxed">
                        Lillington Gardens Community Hall,<br />
                        Vauxhall Bridge Road,<br />
                        London, SW1V 2LF
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden h-48 border border-[#C9A84C]/15">
                    <iframe
                      title="Lillington Gardens Community Hall"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2098843395373!2d-0.13820812346005455!3d51.49190141016655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604dc90a80e4f%3A0xf4d3a8c4d6c8d4a2!2sLillington%20Gardens%2C%20Vauxhall%20Bridge%20Rd%2C%20London%20SW1V%202LF!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Session reminder */}
                <div className="bg-[#D4E84A]/10 border border-[#D4E84A]/30 rounded-2xl p-5">
                  <p className="font-sans text-[#D4E84A] font-semibold text-sm">
                    Madrasah runs every Thursday 5–7pm during term time.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-6">
                Send a Message
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 gap-5 bg-[#254D38] rounded-2xl border border-[#C9A84C]/20">
                  <CheckCircle2 size={56} className="text-[#D4E84A]" />
                  <h2
                    className="font-display italic text-[#C9A84C] text-3xl"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    Message Received!
                  </h2>
                  <p className="font-sans text-[#F5F0E8]/70 text-sm text-center max-w-xs">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label className="block font-sans text-[#F5F0E8]/70 text-xs uppercase tracking-widest mb-2">
                      Full Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1.5 text-red-400 font-sans text-xs">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/70 text-xs uppercase tracking-widest mb-2">
                      Email Address <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1.5 text-red-400 font-sans text-xs">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/70 text-xs uppercase tracking-widest mb-2">
                      Phone Number <span className="text-[#F5F0E8]/30">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 ..."
                      className={inputClass('phone')}
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/70 text-xs uppercase tracking-widest mb-2">
                      Subject <span className="text-[#C9A84C]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`${inputClass('subject')} appearance-none pr-10 cursor-pointer`}
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="register">Register a Child</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="steam">STEAM Updates</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C] pointer-events-none"
                      />
                    </div>
                    {errors.subject && <p className="mt-1.5 text-red-400 font-sans text-xs">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[#F5F0E8]/70 text-xs uppercase tracking-widest mb-2">
                      Message <span className="text-[#C9A84C]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1.5 text-red-400 font-sans text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold rounded-xl hover:bg-[#E8C96A] transition-colors text-sm tracking-wide"
                  >
                    Send Message
                  </button>

                  <p className="text-center font-sans text-[#F5F0E8]/35 text-xs">
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
