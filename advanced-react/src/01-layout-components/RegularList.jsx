// RegularList: renders any array with any item component.
// sourceName is the prop name the item component expects.
// e.g. sourceName="user" means each item gets user={item} as a prop.

export function RegularList({ items, sourceName, ItemComponent }) {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  )
}
