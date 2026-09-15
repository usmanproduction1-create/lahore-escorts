import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Sparkles, User } from 'lucide-react';
import { BookingFormState, ServiceAreaName } from '../types';
import { MODELS_DATA } from '../data/models';
import { SERVICES_DATA } from '../data/services';

interface ContactSectionProps {
  initialModel?: string;
  initialArea?: ServiceAreaName | 'All Areas';
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialModel = '',
  initialArea = 'All Areas',
  initialService = 'Fashion Modeling',
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService,
    preferredArea: initialArea,
    preferredModel: initialModel,
    eventDate: '',
    durationHours: '4 Hours (Half Day)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync props when they change
  React.useEffect(() => {
    if (initialModel) setFormData((prev) => ({ ...prev, preferredModel: initialModel }));
  }, [initialModel]);

  React.useEffect(() => {
    if (initialArea) setFormData((prev) => ({ ...prev, preferredArea: initialArea }));
  }, [initialArea]);

  React.useEffect(() => {
    if (initialService) setFormData((prev) => ({ ...prev, serviceType: initialService }));
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleForwardToWhatsApp = () => {
    const text = encodeURIComponent(
      `*Lahore Night Girls - New Booking Inquiry*\n\n` +
      `*Client:* ${formData.fullName || 'Prospective Client'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Service:* ${formData.serviceType}\n` +
      `*Area:* ${formData.preferredArea}\n` +
      `*Preferred Model:* ${formData.preferredModel || 'Any Available'}\n` +
      `*Date:* ${formData.eventDate || 'Flexible'}\n` +
      `*Duration:* ${formData.durationHours}\n` +
      `*Notes:* ${formData.message || 'Please contact me with rates and schedule.'}`
    );
    window.open(`https://wa.me/923256556505?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-neutral-900/60 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Header as requested */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Agency Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase mb-3">
            Lahore Night Girls
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-editorial italic max-w-xl mx-auto mb-8">
            Premium Adult Fashion &amp; Modeling Services in Lahore
          </p>

          {/* Prominent Direct Contact Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-neutral-950/90 border border-purple-900/50 shadow-2xl">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Phone / WhatsApp:
                </div>
                <a
                  href="tel:03256556505"
                  className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  0325-6556505
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Email:
                </div>
                <a
                  href="mailto:usmanproduction1@gmail.com"
                  className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                >
                  usmanproduction1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Three Direct Contact Buttons as requested */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            {/* WhatsApp button */}
            <a
              href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-emerald-950 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900 hover:border-emerald-400 transition-all shadow-lg shadow-emerald-950/40"
              id="contact-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
              <span>WhatsApp Button</span>
            </a>

            {/* Call button */}
            <a
              href="tel:03256556505"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-blue-950 border border-blue-500/50 text-blue-300 hover:bg-blue-900 hover:border-blue-400 transition-all shadow-lg shadow-blue-950/40"
              id="contact-call-btn"
            >
              <Phone className="w-4 h-4" />
              <span>Call Button</span>
            </a>

            {/* Email button */}
            <a
              href="mailto:usmanproduction1@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-purple-950 border border-purple-500/50 text-purple-300 hover:bg-purple-900 hover:border-purple-400 transition-all shadow-lg shadow-purple-950/40"
              id="contact-email-btn"
            >
              <Mail className="w-4 h-4" />
              <span>Email Button</span>
            </a>
          </div>
        </div>

        {/* Contact Form & Information Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Booking Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-neutral-950/90 border border-purple-900/40 shadow-xl">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Booking Information
              </h3>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Agency Response Time</div>
                    <p className="text-neutral-400 mt-0.5">Average reply within 15–30 minutes during active hours (10:00 AM – 2:00 AM PKT).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Age &amp; Identity Policy</div>
                    <p className="text-neutral-400 mt-0.5">Strictly adults aged 18+ only. All engagements require lawful commercial contracts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Coverage Sectors</div>
                    <p className="text-neutral-400 mt-0.5">Gulberg, Johar Town, Bahria Town, and Iqbal Town in Lahore.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 to-neutral-950 border border-emerald-700/40 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                <MessageCircle className="w-4 h-4" />
                <span>Fastest Booking: WhatsApp</span>
              </div>
              <p className="text-xs text-neutral-300 mb-4 font-light leading-relaxed">
                For urgent shoot schedules or same-day event requirements in Lahore, WhatsApp us directly at <span className="text-white font-semibold">0325-6556505</span>.
              </p>
              <button
                onClick={handleForwardToWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
                id="fast-whatsapp-btn"
              >
                <span>Chat Instantly on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-purple-900/50 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Schedule a Booking / Inquire
              </h3>
              <p className="text-xs text-neutral-400 mb-6 font-light">
                Fill out the form below and our agency coordinator will promptly review availability.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/50 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-display font-bold text-white mb-1">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs text-neutral-300 mb-5 leading-relaxed font-light">
                    Thank you, <strong className="text-white">{formData.fullName || 'Client'}</strong>. Our booking manager will review your request for {formData.serviceType} in {formData.preferredArea} and reach out to {formData.phone || 'your contact'}.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleForwardToWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs font-semibold bg-emerald-900 border border-emerald-500 text-emerald-200 hover:bg-emerald-800"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send this to WhatsApp now
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-neutral-800 text-neutral-300 hover:text-white"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="agency-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Usman Tariq / Studio Brand"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-full-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0325-6556505 or international"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-email"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Service Area in Lahore *
                      </label>
                      <select
                        value={formData.preferredArea}
                        onChange={(e) => setFormData({ ...formData, preferredArea: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-area-select"
                      >
                        <option value="All Areas">All Areas / Flexible</option>
                        <option value="Gulberg">Gulberg, Lahore</option>
                        <option value="Johar Town">Johar Town, Lahore</option>
                        <option value="Bahria Town">Bahria Town, Lahore</option>
                        <option value="Iqbal Town">Iqbal Town, Lahore</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-service-select"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Preferred Model (Optional)
                      </label>
                      <select
                        value={formData.preferredModel}
                        onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-model-select"
                      >
                        <option value="">No preference / Agency Recommend</option>
                        {MODELS_DATA.map((m) => (
                          <option key={m.id} value={m.name}>
                            {m.name} ({m.category})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Event / Shoot Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-event-date"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Expected Duration
                      </label>
                      <select
                        value={formData.durationHours}
                        onChange={(e) => setFormData({ ...formData, durationHours: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="form-duration"
                      >
                        <option value="2-3 Hours">2-3 Hours (Short Shoot)</option>
                        <option value="4 Hours (Half Day)">4 Hours (Half Day)</option>
                        <option value="8 Hours (Full Day)">8 Hours (Full Day)</option>
                        <option value="Multiple Days">Multiple Days / Campaign</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Project Details &amp; Venue Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your wardrobe requirements, photography concept, venue in Gulberg/Johar Town/Bahria Town/Iqbal Town, or custom notes..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      id="form-message"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-purple-900/40 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                      id="submit-contact-btn"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-purple-200" />
                          <span>Submit Booking Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
