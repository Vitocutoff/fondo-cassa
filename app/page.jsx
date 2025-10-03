import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoinCard from "@/components/CoinCard";
import NoteCard from "@/components/NoteCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* MAIN */}
      <main className="flex flex-1 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-4 gap-4">
        {/* COLONNA SINISTRA: due card affiancate */}
        <section className="w-3/4 flex gap-4">
          <CoinCard className="flex-1" />
          <NoteCard className="flex-1" />
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
