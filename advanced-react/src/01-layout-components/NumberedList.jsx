// NumberedList: same interface as RegularList but adds an index before each item.
// Swap RegularList for NumberedList at the call site — nothing inside items changes.

export function NumberedList({ items, sourceName, ItemComponent }) {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <strong style={{ marginRight: '0.5rem' }}>{i + 1}.</strong>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  )
}
