import { useState } from 'react';
import {
  budgetOptions,
  contactDetails,
  sectionMeta,
  serviceGroups,
} from '../data/siteData';
import { HtmlSnippet } from './HtmlSnippet';

const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwAzl-IfC-7mivESYm-71vfRLzmUkD7_LxfA7pqFskej9po432H7O8m7F2Ky7oKuvOxXA/exec';
const RECEIVER_EMAIL = 'inquiry.codesentrix@gmail.com';

const initialState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.phone || !form.service || !form.message) {
      window.alert('Please fill in all required fields (marked with *)');
      return;
    }

    const mailWindow = window.open('', '_blank');

    const payload = {
      ...form,
      receiverEmail: RECEIVER_EMAIL,
      submittedAt: new Date().toISOString(),
      source: 'codesentrix-website',
    };

    try {
      setSubmitting(true);
      setError('');

      const response = await fetch(APP_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      let result = {};

      try {
        result = JSON.parse(raw);
      } catch {
        result = { success: response.ok };
      }

      if (!result.success) {
        throw new Error(result.message || 'Form submission failed');
      }

      setSubmitted(true);
      setForm(initialState);

      const subject = encodeURIComponent(
        `[CodeSentrix Inquiry] ${form.service} — ${form.fullName}`
      );

      const body = encodeURIComponent(
        `Name: ${form.fullName}
Email: ${form.email}
Mobile: ${form.phone}
Company: ${form.company || 'N/A'}
Service: ${form.service}
Budget: ${form.budget || 'Not specified'}

Project Details:
${form.message}`
      );

      const mailtoLink = `mailto:${RECEIVER_EMAIL}?subject=${subject}&body=${body}`;

      if (mailWindow) {
        mailWindow.location.href = mailtoLink;
        mailWindow.focus();
      } else {
        window.location.href = mailtoLink;
      }
    } catch (err) {
      if (mailWindow && !mailWindow.closed) {
        mailWindow.close();
      }
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info fade-up">
            <div className="section-label">{sectionMeta.contact.label}</div>
            <h3>{sectionMeta.contact.title}</h3>
            <p>{sectionMeta.contact.description}</p>

            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.label}>
                <div className="cd-icon">{detail.icon}</div>
                <div>
                  <span className="cd-label">{detail.label}</span>
                  <HtmlSnippet html={detail.valueHtml} className="cd-val" as="span" />
                </div>
              </div>
            ))}
          </div>

          <div className="form-card fade-up">
            {!submitted ? (
              <div id="inquiry-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Rahul Sharma"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company Ltd."
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="rahul@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group form-full">
                    <label>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">— Select a service —</option>
                      {serviceGroups.map((group) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="form-group form-full">
                    <label>Project Budget (Optional)</label>
                    <select name="budget" value={form.budget} onChange={handleChange}>
                      {budgetOptions.map((option, index) => (
                        <option key={option} value={index === 0 ? '' : option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group form-full">
                    <label>Tell Us About Your Project *</label>
                    <textarea
                      name="message"
                      placeholder="Describe what you need — website URL, project scope, specific concerns, timeline, etc."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {error ? (
                  <p style={{ color: '#ff8f8f', marginTop: '12px', marginBottom: '8px' }}>
                    {error}
                  </p>
                ) : null}

                <button
                  type="button"
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={submitting}
                  style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                >
                  {submitting ? 'Submitting...' : "Send Inquiry → We'll Reply in 24h"}
                </button>
              </div>
            ) : (
              <div className="form-success visible" id="form-success">
                <div style={{ fontSize: '3rem', marginBottom: '14px' }}>✅</div>
                <strong
                  style={{
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                  }}
                >
                  Inquiry Submitted Successfully!
                </strong>
                <p style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '0.9rem' }}>
                  Your inquiry has been saved. We will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}