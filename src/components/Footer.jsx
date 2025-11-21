export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sky-200/70">
        <p>
          © {new Date().getFullYear()} Campus360. All rights reserved.
        </p>
        <p className="mt-2 text-xs">Built for students • Privacy-first • Secure by design</p>
      </div>
    </footer>
  )
}
