import { RegularList } from './RegularList.jsx'
import { NumberedList } from './NumberedList.jsx'

// Matches the blog post: list-component-patterns

const users = [
  { name: 'James', role: 'Engineer', email: 'james@example.com' },
  { name: 'Denver', role: 'Designer', email: 'denver@example.com' },
  { name: 'Neal', role: 'Product', email: 'neal@example.com' },
]

function CompactUserRow({ user }) {
  return <p style={{ margin: '4px 0' }}>{user.name} - {user.role}</p>
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

export default function ListDemo() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>List Component Patterns</h1>

      <h2>RegularList (compact)</h2>
      <RegularList items={users} sourceName="user" ItemComponent={CompactUserRow} />

      <h2 style={{ marginTop: '2rem' }}>RegularList (detailed)</h2>
      <RegularList items={users} sourceName="user" ItemComponent={DetailedUserRow} />

      <h2 style={{ marginTop: '2rem' }}>NumberedList</h2>
      <NumberedList items={users} sourceName="user" ItemComponent={CompactUserRow} />
    </div>
  )
}
