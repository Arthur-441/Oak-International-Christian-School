import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { EnquiryForm } from '../components/EnquiryForm';
import { SchoolCrest } from '../components/SchoolCrest';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Compass,
  CheckCircle,
  ExternalLink,
  FileText,
  Instagram,
  Facebook,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white py-16 lg:py-20 border-b border-[#0A333A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8] block mb-2">
              Get In Touch With Admissions
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              We'd Love to Hear From You.
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Have questions regarding admissions, our diagnostic test, or switching curricula? Reach out to our dedicated team in Buwate, Kira.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-[#F2F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00868F] block mb-2">
                  Official Contact Details
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#09262C] leading-tight">
                  Reach Our Administrative Office
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  We welcome prospective parents for campus tours, curriculum consultations, and student diagnostic assessments.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="bg-white p-6 rounded-2xl border border-[#00868F]/20 shadow-2xs hover:border-[#00868F] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F2F8F8] text-[#00868F] flex items-center justify-center shrink-0 border border-[#00868F]/20">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                        Phone Call Enquiries
                      </div>
                      <a
                        href={SCHOOL_INFO.phoneTel}
                        className="font-serif text-xl font-bold text-[#09262C] hover:text-[#00868F] transition-colors block"
                      >
                        {SCHOOL_INFO.phone}
                      </a>
                      <p className="text-xs text-slate-500">
                        International: {SCHOOL_INFO.phoneFormatted}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card with Official WhatsApp Button */}
                <div className="bg-white p-6 rounded-2xl border border-emerald-300 shadow-2xs hover:border-emerald-500 transition-colors space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                        Instant Admissions Line
                      </div>
                      <div className="font-serif text-lg font-bold text-[#09262C]">
                        Direct WhatsApp Chat
                      </div>
                      <p className="text-xs text-slate-500">
                        Quick response for fee structures, diagnostic test appointments & curriculum inquiries
                      </p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <WhatsAppButton size="md" className="w-full justify-center" />
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-6 rounded-2xl border border-[#00868F]/20 shadow-2xs hover:border-[#00868F] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F2F8F8] text-[#00868F] flex items-center justify-center shrink-0 border border-[#00868F]/20">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                        Official Admissions Email
                      </div>
                      <a
                        href={SCHOOL_INFO.emailMailto}
                        className="text-sm font-semibold text-[#09262C] hover:text-[#00868F] transition-colors block break-all"
                      >
                        {SCHOOL_INFO.email}
                      </a>
                      <p className="text-xs text-slate-500">
                        Submit formal applications & document verification
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address & Hours Card */}
                <div className="bg-white p-6 rounded-2xl border border-[#00868F]/20 shadow-2xs hover:border-[#00868F] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                        Campus Location & Hours
                      </div>
                      <p className="text-sm font-semibold text-[#09262C]">
                        {SCHOOL_INFO.address}
                      </p>
                      <p className="text-xs text-slate-500">
                        Conveniently accessible along Kira-Kasangati Road (Kira, Namugongo, Gayaza)
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-[#00868F]" />
                        <span><strong>Campus Hours:</strong> {SCHOOL_INFO.campusHours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Channels Card */}
                <div className="bg-white p-6 rounded-2xl border-2 border-[#00868F]/20 shadow-2xs hover:border-[#00868F] transition-colors space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-wider font-bold text-[#00868F]">
                      Connect On Social Media
                    </div>
                    <span className="text-[11px] text-slate-400 font-serif italic">
                      Official Accounts
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {/* Instagram */}
                    <a
                      href={SCHOOL_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-rose-100 bg-rose-50/40 hover:bg-rose-50 hover:border-rose-300 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Instagram className="w-5 h-5" />
                        </div>
                        <div>
                          <strong className="block text-xs font-bold text-slate-800">
                            Instagram
                          </strong>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {SCHOOL_INFO.instagramHandle}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-colors" />
                    </a>

                    {/* Facebook */}
                    <a
                      href={SCHOOL_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-blue-100 bg-blue-50/40 hover:bg-blue-50 hover:border-blue-300 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Facebook className="w-5 h-5" />
                        </div>
                        <div>
                          <strong className="block text-xs font-bold text-slate-800">
                            Facebook
                          </strong>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {SCHOOL_INFO.facebookHandle}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1877F2] transition-colors" />
                    </a>
                  </div>
                </div>

                {/* PDF Prospectus Guide Download Card */}
                <div className="bg-white p-5 rounded-2xl border border-[#00868F]/30 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-[#00868F] uppercase tracking-wide">
                      Official Information Pack
                    </div>
                    <div className="text-xs text-slate-600">
                      Download our official school prospectus and ACE curriculum breakdown.
                    </div>
                  </div>
                  <a
                    href={SCHOOL_INFO.prospectusPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00868F] hover:bg-[#00747C] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Download PDF</span>
                    <ExternalLink className="w-3 h-3 text-[#6DB33F]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#00868F]/20">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00868F] block mb-2">
                    Send An Enquiry
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#09262C]">
                    Have a Question for Us?
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
                    Ask us about our Diagnostic Test, switching from other curricula, exit routes, grade placement, or any other questions about our school.
                  </p>
                </div>

                {/* Form Component */}
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00868F] block mb-1">
                Directions & Map
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#09262C]">
                Find Us in Buwate, Kira
              </h3>
              <p className="text-slate-600 text-sm">
                {SCHOOL_INFO.address}
              </p>
            </div>

            <a
              href={SCHOOL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#F2F8F8] hover:bg-[#E5F1F2] text-[#09262C] text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 self-start sm:self-center border border-[#00868F]/20"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00868F]" />
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200 h-[380px] bg-slate-100 relative">
            <iframe
              title="Oak International Christian School Location"
              src={SCHOOL_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
