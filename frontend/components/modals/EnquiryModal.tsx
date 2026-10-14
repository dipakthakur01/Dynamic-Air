'use client';

import React, { useState, type FormEvent } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  MessageCircle,
  Loader2,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import type { BusinessConfig } from '@/types';

// Internal destination email for inquiries
const DEFAULT_INQUIRY_MAIL = 'sdynamicair@gmail.com';

interface EnquiryModalProps {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  interest: string;
  setInterest: React.Dispatch<React.SetStateAction<string>>;
  draft: string;
  setDraft: React.Dispatch<React.SetStateAction<string>>;
  notice: string;
  setNotice: React.Dispatch<React.SetStateAction<string>>;
  business: BusinessConfig;
}

export default function EnquiryModal({
  dialogRef,
  onClose,
  interest,
  setInterest,
  draft,
  setDraft,
  notice,
  setNotice,
  business,
}: EnquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    contact: string;
    interest: string;
    location: string;
    message: string;
  } | null>(null);

  const targetWhatsapp = business.whatsapp || '9779715023725';

  const interestOptions = Array.from(
    new Set([
      interest,
      'Climix Q Series Air Curtain',
      'Smart HEPA Air Purifier (Different Sizes)',
      'Residential Wall-Mounted Split AC',
      'VRF / VRV System (4 HP Mini VRF to Commercial)',
      '4-Way Ceiling Cassette AC',
      'Modular Cold Room (Chiller & Freezer)',
      'HVAC Installation & Copper Piping',
      'Repair & Gas Charging',
      'Annual Maintenance Contract (AMC)',
      'General enquiry',
    ])
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const contact = String(data.get('contact') || '').trim();
    const selectedInterest = String(data.get('interest') || interest).trim();
    const location = String(data.get('location') || '').trim() || 'Kathmandu, Nepal';
    const message = String(data.get('message') || '').trim();

    const formattedDraft = `Hello Dynamic Air Solutions,

I would like to enquire about: ${selectedInterest}

Client Name: ${name}
Contact: ${contact}
Location: ${location}

Requirements & Project Scope:
${message}

Please share equipment availability, on-site assessment schedule, and quotation.`;

    setDraft(formattedDraft);
    setSubmittedData({
      name,
      contact,
      interest: selectedInterest,
      location,
      message,
    });

    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(formattedDraft)}`;

    // Try opening WhatsApp in a new tab upon submit user gesture
    if (typeof window !== 'undefined') {
      try {
        window.open(whatsappUrl, '_blank');
      } catch {
        // Pop-up blocker; user will use the prominent WhatsApp button shown below
      }
    }

    // Direct auto-send to email behind the scenes via FormSubmit
    const targetEmail = business.email || DEFAULT_INQUIRY_MAIL;
    const payload: Record<string, string> = {
      name,
      contact,
      interest: selectedInterest,
      location,
      message,
      _subject: `New Website Enquiry: ${selectedInterest} - ${name}`,
      _template: 'table',
      _captcha: 'false',
    };

    if (contact.includes('@')) {
      payload._replyto = contact;
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json().catch(() => null);

      if (response.ok && (result?.success === 'true' || result?.success === true)) {
        setSubmitStatus('success');
        setNotice('Enquiry auto-sent to our team! Use the WhatsApp option below for instant real-time chat.');
      } else if (result?.message && result.message.toLowerCase().includes('activation')) {
        setSubmitStatus('success');
        setNotice(`Enquiry submitted! Please check ${targetEmail} (including Spam/Junk folder) to confirm the one-time FormSubmit activation.`);
      } else {
        setSubmitStatus('fallback');
        setNotice('Direct transmission could not be confirmed. Please send via WhatsApp below.');
      }
    } catch {
      // Offline, adblocker, or network interruption
      setSubmitStatus('fallback');
      setNotice('Network connection was interrupted. Please send directly via WhatsApp below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setNotice('Enquiry copied to clipboard. You can paste it into WhatsApp.');
    } catch {
      setNotice('Copy is unavailable. Please select and copy the text below.');
    }
  };

  const downloadDraft = () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: 'text/plain;charset=utf-8' })
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dynamic-Air-Enquiry-${Date.now()}.txt`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Enquiry file downloaded.');
  };

  const handleReset = () => {
    setDraft('');
    setNotice('');
    setSubmitStatus('idle');
    setSubmittedData(null);
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal enquiry-modal"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="enquiry-title"
    >
      <div className="modal-surface">
        <button
          className="modal-close icon-button"
          aria-label="Close enquiry"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <div className="modal-content">
          <div className="section-eyebrow">
            <span className="square-bullet" /> LET’S TALK COMFORT
          </div>
          <h2 id="enquiry-title">
            What can we
            <br />
            help you with?
          </h2>
          <p>
            Submit your requirements directly to our engineering team for on-site assessment and quotation.
          </p>

          {!draft ? (
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-row">
                <label>
                  Your name <span>*</span>
                  <input
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Full name"
                  />
                </label>
                <label>
                  Phone or contact <span>*</span>
                  <input
                    name="contact"
                    required
                    minLength={5}
                    maxLength={150}
                    autoComplete="tel"
                    placeholder="e.g. 98XXXXXXXX"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  I’m interested in
                  <select
                    name="interest"
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                  >
                    {interestOptions.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Your location
                  <input
                    name="location"
                    maxLength={150}
                    autoComplete="address-level2"
                    placeholder="City or area (e.g. Kathmandu)"
                  />
                </label>
              </div>

              <label>
                Tell us a little more <span>*</span>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={4}
                  placeholder="Your space, doorway width, equipment specifications or service needs…"
                />
              </label>

              <p className="form-disclosure">
                Submissions are auto-sent directly to our engineering team and can immediately be sent to WhatsApp below.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button button-dark full-width enquiry-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={17} className="spin" />
                    Auto-sending enquiry to engineering team…
                  </>
                ) : (
                  <>
                    Submit Enquiry (Auto-Send to Team) <Send size={16} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="enquiry-result">
              {/* 1. AUTO SEND STATUS */}
              <div className={`enquiry-status-card ${submitStatus === 'success' ? 'status-success' : 'status-fallback'}`}>
                <div className="enquiry-status-header">
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Enquiry Auto-Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>Enquiry Prepared for WhatsApp</span>
                    </>
                  )}
                </div>
                <p className="enquiry-status-text">
                  {submitStatus === 'success' ? (
                    <>
                      Thank you, <strong>{submittedData?.name}</strong>. Your enquiry regarding{' '}
                      <strong>{submittedData?.interest}</strong> has been auto-sent to our engineering department.
                    </>
                  ) : (
                    <>
                      Your enquiry is ready. Direct dispatch target: Dynamic Air Engineering Team.
                    </>
                  )}
                </p>
                {submittedData?.contact && (
                  <p className="enquiry-status-text" style={{ marginTop: '5px' }}>
                    Contact on file: <strong>{submittedData.contact}</strong>
                  </p>
                )}
              </div>

              {/* 2. THEN BELOW SHOW FOR CURRENT SENDING TO WHATSAPP */}
              <div className="enquiry-whatsapp-card">
                <div className="whatsapp-card-badge">
                  <MessageCircle size={15} />
                  <span>CURRENT SENDING TO WHATSAPP</span>
                </div>
                <h3 className="whatsapp-card-title">
                  Send Current Enquiry to WhatsApp
                </h3>
                <p className="whatsapp-card-desc">
                  Chat directly with our technician on WhatsApp (<strong>+977 9715023725</strong>) for instant quotations and equipment recommendation.
                </p>
                <a
                  href={`https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(draft)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-whatsapp whatsapp-direct-send-btn"
                >
                  <MessageCircle size={19} />
                  <span>Send Current Enquiry to WhatsApp (+977 9715023725)</span>
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* 3. CURRENT ENQUIRY SUMMARY */}
              <div className="enquiry-summary-preview">
                <div className="preview-label-row">
                  <span className="result-label">Current Enquiry Details</span>
                  <span className="recipient-pill">Status: Auto-Dispatched</span>
                </div>
                <textarea
                  id="enquiry-text"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  rows={6}
                />
              </div>

              {/* 4. ACTIONS: WhatsApp, clipboard, download, reset */}
              <div className="result-buttons">
                <button className="button button-dark" onClick={copyDraft}>
                  <Copy size={16} />
                  Copy
                </button>
                <button
                  className="button button-outline"
                  onClick={downloadDraft}
                >
                  <Download size={16} />
                  Download (.txt)
                </button>
              </div>

              <div className="enquiry-footer-actions">
                <button className="edit-enquiry" onClick={handleReset}>
                  <RefreshCw size={13} style={{ marginRight: '5px' }} />
                  Submit another enquiry
                </button>
              </div>
            </div>
          )}

          <p className="notice" role="status">
            {notice}
          </p>
        </div>
      </div>
    </dialog>
  );
}
