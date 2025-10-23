import { useMemo, useState } from "react";

/* ---------- Datos de opciones ---------- */
const INTERESTS = [
  { id: "devsecops", label: "DevSecOps" },
  { id: "python", label: "Python" },
  { id: "cyber", label: "Cybersecurity" },
  { id: "ai", label: "Artificial Intelligence" },
  { id: "data", label: "Data Analysis" },
];

const STYLES = [
  { id: "books", label: "Mediante libros" },
  { id: "videos", label: "Videos" },
  { id: "labs", label: "Labs / talleres virtuales" },
  { id: "group", label: "Grupalmente" },
  { id: "live", label: "Clases en vivo" },
];

/* ---------- Página principal ---------- */
export default function Register() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
    interests: [],
    styles: [],
  });

  const canNext1 = useValidCredentials(form);
  const canNext2 = form.interests.length > 0;
  const canSubmit = form.styles.length > 0;

  function toggleArray(field, value) {
    setForm((f) => {
      const arr = new Set(f[field]);
      arr.has(value) ? arr.delete(value) : arr.add(value);
      return { ...f, [field]: Array.from(arr) };
    });
  }

  function onSubmit(e) {
    e?.preventDefault?.();
    const payload = {
      email: form.email.trim(),
      password: form.password, // solo para demo; en backend via HTTPS
      interests: form.interests,
      studyStyles: form.styles,
    };
    console.log("REGISTER PAYLOAD", payload);
    alert("✅ Datos listos (ver consola). Aquí llamarías a tu API.");
  }

  return (
    <section className="bg-[--color-background] min-h-[80vh] py-10">
      <div className="mx-auto w-full max-w-[clamp(320px,92vw,1100px)] px-4">
        <h1 className="text-center font-display text-[clamp(1.6rem,5vw,2.8rem)] text-[--color-text] mb-8">
          ¿Cómo te quieres registrar?
        </h1>

        <ProgressBar step={step} />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start mt-8">
          <div className="max-w-[560px] w-full justify-self-center">
            {step === 1 && (
              <StepCredentials
                value={form}
                onChange={setForm}
                canNext={canNext1}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <StepInterests
                value={form.interests}
                options={INTERESTS}
                onToggle={(id) => toggleArray("interests", id)}
                onBack={() => setStep(1)}
                onNext={() => canNext2 && setStep(3)}
                canNext={canNext2}
              />
            )}

            {step === 3 && (
              <StepStudyStyle
                value={form.styles}
                options={STYLES}
                onToggle={(id) => toggleArray("styles", id)}
                onBack={() => setStep(2)}
                onSubmit={onSubmit}
                canSubmit={canSubmit}
              />
            )}
          </div>

          <div className="max-w-[520px] w-full justify-self-center space-y-4">
            <SocialGoogle />
            <SocialFacebook />
            <SocialMicrosoft />
            <SocialGitHub />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Paso 1: credenciales + fuerza de contraseña ---------- */
function StepCredentials({ value, onChange, canNext, onNext }) {
  const strength = usePasswordStrength(value.password);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (canNext) onNext();
      }}
    >
      <LabeledInput
        label="Correo"
        type="email"
        placeholder="tuemail@ejemplo.com"
        value={value.email}
        onChange={(v) => onChange({ ...value, email: v })}
      />

      <LabeledInput
        label="Contraseña"
        type="password"
        placeholder="••••••••"
        value={value.password}
        onChange={(v) => onChange({ ...value, password: v })}
      />

      {/* Barra de fuerza */}
      <PasswordMeter strength={strength} />

      <LabeledInput
        label="Confirma Contraseña"
        type="password"
        placeholder="••••••••"
        value={value.confirm}
        onChange={(v) => onChange({ ...value, confirm: v })}
      />

      <div className="pt-2">
        <button
          type="submit"
          disabled={!canNext}
          className={`w-full rounded-[1.25rem] px-6 py-4 text-[clamp(1rem,2.6vw,1.125rem)] font-semibold transition
          ${canNext ? "bg-white text-[--color-text] shadow hover:shadow-md" : "bg-white/60 text-gray-400 cursor-not-allowed"}`}
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}

/* ---------- Paso 2: intereses (multi) ---------- */
function StepInterests({ value, options, onToggle, onBack, onNext, canNext }) {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (canNext) onNext();
      }}
    >
      <fieldset>
        <legend className="font-display text-[clamp(1.2rem,4vw,2rem)] mb-4">
          ¿Qué te interesaría estudiar?
        </legend>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {options.map((opt) => {
            const checked = value.includes(opt.id);
            return (
              <li key={opt.id}>
                <label
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition
                  ${checked ? "bg-white border-blue-300 shadow" : "bg-white/70 border-gray-200 hover:bg-white"}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggle(opt.id)}
                    className="size-5 accent-blue-600"
                  />
                  <span className="text-[clamp(1rem,2.6vw,1.125rem)]">{opt.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="rounded-[1.25rem] bg-white px-6 py-3 shadow hover:shadow-md"
        >
          Atrás
        </button>
        <button
          type="submit"
          disabled={!canNext}
          className={`rounded-[1.25rem] px-6 py-3 font-semibold transition
          ${canNext ? "bg-white text-[--color-text] shadow hover:shadow-md" : "bg-white/60 text-gray-400 cursor-not-allowed"}`}
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}

/* ---------- Paso 3: estilos de estudio (multi) ---------- */
function StepStudyStyle({ value, options, onToggle, onBack, onSubmit, canSubmit }) {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (canSubmit) onSubmit();
      }}
    >
      <fieldset>
        <legend className="font-display text-[clamp(1.2rem,4vw,2rem)] mb-4">
          ¿Cómo te gusta estudiar?
        </legend>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {options.map((opt) => {
            const checked = value.includes(opt.id);
            return (
              <li key={opt.id}>
                <label
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition
                  ${checked ? "bg-white border-blue-300 shadow" : "bg-white/70 border-gray-200 hover:bg-white"}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggle(opt.id)}
                    className="size-5 accent-blue-600"
                  />
                  <span className="text-[clamp(1rem,2.6vw,1.125rem)]">{opt.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="rounded-[1.25rem] bg-white px-6 py-3 shadow hover:shadow-md"
        >
          Atrás
        </button>
        <button
          type="submit"
          disabled={!canSubmit}
          className={`rounded-[1.25rem] px-6 py-3 font-semibold transition
          ${canSubmit ? "bg-white text-[--color-text] shadow hover:shadow-md" : "bg-white/60 text-gray-400 cursor-not-allowed"}`}
        >
          Registrarse
        </button>
      </div>
    </form>
  );
}

/* ---------- Subcomponentes UI ---------- */
function LabeledInput({ label, value, onChange, ...rest }) {
  return (
    <div>
      <label className="block text-[--color-text] text-[clamp(1rem,2.5vw,1.15rem)] font-semibold mb-2">
        {label}
      </label>
      <input
        {...rest}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full bg-white px-6 py-4 text-[clamp(1rem,2.6vw,1.125rem)] placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
}

function ProgressBar({ step }) {
  const pct = step === 1 ? 33 : step === 2 ? 66 : 100;
  return (
    <div className="h-3 w-full bg-white/60 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-[width] duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/* ---------- Validación y fuerza de contraseña ---------- */
function useValidCredentials({ email, password, confirm }) {
  const emailOk = /\S+@\S+\.\S+/.test(email.trim());
  const strong = usePasswordStrength(password) >= 2; // 0..3 (débil..fuerte)
  const match = password.length > 0 && password === confirm;
  return emailOk && strong && match;
}

function usePasswordStrength(pw) {
  return useMemo(() => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/\d/.test(pw) || /[^A-Za-z0-9]/.test(pw)) score++;
    return Math.min(score, 3); // 0 débil, 1 media-, 2 media+, 3 fuerte
  }, [pw]);
}

function PasswordMeter({ strength }) {
  const labels = ["Débil", "Medio", "Medio+", "Fuerte"];
  const colors = ["bg-red-400", "bg-amber-400", "bg-blue-400", "bg-emerald-500"];
  const pct = [20, 45, 70, 100][strength];

  return (
    <div>
      <div className="h-2 w-full bg-white/70 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors[strength]} transition-[width] duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1 text-sm text-gray-600">{labels[strength]}</p>
    </div>
  );
}

/* ---------- Botones sociales (por ahora links vacíos) ---------- */
function SocialGoogle() {
  return (
    <a href="#" className="flex items-center gap-3 rounded-full bg-white px-5 py-4 shadow hover:shadow-md transition">
      <GoogleIcon className="h-7 w-7" />
      <span className="text-[clamp(1rem,2.6vw,1.125rem)] text-[--color-text]">
        Inicia sesión con <span className="font-semibold" style={{ color: "#4285F4" }}>Google</span>
      </span>
    </a>
  );
}
function SocialFacebook() {
  return (
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
  );
}
function SocialMicrosoft() {
  return (
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
  );
}
function SocialGitHub() {
  return (
    <a href="#" className="flex items-center gap-3 rounded-full bg-black px-5 py-4 shadow hover:shadow-md transition">
      <GitHubIcon className="h-7 w-7 text-white" />
      <span className="text-white text-[clamp(1rem,2.6vw,1.125rem)]">
        Inicia sesión con <span className="font-semibold">GitHub</span>
      </span>
    </a>
  );
}

/* ---------- Iconos SVG ---------- */
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
