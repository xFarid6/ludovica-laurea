const links = [
  { href: '#timeline', label: 'Percorso' },
  { href: '#gallery', label: 'Ricordi' },
  { href: '#diploma', label: 'Diploma' },
  { href: '#messages', label: 'Auguri' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-lilac-50/70 px-6 py-4 backdrop-blur-md">
      <a href="#home" className="font-display text-lg font-bold text-lilac-700">
        Dr.ssa Ludovica 🎓
      </a>
      <nav className="hidden gap-6 text-sm font-medium text-lilac-700 sm:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-lilac-500">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
