"use client";
import { useState } from "react";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export function BookDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          role: formData.get("role"),
        }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section section-cta" id="final-cta">
      <div className="cta-glow"></div>
      <div className="container">
        <h2 className="cta-heading">Ready to see where AI fits in your business?</h2>
        <p className="cta-sub">
          Tell us what&apos;s slowing your team down. We&apos;ll show you where AI can make a real difference, and help you get there.
        </p>

        <div className="demo-form-wrapper">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="demo-form">
              <div className="demo-form-row">
                <div className="demo-field">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="demo-input"
                  />
                </div>
                <div className="demo-field">
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="Company"
                    className="demo-input"
                  />
                </div>
              </div>
              <div className="demo-form-row">
                <div className="demo-field">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Work email"
                    className="demo-input"
                  />
                </div>
                <div className="demo-field">
                  <select name="role" className="demo-input demo-select">
                    <option value="">Select your role</option>
                    <option>Supply Chain</option>
                    <option>Operations</option>
                    <option>Engineering</option>
                    <option>Finance</option>
                    <option>HR</option>
                    <option>Executive / Leadership</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {error && (
                <p className="demo-error">Something went wrong. Please try again.</p>
              )}

              <div className="demo-form-actions">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Book a Demo"}
                </button>
                <a href="mailto:hello@valued.ai" className="btn btn-outline btn-lg">
                  Contact Us
                </a>
              </div>
              <p className="demo-fine-print">No credit card required. 15-minute call with our team.</p>
            </form>
          ) : (
            <div className="demo-success">
              <div className="demo-success-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3>You&apos;re all set!</h3>
              <p>We&apos;ll reach out within 24 hours to schedule your demo.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
