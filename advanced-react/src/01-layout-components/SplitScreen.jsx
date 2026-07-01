// SplitScreen: a layout component that splits the page into two panels.
// It owns the positioning. It knows nothing about what goes inside each panel.

const containerStyle = {
  display: 'flex',
  width: '100%',
}

export function SplitScreen({ children, leftWidth = 1, rightWidth = 1 }) {
  const [left, right] = children

  return (
    <div style={containerStyle}>
      <div style={{ flex: leftWidth, padding: '1rem', border: '1px solid #ddd' }}>
        {left}
      </div>
      <div style={{ flex: rightWidth, padding: '1rem', border: '1px solid #ddd' }}>
        {right}
      </div>
    </div>
  )
}
