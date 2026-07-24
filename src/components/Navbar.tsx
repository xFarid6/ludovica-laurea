import { useEffect, useState } from 'react'

const links = [
  { href: '#timeline', label: 'Percorso' },
  { href: '#caso', label: 'Il caso' },
  { href: '#gallery', label: 'Ricordi' },
  { href: '#diploma', label: 'Diploma' },
  { href: '#element', label: 'Elemento' },
  { href: '#messages', label: 'Auguri' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header
      className={`sticky top-0 z-40 px-6 py-4 transition-colors duration-300 ${
        scrolled ? 'bg-lilac-50/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold text-lilac-700">
          Lu 💜
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-lilac-700 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-lilac-500">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleDark}
            aria-pressed={dark}
            aria-label={dark ? 'Attiva tema chiaro' : 'Attiva tema scuro viola'}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-lg text-lilac-700 transition hover:bg-lilac-100"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Chiudi il menu' : 'Apri il menu'}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-lilac-700 sm:hidden"
          >
            <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mt-3 flex flex-col items-center gap-1 rounded-2xl bg-lilac-100/95 py-4 shadow-lg shadow-lilac-300/40 sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 w-full items-center justify-center text-base font-medium text-lilac-700 transition hover:text-lilac-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
