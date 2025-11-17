export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border bg-white/5 backdrop-blur p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
