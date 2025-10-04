"use client";

import { useState } from "react";
import { Listbox, Transition, Popover } from "@headlessui/react";
import { ChevronUpDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const operatori = [
  { id: 1, name: "Alyssa" },
  { id: 2, name: "Cristina" },
  { id: 3, name: "Irene" },
  { id: 4, name: "Vito" },
];

const casse = [
  { id: 1, name: "Welcome Desk" },
  { id: 2, name: "Shop Desk" },
  { id: 3, name: "Scoperta Vicenza" },
  { id: 4, name: "Scoperta Altavilla" },
];

export default function Header() {
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [date, setDate] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);

  return (

    <header
      style={{ boxShadow: "0 0 5px oklch(66.7% 0.295 322.15deg / 0.3), 0 0 10px oklch(66.7% 0.295 322.15deg / 0.1)" }}
      className="h-18 flex items-center justify-between px-6 z-50
                 border-b border-white/5 bg-gradient-to-r
                 from-neutral-900 via-neutral-800 to-neutral-900"
    >

      <h1
        className="text-2xl font-bold
                   text-gray-200 tracking-wide"
      >

        Fondo Cassa

      </h1>

      {/* CONTENITORE DATEPICKER E SELECT PERSONALIZZATI */}
      <div
        className="flex items-center gap-6"
      >

        {/* DATE PICKER */}
        <Popover
          className="relative"
        >

          {({ close }) => (

            <>

              {/* BOTTONE DEL DATEPICKER */}
              <Popover.Button
                style={{ boxShadow: "0 0 5px oklch(66.7% 0.295 322.15deg / 0.3), 0 0 10px oklch(66.7% 0.295 322.15deg / 0.1)" }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-700 cursor-pointer
                           border border-white/5 text-gray-400/70 shadow-xl hover:border-fuchsia-500/30 text-sm
                           focus:outline-none min-w-[170px] text-left font-mono"
              >

                <span
                  className="pointer-events-none absolute inset-y-0
                             right-0 flex items-center pr-2"
                >

                  <ChevronUpDownIcon
                    className="h-5 w-5
                               text-gray-400"
                  />

                </span>

                {date ? date.toLocaleDateString("it-IT") : "Scegli Data"}

              </Popover.Button>

              {/* GESTIONE TRANSIZIONE APERTURA/CHIUSURA DEL PANNELLO CHE CONTIENE IL CALENDARIO */}
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >

                {/* PANNELLO CHE CONTIENE IL CALENDARIO */}
                <Popover.Panel
                  className="absolute right-0 mt-2 p-4 rounded-xl bg-gradient-to-r
                             from-neutral-900/80 to-neutral-800/80 backdrop-blur
                             border border-white/5 shadow-xl z-50 min-w-[320px]"
                >

                  <Calendar
                    date={date}
                    setDate={(d) => {
                      setDate(d);
                      close();
                    }}
                  />

                </Popover.Panel>

              </Transition>

            </>

          )}

        </Popover>

        {/* SELECT OPERATORI */}
        <CustomSelect
          selected={selected1}
          setSelected={setSelected1}
          options={operatori}
          placeholder="Scegli Operatore"
        />

        {/* SELECT CASSE */}
        <CustomSelect
          selected={selected2}
          setSelected={setSelected2}
          options={casse}
          placeholder="Scegli Cassa"
        />

      </div>

    </header>
  );
}

// COMPONENTE SELECT PERSONALIZZO
function CustomSelect({ selected, setSelected, options, placeholder }) {
  return (
    <Listbox
      value={selected}
      onChange={setSelected}
    >

      <div
        className="relative min-w-[170px]"
      >
        {/* BOTTONE DEL SELECT PERSONALIZZATO */}
        <Listbox.Button
          style={{ boxShadow: "0 0 5px oklch(66.7% 0.295 322.15deg / 0.3), 0 0 10px oklch(66.7% 0.295 322.15deg / 0.1)" }}
          className="relative w-full cursor-pointer rounded-full text-sm
                     bg-gradient-to-r from-neutral-800 to-neutral-700
                     border border-white/5 py-2 pl-3 pr-10 text-left text-gray-400/70
                     shadow-xl focus:outline-none font-mono hover:border-fuchsia-500/30"
        >

          <span
            className="block truncate"
          >

            {selected ? selected.name : placeholder}

          </span>

          <span
            className="pointer-events-none absolute inset-y-0
                       right-0 flex items-center pr-2"
          >

            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
            />
          </span>

        </Listbox.Button>

        {/* GESTIONE TRANSIZIONE APERTURA/CHIUSURA DEL PANNELLO DEL SELECT PERSONALIZZATO */}
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="absolute mt-2 w-full overflow-auto rounded-xl
                       bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 backdrop-blur
                       border border-white/5 py-1 text-gray-100 shadow-xl z-50"
          >

            {options.map((opt) => (

              <Listbox.Option
                key={opt.id}
                value={opt}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-3 pr-4 ${
                    active ? "bg-neutral-600/20 text-gray-50" : "text-gray-300"
                  }`
                }
              >

                {opt.name}

              </Listbox.Option>

            ))}

          </Listbox.Options>

        </Transition>

      </div>

    </Listbox>
  );
}

// COMPONENTE CALENDARIO
function Calendar({ date, setDate }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // giorno della settimana
  const days = Array.from({ length: daysInMonth }, (_, i) => new Date(currentYear, currentMonth, i + 1));

  const monthName = new Intl.DateTimeFormat("it-IT", { month: "long" }).format(
    new Date(currentYear, currentMonth)
  );

  // intestazioni giorni
  const weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

  return (
    <div className="text-gray-100">
      {/* Header mese */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() =>
            setCurrentMonth((prev) =>
              prev === 0 ? (setCurrentYear((y) => y - 1), 11) : prev - 1
            )
          }
          className="p-1 hover:bg-neutral-700 rounded"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <span className="font-semibold capitalize">
          {monthName} {currentYear}
        </span>
        <button
          onClick={() =>
            setCurrentMonth((prev) =>
              prev === 11 ? (setCurrentYear((y) => y + 1), 0) : prev + 1
            )
          }
          className="p-1 hover:bg-neutral-700 rounded"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Giorni della settimana */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
        {weekDays.map((wd) => (
          <div key={wd}>{wd}</div>
        ))}
      </div>

      {/* Giorni del mese */}
      <div className="grid grid-cols-7 gap-2 text-sm">
        {Array.from({ length: (firstDay + 6) % 7 }).map((_, i) => (
          <div key={`empty-${i}`} /> // spazi vuoti prima del 1
        ))}
        {days.map((d) => {
          const isToday = d.toDateString() === today.toDateString();

          return (
            <button
              key={d.toISOString()}
              onClick={() => setDate(d)}
              className={`w-8 h-8 flex items-center justify-center rounded-full
                ${isToday ? "bg-fuchsia-500/30 border border-white/10 shadow-2xl" : ""}
                hover:bg-fuchsia-500/20`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
