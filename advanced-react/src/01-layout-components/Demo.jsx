import { SplitScreen } from './SplitScreen.jsx'
import { RegularList } from './RegularList.jsx'
import { NumberedList } from './NumberedList.jsx'
import { Modal } from './Modal.jsx'

// --- Sample data ---
const users = [
  { name: 'James', role: 'Engineer', email: 'james@example.com' },
  { name: 'Denver', role: 'Designer', email: 'denver@example.com' },
  { name: 'Neal', role: 'Product', email: 'neal@example.com' },
]

// --- Item components ---
function CompactUserRow({ user }) {
  return <p style={{ margin: '4px 0' }}>{user.name} — {user.role}</p>
}

function DetailedUserRow({ user }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '8px', marginBottom: '8px', borderRadius: '4px' }}>
      <strong>{user.name}</strong>
      <p style={{ margin: '2px 0' }}>Role: {user.role}</p>
      <p style={{ margin: '2px 0' }}>Email: {user.email}</p>
    </div>
  )
}

// --- Sidebar / content panels for SplitScreen ---
function Sidebar() {
  return (
    <nav>
      <h3>Navigation</h3>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

function Content() {
  return (
    <main>
      <h3>Main Content</h3>
      <p>This panel takes 3x the space of the sidebar.</p>
    </main>
  )
}

export default function Demo() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>

      <h1>Chapter 1: Layout Components</h1>

      {/* ── SplitScreen ─────────────────────────────────────────── */}
      <h2>1. SplitScreen</h2>
      <p>Left panel gets flex=1, right panel gets flex=3.</p>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <Sidebar />
        <Content />
      </SplitScreen>

      {/* ── RegularList ─────────────────────────────────────────── */}
      <h2 style={{ marginTop: '2rem' }}>2. RegularList (compact)</h2>
      <RegularList
        items={users}
        sourceName="user"
        ItemComponent={CompactUserRow}
      />

      <h2 style={{ marginTop: '2rem' }}>3. RegularList (detailed)</h2>
      <RegularList
        items={users}
        sourceName="user"
        ItemComponent={DetailedUserRow}
      />

      {/* ── NumberedList ────────────────────────────────────────── */}
      <h2 style={{ marginTop: '2rem' }}>4. NumberedList</h2>
      <NumberedList
        items={users}
        sourceName="user"
        ItemComponent={CompactUserRow}
      />

      {/* ── Modal ───────────────────────────────────────────────── */}
      <h2 style={{ marginTop: '2rem' }}>5. Modal</h2>
      <Modal>
        <h3>Hello from inside the modal</h3>
        <p>Click outside the box to close, or use the button below.</p>
      </Modal>

    </div>
  )
}
