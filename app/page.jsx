import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MoneteCard from "@/components/MoneteCard";
import BanconoteCard from "@/components/BanconoteCard";

export default function Home() {
  return (

    // CONTENITORE DELL?APPLICAZIONE
    <div
      className="flex flex-col min-h-screen"
    >

      <Header />

      {/* STRUTTURA DEL CORPO DELL'APPLICAZIONE (MAIN) */}
      <main
        className="flex flex-1 p-4 gap-4
                   bg-gradient-to-r
                   from-neutral-950
                   via-neutral-900
                   to-neutral-950"
      >

        {/* COLONNA SINISTRA: CARD MONETE E CARD BANCONOTE AFFIANCATE */}
        <section
          className="w-3/4 flex gap-4"
        >

          <MoneteCard
            className="flex-1"
          />

          <BanconoteCard
            className="flex-1"
          />

        </section>

        {/* COLONNA DESTRA */}
        <aside className="w-1/4 flex flex-col gap-4">
          <div className="h-24 flex items-center justify-center rounded-lg
                          bg-gradient-to-b from-neutral-800 to-neutral-700
                          border border-white/10 text-gray-100">
            Totale
          </div>

          <div className="h-20 flex items-center justify-center rounded-lg
                          bg-gradient-to-t from-neutral-800 to-neutral-700
                          border border-white/10 text-gray-100">
            GS
          </div>

          <div className="h-20 flex items-center justify-center rounded-lg
                          bg-gradient-to-b from-neutral-800 to-neutral-700
                          border border-white/10 text-gray-100">
            AVN
          </div>

          <div className="h-20 flex items-center justify-center rounded-lg
                          bg-gradient-to-t from-neutral-800 to-neutral-700
                          border border-white/10 text-gray-100">
            SPA
          </div>

          <div className="h-24 flex items-center justify-around rounded-lg
                         bg-gradient-to-b from-neutral-800 to-neutral-700
                         border border-white/10 text-gray-100 mt-auto">
            <button>Reset</button>
            <button>PDF</button>
            <button>Switch</button>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
