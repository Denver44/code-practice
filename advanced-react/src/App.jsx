import { useState } from 'react'
import SplitScreenDemo from './01-layout-components/01-split-screen/Demo.jsx'
import ListDemo from './01-layout-components/02-list-patterns/Demo.jsx'
import ModalDemo from './01-layout-components/03-modal/Demo.jsx'
import ContainerDemo from './02-container-components/Demo.jsx'

// One entry per blog post, so a post links straight to its own demo.
const posts = [
  { id: 'layout-components-and-split-screen', label: 'Split Screen', component: SplitScreenDemo },
  { id: 'list-component-patterns', label: 'List Patterns', component: ListDemo },
  { id: 'modal-as-layout-component', label: 'Modal', component: ModalDemo },
  { id: 'container-components', label: 'Container Components', component: ContainerDemo },
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
  const [active, setActive] = useState(posts[0].id)
  const current = posts.find(p => p.id === active)
  const Demo = current.component

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={navStyle}>
        <span style={{ color: '#7c3aed', fontWeight: '800', fontSize: '1rem', marginRight: '1rem', alignSelf: 'center' }}>
          Advanced React
        </span>
        {posts.map((p, i) => (
          <button
            key={p.id}
            style={active === p.id ? btnActive : btnInactive}
            onClick={() => setActive(p.id)}
          >
            {i + 1}. {p.label}
          </button>
        ))}
      </div>

      <div style={{ ...titleStyle }}>
        {current.label}
      </div>

      <Demo />
    </div>
  )
}
