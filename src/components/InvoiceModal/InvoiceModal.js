import React from "react";
import "./InvoiceModal.scss";
import InvoiceContent from "./InvoiceContent";

export default function InvoiceModal({ onClose, info }) {
  return (
    <div id="invoice-modal" className="overlay">
      <div className="modal-window">
        <div className="header w-100">
          <div className="title w-100">نمایش فاکتور نهایی</div>
          <div>
            <button className="close-button pointer" onClick={() => onClose()}>
              <h1>
                <b>×</b>
              </h1>
            </button>
          </div>
        </div>
        <div className="content">
          <InvoiceContent data={info} />
        </div>
      </div>
    </div>
  );
}
