export default function Login() {
  return (
    <section className="min-h-[80vh] bg-[--color-background] py-10">
      <div className="mx-auto w-full max-w-[clamp(320px,92vw,1100px)] px-4">
        <h1 className="text-center font-sans text-[clamp(1.6rem,5vw,2.8rem)] text-[--color-text] mb-8">
          Inicia sesión con
        </h1>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div className="max-w-[520px] justify-self-center w-full">
            <label className="block text-center font-sans text-[--color-text] text-[clamp(1rem,2.5vw,1.35rem)] font-semibold mb-4">
              tu correo o tu número
            </label>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="introducelo aquí"
                className="w-full rounded-full bg-white px-6 py-4 text-[clamp(1rem,2.6vw,1.125rem)] placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <input
                type="password"
                placeholder="Contraseña"
                className="w-full rounded-full bg-white px-6 py-4 text-[clamp(1rem,2.6vw,1.125rem)] placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <button
                type="button"
                className="w-full rounded-[1.25rem] bg-white px-6 py-4 text-[clamp(1rem,2.8vw,1.35rem)] font-semibold text-[--color-text] shadow hover:shadow-md transition"
              >
                Continúa
              </button>
            </div>
          </div>

          <div className="max-w-[520px] justify-self-center w-full space-y-4">
            {/* Google */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-full bg-white px-5 py-4 shadow hover:shadow-md transition"
            >
              <GoogleIcon className="h-7 w-7" />
              <span className="text-[clamp(1rem,2.6vw,1.125rem)] text-[--color-text]">
                Inicia sesión con <span className="font-semibold" style={{ color: "#4285F4" }}>Google</span>
              </span>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-full px-5 py-4 shadow hover:shadow-md transition"
              style={{ background: "linear-gradient(90deg,#1877F2,#0d5bd8)" }}
            >
              <FacebookIcon className="h-7 w-7 text-white" />
              <span className="text-white text-[clamp(1rem,2.6vw,1.125rem)]">
                Inicia sesión con <span className="font-semibold">facebook</span>
              </span>
            </a>

            {/* Microsoft */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-full px-5 py-4 shadow hover:shadow-md transition"
              style={{ background: "linear-gradient(90deg,#33A0FF,#00B7FF)" }}
            >
              <MicrosoftIcon className="h-7 w-7 text-white" />
              <span className="text-white text-[clamp(1rem,2.6vw,1.125rem)]">
                Inicia sesión con <span className="font-semibold">Microsoft</span>
              </span>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-full bg-black px-5 py-4 shadow hover:shadow-md transition"
            >
              <GitHubIcon className="h-7 w-7 text-white" />
              <span className="text-white text-[clamp(1rem,2.6vw,1.125rem)]">
                Inicia sesión con <span className="font-semibold">GitHub</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Iconos SVG ligeros --- */
function GoogleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.66 4.1-5.5 4.1a6.4 6.4 0 1 1 0-12.8 5.6 5.6 0 0 1 3.96 1.55l2.7-2.7A9.62 9.62 0 0 0 12 2.4a9.6 9.6 0 1 0 0 19.2c5.54 0 9.2-3.89 9.2-9.37 0-.63-.07-1.1-.16-1.63H12z"/>
    </svg>
  );
}
function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.89 6.49 1.89 12.06c0 4.99 3.64 9.13 8.39 9.94v-7.03H7.97v-2.9h2.31V9.69c0-2.28 1.35-3.55 3.43-3.55.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1V22c4.75-.81 8.39-4.95 8.39-9.94Z"/>
    </svg>
  );
}
function MicrosoftIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" fill="#F25022"/><rect x="13" y="3" width="8" height="8" fill="#7FBA00"/>
      <rect x="3" y="13" width="8" height="8" fill="#00A4EF"/><rect x="13" y="13" width="8" height="8" fill="#FFB900"/>
    </svg>
  );
}
function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.26 1.87 1.26 1.08 1.86 2.84 1.33 3.53 1.02.11-.79.42-1.33.76-1.63-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.39 1.25-3.24-.13-.31-.54-1.57.12-3.26 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.69.25 2.95.12 3.26.78.85 1.25 1.92 1.25 3.24 0 4.65-2.8 5.68-5.48 5.98.43.38.81 1.12.81 2.26v3.35c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  );
}
