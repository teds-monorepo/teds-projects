export default function Header() {
  return (
    <header className="h-14 flex-shrink-0 flex items-center gap-3 px-4 bg-panel border-b border-border relative z-40">
      <a href="/" className="flex items-center gap-2 text-[15px] font-semibold whitespace-nowrap min-w-0">
        <span className="flex-shrink-0">📁</span>
        <span className="truncate">Ted&apos;s Projects</span>
      </a>
    </header>
  );
}
