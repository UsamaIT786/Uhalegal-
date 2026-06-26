import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [visaType, setVisaType] = useState('work');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const visaOptions = [
    { value: 'work', label: 'Skilled Worker & Corporate Visas' },
    { value: 'spouse', label: 'Spouse / Unmarried Partner Visas' },
    { value: 'ilr', label: 'Indefinite Leave to Remain (ILR)' },
    { value: 'citizenship', label: 'British Citizenship' },
    { value: 'sponsor', label: 'Sponsor Licence Application' },
    { value: 'other', label: 'Other Immigration Matters' },
  ];

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError('');

    // Simple robust client-side validation
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter your telephone number.');
      return;
    }
    if (!message.trim()) {
      setError('Please include a brief message about your inquiry.');
      return;
    }

    // Success response simulation
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gold p-8 md:p-12 text-center rounded-none shadow-md flex flex-col justify-center items-center h-full min-h-[400px]">
        <div className="h-16 w-16 bg-gold text-navy rounded-none flex items-center justify-center font-sans font-bold text-2xl mb-6">
          ✓
        </div>
        <h3 className="font-serif text-3xl font-semibold text-navy mb-4">
          Submission Successful
        </h3>
        <p className="font-sans text-base text-gray-600 leading-relaxed max-w-sm mb-6">
          Thank you. We'll be in touch shortly.
        </p>
        <button
          onClick={() => {
            setName('');
            setEmail('');
            setPhone('');
            setVisaType('work');
            setMessage('');
            setSubmitted(false);
          }}
          className="px-6 py-2 border border-navy text-navy font-sans text-xs font-semibold uppercase tracking-wider rounded-none hover:bg-navy hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-none shadow-md">
      <h3 className="font-serif text-3xl font-semibold text-navy mb-2">
        Request a Consultation
      </h3>
      <p className="font-sans text-sm text-gray-500 mb-6">
        Submit your details below and a specialist immigration advisor will contact you within 24 business hours.
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-sans text-sm rounded-none">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block font-sans text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-navy focus:border-gold outline-none rounded-none px-4 py-3 w-full font-sans text-sm bg-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-sans text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-navy focus:border-gold outline-none rounded-none px-4 py-3 w-full font-sans text-sm bg-white"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-sans text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+44 7911 123456"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-navy focus:border-gold outline-none rounded-none px-4 py-3 w-full font-sans text-sm bg-white"
          />
        </div>

        {/* Visa Type Select */}
        <div>
          <label className="block font-sans text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Visa / Case Category *
          </label>
          <select
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="border border-navy focus:border-gold outline-none rounded-none px-4 py-3 w-full font-sans text-sm bg-white"
          >
            {visaOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block font-sans text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Brief Case Description *
          </label>
          <textarea
            rows={4}
            placeholder="Please share details about your current visa status, timeline, and goals..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-navy focus:border-gold outline-none rounded-none px-4 py-3 w-full font-sans text-sm bg-white"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gold text-navy font-sans text-xs font-bold uppercase tracking-widest rounded-none border border-gold hover:bg-gold-light hover:border-gold-light transition-all duration-200 cursor-pointer shadow-md text-center"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
}
