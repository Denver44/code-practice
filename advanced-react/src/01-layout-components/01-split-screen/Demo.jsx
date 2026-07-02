import { SplitScreen } from './SplitScreen.jsx'

// Matches the blog post: layout-components-and-split-screen

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

export default function SplitScreenDemo() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Layout Components: SplitScreen</h1>
      <p>Left panel gets flex=1, right panel gets flex=3.</p>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <Sidebar />
        <Content />
      </SplitScreen>
    </div>
  )
}
