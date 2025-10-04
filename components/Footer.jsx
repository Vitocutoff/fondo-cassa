export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ boxShadow: "0 0 5px oklch(66.7% 0.295 322.15deg / 0.3), 0 0 10px oklch(66.7% 0.295 322.15deg / 0.1)" }}
      className="h-14 flex items-center justify-center
                 border-t border-white/5 font-sans text-gray-300
                 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900"
    >

      <p>

        &copy; {year} Fondo Cassa by Vito Licari

      </p>

    </footer>
  );
}
