import { useState } from 'react'
import LayoutDemo from './01-layout-components/Demo.jsx'
import ContainerDemo from './02-container-components/Demo.jsx'

const chapters = [
  { id: '01', label: 'Layout Components', component: LayoutDemo },
  { id: '02', label: 'Container Components', component: ContainerDemo },
]

const navStyle = {
  display: 'flex',
  gap: '0.5rem',
  padding: '1rem 2rem',
  background: '#1e1e2e',
  borderBottom: '2px solid #313244',
}

const btnBase = {
  padding: '0.5rem 1.2rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
  transition: 'background 0.15s',
}

const btnActive = {
  ...btnBase,
  background: '#7c3aed',
  color: '#fff',
}

const btnInactive = {
  ...btnBase,
  background: '#313244',
  color: '#cdd6f4',
}

const titleStyle = {
  padding: '0 2rem',
  fontSize: '0.7rem',
  fontWeight: '700',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#888',
  lineHeight: '3.5rem',
  background: '#1e1e2e',
  borderBottom: '1px solid #313244',
}

export default function App() {
  const [active, setActive] = useState('01')
  const current = chapters.find(c => c.id === active)
  const Demo = current.component

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={navStyle}>
        <span style={{ color: '#7c3aed', fontWeight: '800', fontSize: '1rem', marginRight: '1rem', alignSelf: 'center' }}>
          Advanced React
        </span>
        {chapters.map(ch => (
          <button
            key={ch.id}
            style={active === ch.id ? btnActive : btnInactive}
            onClick={() => setActive(ch.id)}
          >
            {ch.id}. {ch.label}
          </button>
        ))}
      </div>

      <div style={{ ...titleStyle }}>
        Chapter {current.id} — {current.label}
      </div>

      <Demo />
    </div>
  )
}
