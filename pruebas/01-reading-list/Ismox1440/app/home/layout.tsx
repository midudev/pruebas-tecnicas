export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-[2rem] mx-auto">{children}</div>;
}
