export default function DetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {children}
    </div>
  );
}
