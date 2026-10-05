import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2, MessageSquare, Phone, User, RotateCcw } from 'lucide-react';
import { ReservationData } from '../types/cafe';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '11:30 AM',
    guests: 2,
    seating: 'Garden Patio',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const timeSlots = [
    '08:00 AM', '09:30 AM', '11:00 AM', '12:30 PM', 
    '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM', '07:45 PM'
  ];

  const seatingOptions: ReservationData['seating'][] = [
    'Garden Patio',
    'Indoor Lounge',
    'Barista Bar',
    'Quiet Corner'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }
    const code = 'UB-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: new Date().toISOString().split('T')[0],
      time: '11:30 AM',
      guests: 2,
      seating: 'Garden Patio',
      specialRequests: '',
    });
  };

  return (
    <section id="reservation" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFEA] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight">
            Reserve Your Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#756A63] leading-relaxed">
            Secure your preferred table in our quiet sunlit garden or cozy indoor lounge. Walk-ins are always welcomed, but reservations guarantee your spot.
          </p>
        </div>

        {/* Reservation Card Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#E7DFD5] shadow-xl overflow-hidden">
          
          {submitted ? (
            /* Friendly Demo Confirmation Message */
            <div className="p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C532E] font-semibold">
                  Demo Booking Confirmed
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#1F1712] mt-1">
                  We Look Forward to Welcoming You, {formData.fullName}!
                </h3>
                <p className="text-xs font-mono bg-[#F4EFEA] inline-block px-4 py-2 rounded-xl border border-[#E7DFD5] text-[#8C532E] font-bold mt-4">
                  Reservation Reference: #{confirmationCode}
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7DFD5] text-left space-y-2 text-sm text-[#4A3E37]">
                <div className="flex justify-between py-1 border-b border-[#E7DFD5]/60">
                  <span className="text-[#756A63]">Guest Name</span>
                  <span className="font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7DFD5]/60">
                  <span className="text-[#756A63]">Phone</span>
                  <span className="font-semibold">{formData.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7DFD5]/60">
                  <span className="text-[#756A63]">Date & Time</span>
                  <span className="font-semibold">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7DFD5]/60">
                  <span className="text-[#756A63]">Guests</span>
                  <span className="font-semibold">{formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#756A63]">Preferred Area</span>
                  <span className="font-semibold text-[#8C532E]">{formData.seating}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 max-w-md mx-auto text-xs text-amber-900 text-left">
                <strong>Demo Mode Notice:</strong> This reservation form is interactive for portfolio showcase. In production, this would trigger an instant SMS & WhatsApp notification to the guest and update the host stand tablet.
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1712] hover:bg-[#382B22] text-[#FAF8F5] font-medium text-sm transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-[#C59B63]" />
                  <span>Make Another Reservation</span>
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#594B42] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#756A63] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Shakya"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD5] text-sm text-[#1F1712] focus:outline-hidden focus:ring-2 focus:ring-[#C59B63]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#594B42] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#756A63] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+977 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD5] text-sm text-[#1F1712] focus:outline-hidden focus:ring-2 focus:ring-[#C59B63]"
                    />
                  </div>
                </div>
              </div>

              {/* Date, Time, Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#594B42] mb-2">
                    Reservation Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <CalendarIcon className="w-4 h-4 text-[#756A63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD5] text-sm text-[#1F1712] focus:outline-hidden focus:ring-2 focus:ring-[#C59B63]"
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#594B42] mb-2">
                    Time Slot <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#756A63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD5] text-sm text-[#1F1712] focus:outline-hidden focus:ring-2 focus:ring-[#C59B63] appearance-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#594B42] mb-2">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#756A63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD5] text-sm text-[#1F1712] focus:outline-hidden focus:ring-2 focus:ring-[#C59B63] appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '10+'].map((num) => (
                        <option key={num} value={typeof num === 'number' ? num : 10}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating Preference Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#594B42] mb-2">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {seatingOptions.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setFormData({ ...formData, seating: area })}
                      className={`p-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.seating === area
                          ? 'bg-[#1F1712] text-white border-[#1F1712] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#594B42] border-[#E7DFD5] hover:bg-[#F4EFEA]'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#594B42] mb-2">
                  Special Requests or Dietary Preferences (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#756A63] absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={3}
                    placeholder="e.g. Quiet table for laptop work, celebration cake, or high chair for toddler..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD5] text-sm text-[#1F1712] focus:outline-hidden focus:ring-2 focus:ring-[#C59B63]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-full bg-[#1F1712] hover:bg-[#382B22] text-[#FAF8F5] font-semibold text-base shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2"
                >
                  <CalendarIcon className="w-4 h-4 text-[#C59B63]" />
                  <span>Confirm Table Reservation</span>
                </button>
                <p className="text-[11px] text-center text-[#756A63] mt-3">
                  Instant confirmation • No deposit required • Opening Hours: 7:00 AM – 9:00 PM
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
