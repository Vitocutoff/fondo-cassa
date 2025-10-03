import "./globals.css";

export const metadata = {
  title: "Fondo Cassa",
  description: "Web app per il calcolo del fondo cassa.",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
    >

      <head>

        <link
          rel="icon"
          href="/icons/icon.ico"
        />

        <link
          rel="apple-touch-icon"
          href="/icons/icon-192.png"
        />

      </head>

      <body>

        {children}

      </body>

    </html>
  );
}
