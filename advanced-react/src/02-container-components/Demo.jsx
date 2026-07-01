import { useCallback } from 'react'
import { CurrentUserLoader } from './CurrentUserLoader.jsx'
import { UserLoader } from './UserLoader.jsx'
import { DataSource } from './DataSource.jsx'

// --- Display components (no fetching, just rendering) ---

function UserProfile({ user }) {
  if (!user) return <p>Loading...</p>
  return (
    <div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

// --- Mock data sources for DataSource demo ---

function mockFetchUser() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id: 2, name: 'Denver', email: 'denver@example.com', role: 'Designer' }), 600)
  )
}

function getFromLocalStorage(key) {
  return Promise.resolve(localStorage.getItem(key))
}

export default function Demo() {
  // useCallback keeps the function reference stable so useEffect does not loop
  const fetchUser = useCallback(mockFetchUser, [])
  const fetchToken = useCallback(() => getFromLocalStorage('session-token'), [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>

      <h1>Chapter 2: Container Components</h1>

      {/* ── CurrentUserLoader ───────────────────────────────── */}
      <h2>1. CurrentUserLoader</h2>
      <p>Fetches the current user and injects it. <code>UserProfile</code> just renders.</p>
      <CurrentUserLoader>
        <UserProfile />
      </CurrentUserLoader>

      {/* ── UserLoader ──────────────────────────────────────── */}
      <h2>2. UserLoader (by ID)</h2>
      <p>Same idea but takes a userId prop. Two different users from one display component.</p>
      <UserLoader userId={1}>
        <UserProfile />
      </UserLoader>
      <UserLoader userId={3}>
        <UserProfile />
      </UserLoader>

      {/* ── DataSource ──────────────────────────────────────── */}
      <h2>3. DataSource (any getData function)</h2>
      <p>From server:</p>
      <DataSource getData={fetchUser} resourceName="user">
        <UserProfile />
      </DataSource>

      <p>From localStorage (open DevTools → Application → Local Storage and set <code>session-token</code>):</p>
      <DataSource getData={fetchToken} resourceName="user">
        <TokenDisplay />
      </DataSource>

    </div>
  )
}

function TokenDisplay({ user }) {
  return (
    <div style={{ background: '#f5f5f5', padding: '0.5rem', borderRadius: '4px' }}>
      session-token value: <code>{user ?? '(nothing stored)'}</code>
    </div>
  )
}
