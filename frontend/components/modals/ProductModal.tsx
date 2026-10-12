'use client';

import React from 'react';
import { X, Check, MessageCircle, Download } from 'lucide-react';
import type { Product } from '@/types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenEnquiry: (topic: string) => void;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

export default function ProductModal({
  product,
  onClose,
  onOpenEnquiry,
  dialogRef,
}: ProductModalProps) {
  return (
    <dialog
      ref={dialogRef}
      className="modal product-modal"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="product-dialog-title"
    >
      {product && (
        <div className="modal-surface">
          <button
            className="modal-close icon-button"
            aria-label="Close solution details"
            onClick={onClose}
            autoFocus
          >
            <X size={22} />
          </button>
          <div className="product-modal-image">
            <img
              src={product.image}
              alt={`Product illustration of ${product.name.toLowerCase()}`}
            />
          </div>
          <div className="modal-content">
            <div className="section-eyebrow">
              <span className="square-bullet" />
              {product.category}
            </div>
            <h2 id="product-dialog-title">{product.name}</h2>
            {product.specSummary && (
              <div className="modal-specs-badge">{product.specSummary}</div>
            )}
            <p>{product.description}</p>
            <ul className="product-features">
              {product.features.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="ideal-for">
              <span>IDEAL FOR</span>
              <p>{product.idealFor}</p>
            </div>

            <div className="modal-action-row">
              <button
                className="button button-dark"
                onClick={() => onOpenEnquiry(product.name)}
              >
                Enquire about this solution <MessageCircle size={17} />
              </button>

              {product.brochureUrl && (
                <a
                  href={product.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  <Download size={16} /> Download Catalog (PDF)
                </a>
              )}
            </div>

            <p className="product-note">
              Authorized supply &amp; installation by Dynamic Air Solutions Pvt. Ltd. Doorway sizing and models are confirmed upon consultation.
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}
