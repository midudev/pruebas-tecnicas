import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Tu bazar de confianza</title>
        <meta name="description" content="Tu bazar de confianza" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <meta name="robots" content="index, follow"></meta>
      </head>

      <body className="flex flex-col text-black items-center container mx-auto min-h-screen">
        <main className="flex flex-col grow items-center w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
