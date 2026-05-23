export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center z-10 relative">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} IMNAZ MOON TECHNICAL SERVICES L.L.C
        </p>
        <p className="text-xs text-zinc-600 font-medium">
          Designed for Excellence
        </p>
      </div>
    </footer>
  );
}
