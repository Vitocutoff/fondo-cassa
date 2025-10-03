"use client";

import { useState } from "react";

export default function NoteCard() {
  const notes = [
    { label: "5 €", value: 5 },
    { label: "10 €", value: 10 },
    { label: "20 €", value: 20 },
    { label: "50 €", value: 50 },
    { label: "100 €", value: 100 },
    { label: "200 €", value: 200 },
    { label: "500 €", value: 500 },
  ];

  const [noteQty, setNoteQty] = useState({});

  const updateQty = (key, rawValue) => {
    const newVal = rawValue === "" ? "" : parseInt(rawValue, 10) || 0;
    setNoteQty(prev => ({ ...prev, [String(key)]: newVal }));
  };

  const total = notes.reduce(
    (sum, n) => sum + ((noteQty[String(n.value)] || 0) * n.value),
    0
  );

  return (

    // CORPO DELLA CARD
    <div
      className="flex flex-col flex-1 rounded-lg
                 bg-gradient-to-l from-neutral-800 to-neutral-700
                 border border-white/10 shadow-2xl overflow-hidden"
    >

      <div
        className="flex items-center justify-between
                   px-6 py-5 border-b border-white/10
                   bg-gradient-to-b from-neutral-900 to-neutral-800"
      >

        <h3
          className="text-sm font-semibold text-gray-300"
        >

          BANCONOTE

        </h3>

        <span className="text-sm font-medium text-green-500/70">
          {total.toFixed(2)} €
        </span>
      </div>
      <div className="flex-1 overflow-auto">
        {notes.map(n => {
          const qty = noteQty[String(n.value)] || 0;
          const partial = (qty * n.value).toFixed(2);
          return (
            <div
              key={n.value}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-2"
            >
              <div className="text-sm text-gray-200">{n.label}</div>
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={qty}
                onChange={e => updateQty(n.value, e.target.value)}
                className="w-20 text-center bg-transparent border border-white/10 rounded px-2 py-1 text-sm focus:outline-none"
                min="0"
              />
              <div className="text-right font-semibold text-gray-100">
                €{partial}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
