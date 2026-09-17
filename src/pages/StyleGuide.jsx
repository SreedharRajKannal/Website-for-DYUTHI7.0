import '../styles/style-guide.css'

/* ─── Palette data ──────────────────────────────────────────────────── */

const palettes = [
  {
    name: 'Primary — Electric Teal',
    steps: [
      { label: '50',  var: '--color-primary-50',  hex: '#e6fcfc', dark: false },
      { label: '100', var: '--color-primary-100', hex: '#b3f5f5', dark: false },
      { label: '200', var: '--color-primary-200', hex: '#80eeee', dark: false },
      { label: '300', var: '--color-primary-300', hex: '#4de7e7', dark: false },
      { label: '400', var: '--color-primary-400', hex: '#1ae0e0', dark: false },
      { label: '500', var: '--color-primary-500', hex: '#00d4d4', dark: true },
      { label: '600', var: '--color-primary-600', hex: '#00a8a8', dark: true },
      { label: '700', var: '--color-primary-700', hex: '#007c7c', dark: true },
      { label: '800', var: '--color-primary-800', hex: '#005050', dark: true },
      { label: '900', var: '--color-primary-900', hex: '#002424', dark: true },
    ],
  },
  {
    name: 'Secondary — Warm Amber',
    steps: [
      { label: '50',  var: '--color-secondary-50',  hex: '#fff8eb', dark: false },
      { label: '100', var: '--color-secondary-100', hex: '#ffecc2', dark: false },
      { label: '200', var: '--color-secondary-200', hex: '#ffdf99', dark: false },
      { label: '300', var: '--color-secondary-300', hex: '#ffd370', dark: false },
      { label: '400', var: '--color-secondary-400', hex: '#ffc647', dark: false },
      { label: '500', var: '--color-secondary-500', hex: '#FFB81E', dark: false },
      { label: '600', var: '--color-secondary-600', hex: '#d49818', dark: true },
      { label: '700', var: '--color-secondary-700', hex: '#a87812', dark: true },
      { label: '800', var: '--color-secondary-800', hex: '#7d580c', dark: true },
      { label: '900', var: '--color-secondary-900', hex: '#523806', dark: true },
    ],
  },
  {
    name: 'Accent — Hot Coral',
    steps: [
      { label: '50',  var: '--color-accent-50',  hex: '#fff0ed', dark: false },
      { label: '100', var: '--color-accent-100', hex: '#ffd4cc', dark: false },
      { label: '200', var: '--color-accent-200', hex: '#ffb8aa', dark: false },
      { label: '300', var: '--color-accent-300', hex: '#ff9c88', dark: false },
      { label: '400', var: '--color-accent-400', hex: '#ff8066', dark: false },
      { label: '500', var: '--color-accent-500', hex: '#FF6B4A', dark: true },
      { label: '600', var: '--color-accent-600', hex: '#d4573b', dark: true },
      { label: '700', var: '--color-accent-700', hex: '#a8432d', dark: true },
      { label: '800', var: '--color-accent-800', hex: '#7d301f', dark: true },
      { label: '900', var: '--color-accent-900', hex: '#521d11', dark: true },
    ],
  },
]

const semanticColors = [
  { name: 'Success', var: '--color-success', hex: '#34D399' },
  { name: 'Warning', var: '--color-warning', hex: '#FBBF24' },
  { name: 'Error',   var: '--color-error',   hex: '#F87171' },
  { name: 'Info',    var: '--color-info',     hex: '#60A5FA' },
]

const bgSwatches = [
  { name: 'Base',     var: '--bg-base',     hex: '#0A0E13' },
  { name: 'Surface',  var: '--bg-surface',  hex: '#111820' },
  { name: 'Elevated', var: '--bg-elevated', hex: '#1A2332' },
]

const gradients = [
  { name: 'Primary',   var: 'var(--gradient-primary)' },
  { name: 'Secondary', var: 'var(--gradient-secondary)' },
  { name: 'Accent',    var: 'var(--gradient-accent)' },
  { name: 'Hero',      var: 'var(--gradient-hero)' },
]

/* ─── Typography data ───────────────────────────────────────────────── */

const typeScale = [
  { name: '--text-7xl', size: '4.768rem', label: '7xl' },
  { name: '--text-6xl', size: '3.815rem', label: '6xl' },
  { name: '--text-5xl', size: '3.052rem', label: '5xl' },
  { name: '--text-4xl', size: '2.441rem', label: '4xl' },
  { name: '--text-3xl', size: '1.953rem', label: '3xl' },
  { name: '--text-2xl', size: '1.563rem', label: '2xl' },
  { name: '--text-xl',  size: '1.25rem',  label: 'xl' },
  { name: '--text-lg',  size: '1.125rem', label: 'lg' },
  { name: '--text-base', size: '1rem',    label: 'base' },
  { name: '--text-sm',  size: '0.875rem', label: 'sm' },
  { name: '--text-xs',  size: '0.75rem',  label: 'xs' },
]

/* ─── Spacing data ──────────────────────────────────────────────────── */

const spacingTokens = [
  { name: '--space-1',  value: '0.25rem',  px: '4px' },
  { name: '--space-2',  value: '0.5rem',   px: '8px' },
  { name: '--space-3',  value: '0.75rem',  px: '12px' },
  { name: '--space-4',  value: '1rem',     px: '16px' },
  { name: '--space-6',  value: '1.5rem',   px: '24px' },
  { name: '--space-8',  value: '2rem',     px: '32px' },
  { name: '--space-10', value: '2.5rem',   px: '40px' },
  { name: '--space-12', value: '3rem',     px: '48px' },
  { name: '--space-16', value: '4rem',     px: '64px' },
  { name: '--space-20', value: '5rem',     px: '80px' },
  { name: '--space-24', value: '6rem',     px: '96px' },
  { name: '--space-32', value: '8rem',     px: '128px' },
]

/* ─── Component ─────────────────────────────────────────────────────── */

function StyleGuide() {
  return (
    <div className="style-guide">
      {/* Header */}
      <header className="sg-header">
        <h1>Dhyuthi 7.0 — Design System</h1>
        <p>
          &ldquo;Electric Diya&rdquo; theme — Teal + Amber duotone on deep charcoal.
          All tokens defined in <code>src/styles/tokens.css</code>.
        </p>
      </header>

      {/* ── Colors ─────────────────────────────────────────────── */}
      <section className="sg-section" id="sg-colors">
        <h2 className="sg-section-title">Color Palette</h2>
        <p className="sg-section-desc">
          10-step scales for primary, secondary, and accent. 500 is the key swatch.
        </p>

        {palettes.map((palette) => (
          <div className="sg-palette-group" key={palette.name}>
            <div className="sg-palette-label">{palette.name}</div>
            <div className="sg-swatches">
              {palette.steps.map((step) => (
                <div
                  key={step.var}
                  className={`sg-swatch ${step.dark ? 'sg-swatch--dark' : 'sg-swatch--light'}`}
                  style={{ backgroundColor: `var(${step.var})` }}
                >
                  <span className="sg-swatch-label">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Backgrounds */}
        <div className="sg-palette-group">
          <div className="sg-palette-label">Backgrounds</div>
          <div className="sg-bg-swatches">
            {bgSwatches.map((s) => (
              <div
                key={s.var}
                className="sg-bg-swatch"
                style={{ backgroundColor: `var(${s.var})` }}
              >
                <span>{s.name}</span>
                <span>{s.hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic */}
        <div className="sg-palette-group">
          <div className="sg-palette-label">Semantic</div>
          <div className="sg-semantic-row">
            {semanticColors.map((c) => (
              <div key={c.var} className="sg-semantic-chip">
                <span
                  className="sg-semantic-dot"
                  style={{ backgroundColor: `var(${c.var})` }}
                />
                {c.name} — {c.hex}
              </div>
            ))}
          </div>
        </div>

        {/* Gradients */}
        <div className="sg-palette-group">
          <div className="sg-palette-label">Gradients</div>
          <div className="sg-gradient-strip">
            {gradients.map((g) => (
              <div
                key={g.name}
                className="sg-gradient-card"
                style={{ background: g.var }}
              >
                <span>{g.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typography ─────────────────────────────────────────── */}
      <section className="sg-section" id="sg-typography">
        <h2 className="sg-section-title">Typography</h2>
        <p className="sg-section-desc">
          Major Third scale (1.25 ratio). Headings use Space Grotesk; body uses Inter.
        </p>

        <div className="sg-type-scale">
          {typeScale.map((t) => (
            <div className="sg-type-row" key={t.name}>
              <div className="sg-type-meta">
                <span className="sg-type-size">{t.size}</span>
                <span className="sg-type-name">{t.label}</span>
              </div>
              <div
                className="sg-type-sample"
                style={{ fontSize: `var(${t.name})` }}
              >
                Dhyuthi 7.0
              </div>
            </div>
          ))}
        </div>

        <div className="sg-font-specimen">
          <div className="sg-font-card">
            <div className="sg-font-card-title">Display — Space Grotesk</div>
            <div
              className="sg-font-card-sample"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ag 0123
            </div>
            <div
              className="sg-font-card-body"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789 !@#$%
            </div>
          </div>
          <div className="sg-font-card">
            <div className="sg-font-card-title">Body — Inter</div>
            <div
              className="sg-font-card-sample"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Ag 0123
            </div>
            <div
              className="sg-font-card-body"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789 !@#$%
            </div>
          </div>
        </div>
      </section>

      {/* ── Buttons ────────────────────────────────────────────── */}
      <section className="sg-section" id="sg-buttons">
        <h2 className="sg-section-title">Buttons</h2>
        <p className="sg-section-desc">
          Solid, outline, and ghost variants with glow hover effects.
        </p>

        {/* Solid */}
        <div className="sg-button-row">
          <span className="sg-button-row-label">Solid</span>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
        </div>

        {/* Outline */}
        <div className="sg-button-row">
          <span className="sg-button-row-label">Outline</span>
          <button className="btn btn-outline-primary">Primary</button>
          <button className="btn btn-outline-secondary">Secondary</button>
        </div>

        {/* Ghost */}
        <div className="sg-button-row">
          <span className="sg-button-row-label">Ghost</span>
          <button className="btn btn-ghost">Ghost Button</button>
        </div>

        {/* Sizes */}
        <div className="sg-button-row">
          <span className="sg-button-row-label">Sizes</span>
          <button className="btn btn-primary btn-sm">Small</button>
          <button className="btn btn-primary">Default</button>
          <button className="btn btn-primary btn-lg">Large</button>
        </div>

        {/* Disabled */}
        <div className="sg-button-row">
          <span className="sg-button-row-label">Disabled</span>
          <button className="btn btn-primary" disabled>Disabled</button>
          <button className="btn btn-outline-primary" disabled>Disabled</button>
        </div>
      </section>

      {/* ── Spacing ────────────────────────────────────────────── */}
      <section className="sg-section" id="sg-spacing">
        <h2 className="sg-section-title">Spacing Scale</h2>
        <p className="sg-section-desc">
          4px base unit. Visual bars show relative size.
        </p>

        <div className="sg-spacing-list">
          {spacingTokens.map((s) => (
            <div className="sg-spacing-item" key={s.name}>
              <span className="sg-spacing-label">{s.name}</span>
              <span className="sg-spacing-value">{s.px}</span>
              <div
                className="sg-spacing-bar"
                style={{ width: `var(${s.name})`, minWidth: '4px' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Shadows ────────────────────────────────────────────── */}
      <section className="sg-section" id="sg-shadows">
        <h2 className="sg-section-title">Shadows &amp; Glows</h2>
        <p className="sg-section-desc">
          Elevation shadows and colored glow effects for interactive states.
        </p>

        <div className="sg-shadow-grid">
          <div className="sg-shadow-card" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <span>Small</span>
            <span>--shadow-sm</span>
          </div>
          <div className="sg-shadow-card" style={{ boxShadow: 'var(--shadow-md)' }}>
            <span>Medium</span>
            <span>--shadow-md</span>
          </div>
          <div className="sg-shadow-card" style={{ boxShadow: 'var(--shadow-lg)' }}>
            <span>Large</span>
            <span>--shadow-lg</span>
          </div>
          <div className="sg-shadow-card" style={{ boxShadow: 'var(--shadow-xl)' }}>
            <span>X-Large</span>
            <span>--shadow-xl</span>
          </div>
          <div className="sg-shadow-card" style={{ boxShadow: 'var(--glow-primary)' }}>
            <span>Teal Glow</span>
            <span>--glow-primary</span>
          </div>
          <div className="sg-shadow-card" style={{ boxShadow: 'var(--glow-secondary)' }}>
            <span>Amber Glow</span>
            <span>--glow-secondary</span>
          </div>
          <div className="sg-shadow-card" style={{ boxShadow: 'var(--glow-accent)' }}>
            <span>Coral Glow</span>
            <span>--glow-accent</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StyleGuide
