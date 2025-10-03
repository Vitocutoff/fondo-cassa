"use client";

import { useState } from "react";

export default function CoinCard() {
  const coins = [
    { label: "0,01 €", value: 0.01 },
    { label: "0,02 €", value: 0.02 },
    { label: "0,05 €", value: 0.05 },
    { label: "0,10 €", value: 0.1 },
    { label: "0,20 €", value: 0.2 },
    { label: "0,50 €", value: 0.5 },
    { label: "1,00 €", value: 1 },
    { label: "2,00 €", value: 2 },
  ];

  const [coinQty, setCoinQty] = useState({});

  const updateQty = (key, rawValue) => {
    const newVal = rawValue === "" ? "" : parseInt(rawValue, 10) || 0;
    setCoinQty(prev => ({ ...prev, [String(key)]: newVal }));
  };

  const total = coins.reduce(
    (sum, c) => sum + ((coinQty[String(c.value)] || 0) * c.value),
    0
  );

  return (
    <div className="flex flex-col flex-1 rounded-lg bg-gradient-to-r from-neutral-800 to-neutral-700 border border-white/5 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <h3 className="text-lg font-semibold text-gray-400">Monete</h3>
        <span className="text-sm font-medium text-gray-200">
          €{total.toFixed(2)}
        </span>
      </div>
      <div className="flex-1 overflow-auto">
        {coins.map(c => {
          const qty = coinQty[String(c.value)] || 0;
          const partial = (qty * c.value).toFixed(2);
          return (
            <div
              key={c.value}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-2"
            >
              <div className="text-sm text-gray-200">{c.label}</div>
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={qty}
                onChange={e => updateQty(c.value, e.target.value)}
                className="w-20 text-center bg-transparent border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
