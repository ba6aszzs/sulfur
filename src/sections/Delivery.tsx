export default function Delivery() {
  return (
    <section className="relative overflow-hidden border-y" style={{ borderColor: "var(--line)" }} id="delivery">
      <div className="flex min-h-[70vh] flex-col-reverse lg:flex-row">
        {/* Left — white */}
        <div className="flex w-full items-center justify-center bg-white px-8 py-16 lg:w-1/2 lg:py-0">
          <div className="max-w-lg">
            <div className="mb-8 flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-[#0d0e0d]/30">
              <span>Home</span>
              <span className="text-[#F26500]">Info</span>
              <span>Service</span>
              <span className="ml-auto flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                Buscar
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-black leading-[0.95] tracking-[-0.03em] text-[#0d0e0d]">
              DELIVERY<br />SERVICE
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#0d0e0d]/50">
              Soluções completas de entrega para sua empresa. Da última milha à distribuição 
              regional, nossa frota inteligente garante que seus produtos cheguem ao destino 
              com rapidez, segurança e rastreamento em tempo real.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#F26500] to-[#FBBF24] px-9 text-xs font-bold tracking-[0.12em] uppercase text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 sm:min-h-0 sm:py-3.5"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>

        {/* Right — orange with illustration */}
        <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#F26500] px-8 py-16 lg:w-1/2 lg:py-0">
          {/* Slope divider */}
          <div className="pointer-events-none absolute -left-20 top-0 bottom-0 hidden w-20 lg:block">
            <svg viewBox="0 0 80 1000" className="h-full w-full" preserveAspectRatio="none">
              <path d="M80 0 L0 0 L80 1000 L80 0Z" fill="white" />
            </svg>
          </div>

          {/* Isometric illustration */}
          <svg viewBox="0 0 500 380" className="relative z-10 h-auto w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e5e5e5" />
              </linearGradient>
              <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            {/* Shadow under van */}
            <ellipse cx="280" cy="340" rx="140" ry="18" fill="rgba(0,0,0,0.15)" />

            {/* === VAN (side view) === */}
            {/* Van body */}
            <path d="M160 180 L160 330 L400 330 L400 210 L360 180 Z" fill="url(#vanGrad)" stroke="#ccc" strokeWidth="2" />
            {/* Van roof */}
            <path d="M160 180 L200 140 L370 140 L400 210 L360 180 Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="2" />
            {/* Van front cabin */}
            <path d="M370 140 L400 210 L440 210 L420 160 Z" fill="#eee" stroke="#ccc" strokeWidth="2" />
            {/* Windshield */}
            <path d="M380 160 L400 210 L430 210 L410 165 Z" fill="#cce5ff" opacity={0.6} />
            {/* Van stripe decal */}
            <rect x="200" y="245" width="170" height="6" rx="3" fill="#F26500" opacity={0.4} />
            {/* Door line */}
            <line x1="260" y1="180" x2="260" y2="330" stroke="#ccc" strokeWidth="1.5" />

            {/* Logo on van */}
            <rect x="210" y="250" width="28" height="28" rx="3" fill="#F26500" />
            <text x="224" y="270" fontSize="14" fontWeight="900" fill="white" textAnchor="middle" fontFamily="sans-serif">S</text>

            {/* Rear door OPEN */}
            <path d="M160 180 L130 200 L130 350 L160 330 Z" fill="#f0f0f0" stroke="#ccc" strokeWidth="2" />
            <path d="M160 180 L130 200 L130 350 L160 330" fill="rgba(255,255,255,0.5)" stroke="#bbb" strokeWidth="1.5" strokeDasharray="4,4" />
            {/* Door handle */}
            <rect x="150" y="230" width="3" height="12" rx="1" fill="#999" />

            {/* Inside van — dark cargo area */}
            <rect x="161" y="190" width="95" height="140" fill="#2a2a2a" opacity={0.4} />

            {/* === BOXES inside === */}
            <rect x="170" y="255" width="28" height="22" rx="1" fill="url(#boxGrad)" />
            <rect x="170" y="255" width="28" height="22" rx="1" fill="none" stroke="#ccc" strokeWidth="0.5" />
            <line x1="184" y1="255" x2="184" y2="277" stroke="#ccc" strokeWidth="0.5" />

            <rect x="202" y="245" width="25" height="20" rx="1" fill="#FBBF24" />
            <line x1="214" y1="245" x2="214" y2="265" stroke="#ccc" strokeWidth="0.5" />

            <rect x="173" y="235" width="22" height="18" rx="1" fill="#FCD34D" />
            <line x1="184" y1="235" x2="184" y2="253" stroke="#ccc" strokeWidth="0.5" />

            {/* === WHEELS === */}
            <circle cx="210" cy="335" r="18" fill="#333" />
            <circle cx="210" cy="335" r="10" fill="#555" />
            <circle cx="210" cy="335" r="4" fill="#888" />

            <circle cx="360" cy="335" r="18" fill="#333" />
            <circle cx="360" cy="335" r="10" fill="#555" />
            <circle cx="360" cy="335" r="4" fill="#888" />

            {/* === PERSON 1 — delivery guy (left, holding box) === */}
            <g transform="translate(95, 235)">
              {/* Legs */}
              <rect x="8" y="36" width="6" height="22" rx="2" fill="#2c5f8a" />
              <rect x="18" y="36" width="6" height="22" rx="2" fill="#2c5f8a" />
              {/* Shoes */}
              <rect x="6" y="56" width="10" height="5" rx="2" fill="#333" />
              <rect x="16" y="56" width="10" height="5" rx="2" fill="#333" />
              {/* Body — light shirt */}
              <rect x="5" y="10" width="22" height="28" rx="3" fill="#e8f0fe" />
              {/* Arms */}
              <rect x="-2" y="12" width="8" height="6" rx="2" fill="#e8f0fe" />
              <rect x="26" y="12" width="12" height="6" rx="2" fill="#e8f0fe" />
              {/* Head */}
              <circle cx="16" cy="6" r="9" fill="#f5cba7" />
              {/* Cap */}
              <path d="M7 6 Q16 -2 25 6" fill="#F26500" />
              <rect x="8" y="5" width="16" height="3" rx="1" fill="#F26500" />
              {/* Box being passed */}
              <rect x="28" y="10" width="16" height="14" rx="1" fill="url(#boxGrad)" stroke="#ccc" strokeWidth="0.5" />
            </g>

            {/* === PERSON 2 — customer (right, red shirt) === */}
            <g transform="translate(415, 222)">
              {/* Legs */}
              <rect x="10" y="38" width="6" height="24" rx="2" fill="#1a1a2e" />
              <rect x="20" y="38" width="6" height="24" rx="2" fill="#1a1a2e" />
              {/* Shoes */}
              <rect x="8" y="60" width="10" height="5" rx="2" fill="#333" />
              <rect x="18" y="60" width="10" height="5" rx="2" fill="#333" />
              {/* Body — red shirt */}
              <rect x="7" y="10" width="22" height="30" rx="3" fill="#dc2626" />
              {/* Arms */}
              <rect x="2" y="12" width="10" height="6" rx="2" fill="#dc2626" transform="rotate(-20, 7, 15)" />
              <rect x="24" y="12" width="10" height="6" rx="2" fill="#dc2626" />
              {/* Head */}
              <circle cx="18" cy="6" r="9" fill="#f5cba7" />
              {/* Hair */}
              <path d="M9 4 Q18 -4 27 4" fill="#4a3728" />
            </g>

            {/* === PERSON 3 — second delivery guy with hand truck === */}
            <g transform="translate(130, 275)">
              {/* Hand truck */}
              <rect x="-8" y="0" width="4" height="50" rx="1" fill="#666" />
              <rect x="8" y="0" width="4" height="50" rx="1" fill="#666" />
              <rect x="-10" y="48" width="24" height="6" rx="1" fill="#888" />
              {/* Hand truck wheels */}
              <circle cx="2" cy="55" r="6" fill="#333" />
              <circle cx="2" cy="55" r="3" fill="#666" />
              {/* Big box on hand truck */}
              <rect x="-2" y="-10" width="20" height="16" rx="1" fill="url(#boxGrad)" stroke="#ccc" strokeWidth="0.5" />
              <rect x="-2" y="-10" width="20" height="16" rx="1" fill="none" stroke="#ccc" strokeWidth="0.5" />
              <line x1="8" y1="-10" x2="8" y2="6" stroke="#ccc" strokeWidth="0.5" />
              {/* Person body */}
              <rect x="14" y="8" width="16" height="24" rx="3" fill="#e8f0fe" />
              {/* Arms pulling truck */}
              <rect x="6" y="10" width="10" height="5" rx="2" fill="#e8f0fe" />
              {/* Legs */}
              <rect x="16" y="30" width="5" height="20" rx="2" fill="#2c5f8a" />
              <rect x="24" y="30" width="5" height="20" rx="2" fill="#2c5f8a" />
              {/* Head */}
              <circle cx="22" cy="5" r="8" fill="#f5cba7" />
              {/* Cap */}
              <path d="M14 5 Q22 -2 30 5" fill="#F26500" />
              <rect x="14" y="4" width="16" height="3" rx="1" fill="#F26500" />
            </g>

            {/* Small floating particles / decor */}
            <circle cx="420" cy="120" r="3" fill="white" opacity={0.3} />
            <circle cx="450" cy="150" r="2" fill="white" opacity={0.2} />
            <circle cx="80" cy="140" r="2.5" fill="white" opacity={0.25} />
            <circle cx="400" cy="80" r="1.5" fill="white" opacity={0.2} />
            <circle cx="120" cy="100" r="2" fill="white" opacity={0.2} />
          </svg>
        </div>
      </div>
    </section>
  )
}
