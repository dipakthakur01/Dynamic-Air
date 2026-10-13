'use client';

import React, { type FormEvent } from 'react';
import { X, Plus, Copy, Download, Mail, MessageCircle } from 'lucide-react';
import type { BusinessConfig } from '@/types';

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
  const buildDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(
      `Hello Dynamic Air,\n\nI would like to enquire about ${data.get(
        'interest'
      )}.\n\nName: ${String(data.get('name')).trim()}\nContact: ${String(
        data.get('contact')
      ).trim()}\nLocation: ${
        String(data.get('location')).trim() || 'To be discussed'
      }\n\nRequirements:\n${String(
        data.get('message')
      ).trim()}\n\nPlease share availability, suitable options and a quotation. Thank you.`
    );
    setNotice('Your enquiry is ready. It has not been sent.');
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setNotice('Enquiry copied. You can now share it with Dynamic Air.');
    } catch {
      setNotice(
        'Copy is unavailable here. Select the text below or download your enquiry.'
      );
    }
  };

  const downloadDraft = () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: 'text/plain;charset=utf-8' })
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dynamic-Air-Enquiry.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Enquiry downloaded. No message has been sent.');
  };

  const interestOptions = Array.from(
    new Set([
      interest,
      'Climix Q Series Air Curtain',
      'Residential Wall-Mounted Split AC',
      'Commercial VRF System (100% Inverter)',
      '4-Way Ceiling Cassette AC',
      'Modular Cold Room (Chiller & Freezer)',
      'HVAC Installation & Copper Piping',
      'Repair & Gas Charging',
      'Annual Maintenance Contract (AMC)',
      'General enquiry',
    ])
  );

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
          <p>Prepare your requirements to share with Dynamic Air.</p>

          {!draft ? (
            <form onSubmit={buildDraft} className="enquiry-form">
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
                  Phone or email <span>*</span>
                  <input
                    name="contact"
                    required
                    minLength={5}
                    maxLength={150}
                    autoComplete="email"
                    placeholder="How we can reach you"
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
                    placeholder="City or area"
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
                  placeholder="Your space, equipment or service needs…"
                />
              </label>

              <p className="form-disclosure">
                Your details stay in this page. Creating an enquiry does not send
                a message or confirm a booking.
              </p>

              <button type="submit" className="button button-dark full-width">
                Create my enquiry <Plus size={17} />
              </button>
            </form>
          ) : (
            <div className="enquiry-result">
              <label htmlFor="enquiry-text" className="result-label">
                Your enquiry
              </label>
              <textarea
                id="enquiry-text"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                rows={9}
              />
              <div className="result-buttons">
                <button className="button button-dark" onClick={copyDraft}>
                  <Copy size={16} />
                  Copy enquiry
                </button>
                <button
                  className="button button-outline"
                  onClick={downloadDraft}
                >
                  <Download size={16} />
                  Download
                </button>
              </div>

              {business.email && (
                <a
                  className="button button-dark full-width"
                  href={`mailto:${business.email}?subject=${encodeURIComponent(
                    'Dynamic Air enquiry: ' + interest
                  )}&body=${encodeURIComponent(draft)}`}
                >
                  <Mail size={17} />
                  Open email
                </a>
              )}

              {business.whatsapp && (
                <a
                  className="button button-dark full-width"
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                    draft
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} />
                  Open WhatsApp
                </a>
              )}

              <p className="form-disclosure">
                Share this enquiry through your usual contact with Dynamic Air.
                Nothing is sent automatically.
              </p>

              <button
                className="edit-enquiry"
                onClick={() => {
                  setDraft('');
                  setNotice('');
                }}
              >
                Start another enquiry
              </button>
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
