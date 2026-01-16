import { useState } from 'react';

export default function ContactForm({
  actionUrl = '/api/contact',
  method = 'POST',
  buttonText = 'Send Message',
  onSuccess,
  onError,
}) {
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    enquiryType: '', 
    message: '' 
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setStatus({ type: 'loading', message: 'Sending...' });
      const res = await fetch(actionUrl, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus({ type: 'success', message: 'Thank you for your enquiry. We will respond shortly.' });
      setForm({ name: '', email: '', enquiryType: '', message: '' });
      onSuccess?.();
    } catch (err) {
      setStatus({ type: 'error', message: 'Unable to send message. Please try again or contact us directly via email.' });
      onError?.(String(err));
    }
  }

  return (
    <>
      <div className="contact_form_wrapper">
        <h3 className="form_title">Send Us a Message</h3>
        
        <form className="contact_form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form_group">
            <label htmlFor="name" className="form_label">Full Name</label>
            <input
              id="name"
              className="form_control"
              type="text"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form_group">
            <label htmlFor="email" className="form_label">Email Address</label>
            <input
              id="email"
              className="form_control"
              type="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Enquiry Type Dropdown */}
          <div className="form_group">
            <label htmlFor="enquiryType" className="form_label">Enquiry Type</label>
            <select
              id="enquiryType"
              className="form_control"
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              required
            >
              <option value="">Select enquiry type</option>
              <option value="employer">Employer / Workforce Solutions</option>
              <option value="partner">Partnership Opportunities</option>
              <option value="candidate">Candidate / Employment Enquiry</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="form_group">
            <label htmlFor="message" className="form_label">Message</label>
            <textarea
              id="message"
              className="form_control form_textarea"
              name="message"
              rows="5"
              placeholder="Please provide details about your enquiry"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`form_status form_status_${status.type}`}>
              {status.type === 'success' && <i className="fas fa-check-circle" aria-hidden="true"></i>}
              {status.type === 'error' && <i className="fas fa-exclamation-circle" aria-hidden="true"></i>}
              <span>{status.message}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="form_button_wrapper">
            <button 
              type="submit" 
              className="form_submit_button" 
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? (
                <>
                  <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>{buttonText}</span>
                  <i className="fas fa-paper-plane" aria-hidden="true"></i>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        /* Form Wrapper */
        .contact_form_wrapper {
          background: #ffffff;
          padding: 2.5rem;
          border: 2px solid #e8eef3;
          border-radius: 12px;
        }

        .form_title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0F2A44;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        /* Form Styles - Clean & Minimal */
        .contact_form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Form Group */
        .form_group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        /* Clear Labels */
        .form_label {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #0F2A44;
          margin-bottom: 0;
        }

        /* Form Controls */
        .form_control {
          width: 100%;
          padding: 0.875rem 1.125rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #0F2A44;
          background-color: #f8f9fa;
          border: 2px solid #e8eef3;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form_control:focus {
          outline: none;
          background-color: #ffffff;
          border-color: #163A5F;
          box-shadow: 0 0 0 3px rgba(22, 58, 95, 0.1);
        }

        .form_control::placeholder {
          color: #8a9aa9;
        }

        /* Select Dropdown */
        .form_control[type="select"],
        select.form_control {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23163A5F' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 12px;
          padding-right: 2.5rem;
          cursor: pointer;
        }

        /* Textarea */
        .form_textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* Status Messages */
        .form_status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: 6px;
          font-size: 0.9375rem;
          font-weight: 500;
        }

        .form_status i {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .form_status_success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .form_status_success i {
          color: #28a745;
        }

        .form_status_error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .form_status_error i {
          color: #dc3545;
        }

        /* Submit Button */
        .form_button_wrapper {
          margin-top: 0.5rem;
        }

        .form_submit_button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.0625rem;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #163A5F 0%, #0F2A44 100%);
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form_submit_button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 42, 68, 0.25);
        }

        .form_submit_button:active:not(:disabled) {
          transform: translateY(0);
        }

        .form_submit_button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form_submit_button i {
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .contact_form_wrapper {
            padding: 2rem;
          }

          .form_title {
            font-size: 1.5rem;
            margin-bottom: 1.75rem;
          }
        }

        @media (max-width: 767px) {
          .contact_form_wrapper {
            padding: 1.75rem 1.5rem;
            border-width: 1px;
          }

          .form_title {
            font-size: 1.375rem;
            margin-bottom: 1.5rem;
          }

          .contact_form {
            gap: 1.25rem;
          }

          .form_control {
            padding: 0.75rem 1rem;
          }

          .form_submit_button {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact_form_wrapper {
            padding: 1.5rem 1.25rem;
          }

          .form_title {
            font-size: 1.25rem;
          }

          .form_label {
            font-size: 0.875rem;
          }

          .form_control {
            font-size: 0.9375rem;
            padding: 0.75rem 0.875rem;
          }
        }
      `}</style>
    </>
  );
}